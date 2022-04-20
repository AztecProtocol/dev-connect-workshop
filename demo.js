const {
  createAztecSdk,
  EthAddress,
  WalletProvider,
  EthersAdapter,
  TxSettlementTime,
  DefiSettlementTime,
  AztecSdk,
} = require("@aztec/sdk");
const { JsonRpcProvider } = require("@ethersproject/providers");
const ethers = require("ethers");
const createDebug = require("debug");
const { randomBytes } = require("crypto");
const debug = createDebug("bb:demo");

const ROLLUP_HOST = "https://api.aztec.network/aztec-connect-dev/falafel";
const ETHEREUM_HOST = "https://mainnet-fork.aztec.network";

const AZTEC_PRIVATE_KEY = Buffer.from(
  "66ea0d41eb3a426e587a946f7af5e1f75bb32896c89e9a6c1339b9646bfeda0d",
  "hex"
);

// const AZTEC_PRIVATE_KEY = randomBytes(32); // STORE THIS as hex
let userId;
const ETHEREUM_ADDRESS = EthAddress.fromString(
  "0x548826E4F821aEA4AfC674aaf95D448B3Bc95084"
);
const ETHEREUM_PRIVATE_KEY = process.env.PRIVATE_KEY;

const ethersProvider = new JsonRpcProvider(ETHEREUM_HOST);
const ethereumProvider = new EthersAdapter(ethersProvider);
const walletProvider = new WalletProvider(ethereumProvider);
walletProvider.addAccount(ETHEREUM_PRIVATE_KEY);
let sdk;
const shield = async (l1Depositor, aztecUser) => {
  const shieldValue = sdk.toBaseUnits(0, "1");
  const depositFees = await sdk.getDepositFees(shieldValue.assetId);
  debug(
    `shielding ${sdk.fromBaseUnits(
      shieldValue,
      true
    )} from ${l1Depositor.toString()}...`
  );

  const signer = await sdk.createSchnorrSigner(AZTEC_PRIVATE_KEY);
  // Last deposit pays for instant rollup to flush.
  const fee = depositFees[TxSettlementTime.NEXT_ROLLUP];
  const controller = sdk.createDepositController(
    aztecUser.id,
    signer,
    shieldValue,
    fee,
    l1Depositor
  );
  await controller.createProof();
  await controller.depositFundsToContractWithProofApproval();
  await controller.awaitDepositFundsToContract();
  await controller.send();
  await controller.awaitSettlement();
};
const defiInteraction = async (aztecUser) => {
  const bridgeAddressId = 4;
  const ethAssetId = 0;
  const wstETHAssetId = 10;
  const ethToWstETHBridge = sdk.constructBridgeId(
    bridgeAddressId,
    ethAssetId,
    wstETHAssetId
  );
  const ethToWstETHFees = await sdk.getDefiFees(ethToWstETHBridge);
  const fee = ethToWstETHFees[DefiSettlementTime.DEADLINE];
  const balance = await sdk.getMaxSpendableValue(ethAssetId, aztecUser.id);
  const defiValue = sdk.toBaseUnits(0, "0.1");

  debug("balance", balance, defiValue);

  if (balance < defiValue) {
    throw new Error("no balance :(");
  }

  console.log("Lets stake ETH on the beacon chan, privately of course.... \n");
  const signer = await sdk.createSchnorrSigner(AZTEC_PRIVATE_KEY);
  const controller = sdk.createDefiController(
    aztecUser.id,
    signer,
    ethToWstETHBridge,
    defiValue,
    fee
  );
  await controller.createProof();
  await controller.send();

  debug(`waiting for defi interaction to complete...`);
  await controller.awaitDefiFinalisation();

  debug("waiting for claim to settle...");
  await controller.awaitSettlement();

  const [defiTx] = await sdk.getDefiTxs(aztecUser.id);
  console.log("success", defiTx);
};

const init = async () => {
  sdk = await createAztecSdk(walletProvider, {
    serverUrl: ROLLUP_HOST,
    pollInterval: 1000,
    memoryDb: true,
    minConfirmation: 1,
    minConfirmationEHW: 1,
  });

  await sdk.run();
  await sdk.awaitSynchronised();
  const user = await sdk.addUser(AZTEC_PRIVATE_KEY);
  userId = user.id;

  await shield(ETHEREUM_ADDRESS, user);
  await defiInteraction(user);
};

init();

const {
  AssetId,
  BridgeId,
  createWalletSdk,
  EthAddress,
  TxType,
  WalletProvider,
  EthersAdapter,
} = require('@aztec/sdk');
const { JsonRpcProvider } = require('@ethersproject/providers');
const ethers = require('ethers');
const { randomBytes } = require('crypto');

const ROLLUP_HOST = 'https://api.aztec.network/falafel-defi-bridge';
const ETHEREUM_HOST =
  'https://goerli.infura.io/v3/6a04b7c89c5b421faefde663f787aa35';

// const AZTEC_PRIVATE_KEY = Buffer.from(
//   '66ea0d41eb3a426e587a946f7af5e1a75bb32896c89e9a6c1339b9646bfedd0d',
//   'hex'
// );

const AZTEC_PRIVATE_KEY = randomBytes(32); // STORE THIS as hex
let userId;
const ETHEREUM_ADDRESS = 'YOUR ADDRESS';
const ETHEREUM_PRIVATE_KEY = 'YOUR PRIVATE KEY';

const ethersProvider = new JsonRpcProvider(ETHEREUM_HOST);
const ethereumProvider = new EthersAdapter(ethersProvider);
const walletProvider = new WalletProvider(ethereumProvider);
walletProvider.addAccount(ETHEREUM_PRIVATE_KEY);
let sdk;
const shield = async () => {
  const assetId = AssetId.ETH;
  const value = sdk.toBaseUnits(assetId, '0.2');
  const txFee = await sdk.getFee(assetId, TxType.DEPOSIT);

  const signer = sdk.createSchnorrSigner(AZTEC_PRIVATE_KEY);
  const depositor = EthAddress.fromString(ETHEREUM_ADDRESS);

  const proofOutput = await sdk.createDepositProof(
    assetId,
    depositor,
    userId,
    value,
    txFee,
    signer
  );
  const signature = await sdk.signProof(proofOutput, depositor);

  await sdk.depositFundsToContract(assetId, depositor, value + txFee);

  const txHash = await sdk.sendProof(proofOutput, signature);
  await sdk.awaitSettlement(txHash, 10000);
};
const defiInteraction = async () => {
  const defiBridge = EthAddress.fromString(
    'YOUR BRIDGE CONTRACT'
  );

  // const defiBridge = EthAddress.fromString(
  //   '0xC4528eDC0F2CaeA2b9c65D05aa9A460891C5f2d4' // uniswap bridge
  // );

  const inputAssetId = AssetId.ETH;
  const outputAssetIdA = AssetId.DAI;

  const outputAssetIdB = 0;

  const bridgeId = new BridgeId(
    defiBridge,
    1,
    inputAssetId,
    outputAssetIdA,
    outputAssetIdB
  );
  const txFee = await sdk.getFee(inputAssetId, TxType.DEFI_DEPOSIT);

  const depositValue = sdk.toBaseUnits(inputAssetId, '0.1');
  const initialBalance = sdk.getBalance(inputAssetId, userId);

  const signer = sdk.createSchnorrSigner(AZTEC_PRIVATE_KEY);

  const proofOutput = await sdk.createDefiProof(
    bridgeId,
    userId,
    depositValue,
    txFee,
    signer
  );

  const txHash = await sdk.sendProof(proofOutput);

  await sdk.awaitSettlement(txHash, 10000);

  const defiTxs = await sdk.getDefiTxs(userId);
};

const init = async () => {
  sdk = await createWalletSdk(walletProvider, ROLLUP_HOST, {
    syncInstances: false,
    saveProvingKey: false,
    clearDb: true,
    dbPath: ':memory:',
    minConfirmation: 1,
    debug: true,
    minConfirmationEHW: 1,
  });
  await sdk.init();
  await sdk.awaitSynchronised();
  const user = await sdk.addUser(AZTEC_PRIVATE_KEY);
  userId = user.id;

  await shield();
  await defiInteraction();
};

init();

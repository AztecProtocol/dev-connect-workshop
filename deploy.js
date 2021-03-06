const LidoBridge, {
  LidoBridge__factory,
} = require("@aztec/bridge-clients/client-dest/typechain-types/factories/LidoBridge__factory");
const { Contract, Signer } = require("ethers");

const gasLimit = 5000000;
const wstETH = "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0";

export const deployLidoBridge = async (
  owner,
  rollup,
  referralCode = "0x0000000000000000000000000000000000000000"
) => {
  console.error("Deploying LidoBridge...");
  const bridge = await new LidoBridge__factory(owner).deploy(
    rollup.address,
    referralCode, // TODO set a referral code if we want to get lido tokens
    {
      gasLimit,
    }
  );
  console.error(`LidoBridge contract address: ${bridge.address}`);

  await sdk.setSupportedBridge(bridge.address, 500000n, { gasLimit });
  await sdk.setSupportedAsset(wstETH, 75000, { gasLimit });
  return bridge;
};

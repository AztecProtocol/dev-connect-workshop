#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const IUniswapV2Router02_json_1 = __importDefault(require("../../artifacts/@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol/IUniswapV2Router02.json"));
const IFeeDistributor_json_1 = __importDefault(require("../../artifacts/contracts/interfaces/IFeeDistributor.sol/IFeeDistributor.json"));
const RollupProcessor_json_1 = __importDefault(require("../../artifacts/contracts/RollupProcessor.sol/RollupProcessor.json"));
const ERC20Mintable_json_1 = __importDefault(require("../../artifacts/contracts/test/ERC20Mintable.sol/ERC20Mintable.json"));
const deploy_price_feed_1 = require("../deploy_price_feed");
const deploy_uniswap_1 = require("../deploy_uniswap");
const add_asset_1 = require("./add_asset");
const { ETHEREUM_HOST, INFURA_API_KEY, NETWORK, PRIVATE_KEY, ROLLUP_CONTRACT_ADDRESS } = process.env;
function getSigner() {
    if (INFURA_API_KEY && NETWORK && PRIVATE_KEY) {
        console.error(`Infura network: ${NETWORK}`);
        const provider = new ethers_1.ethers.providers.InfuraProvider(NETWORK, INFURA_API_KEY);
        return new ethers_1.ethers.Wallet(PRIVATE_KEY, provider);
    }
    else if (ETHEREUM_HOST) {
        console.error(`Json rpc provider: ${ETHEREUM_HOST}`);
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(ETHEREUM_HOST);
        return provider.getSigner(0);
    }
}
async function main() {
    const [, , erc20Address, supportsPermitStr, initialTokenSupplyStr, initialEthSupplyStr, initialPriceStr,] = process.argv;
    const supportsPermit = !!supportsPermitStr;
    const signer = getSigner();
    if (!signer) {
        throw new Error('Failed to create signer. Set ETHEREUM_HOST or INFURA_API_KEY, NETWORK, PRIVATE_KEY.');
    }
    if (!ROLLUP_CONTRACT_ADDRESS) {
        throw new Error('Pass a ROLLUP_CONTRACT_ADDRESS.');
    }
    const rollup = new ethers_1.Contract(ROLLUP_CONTRACT_ADDRESS, RollupProcessor_json_1.default.abi, signer);
    const asset = erc20Address
        ? new ethers_1.Contract(erc20Address, ERC20Mintable_json_1.default.abi, signer)
        : await add_asset_1.addAsset(rollup, signer, supportsPermit);
    const feeDistributorAddress = await rollup.feeDistributor();
    const feeDistributor = new ethers_1.Contract(feeDistributorAddress, IFeeDistributor_json_1.default.abi, signer);
    const uniswapRouter = new ethers_1.Contract(await feeDistributor.router(), IUniswapV2Router02_json_1.default.abi, signer);
    const initialTokenSupply = initialTokenSupplyStr ? BigInt(initialTokenSupplyStr) : undefined;
    const initialEthSupply = initialEthSupplyStr ? BigInt(initialEthSupplyStr) : undefined;
    await deploy_uniswap_1.createPair(signer, uniswapRouter, asset, initialTokenSupply, initialEthSupply);
    const initialPrice = initialPriceStr ? BigInt(initialPriceStr) : undefined;
    await deploy_price_feed_1.deployPriceFeed(signer, initialPrice);
}
main().catch(error => {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGVwbG95L2FkZF9hc3NldC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtQ0FBa0Q7QUFDbEQsd0tBQTJJO0FBQzNJLHlJQUE0RztBQUM1Ryw4SEFBaUc7QUFDakcsNkhBQWdHO0FBQ2hHLDREQUF1RDtBQUN2RCxzREFBK0M7QUFDL0MsMkNBQXVDO0FBRXZDLE1BQU0sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBRXJHLFNBQVMsU0FBUztJQUNoQixJQUFJLGNBQWMsSUFBSSxPQUFPLElBQUksV0FBVyxFQUFFO1FBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDNUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBVyxDQUFDO0tBQzNEO1NBQU0sSUFBSSxhQUFhLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5QjtBQUNILENBQUM7QUFDRCxLQUFLLFVBQVUsSUFBSTtJQUNqQixNQUFNLENBQ0osQUFESyxFQUVMLEFBREMsRUFFRCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixtQkFBbUIsRUFDbkIsZUFBZSxFQUNoQixHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDakIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO0lBRTNDLE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUM7S0FDeEc7SUFFRCxJQUFJLENBQUMsdUJBQXVCLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxpQkFBUSxDQUFDLHVCQUF1QixFQUFFLDhCQUFlLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xGLE1BQU0sS0FBSyxHQUFHLFlBQVk7UUFDeEIsQ0FBQyxDQUFDLElBQUksaUJBQVEsQ0FBQyxZQUFZLEVBQUUsNEJBQWEsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxNQUFNLG9CQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuRCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVELE1BQU0sY0FBYyxHQUFHLElBQUksaUJBQVEsQ0FBQyxxQkFBcUIsRUFBRSw4QkFBZSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RixNQUFNLGFBQWEsR0FBRyxJQUFJLGlCQUFRLENBQUMsTUFBTSxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsaUNBQWtCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2xHLE1BQU0sa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDN0YsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2RixNQUFNLDJCQUFVLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRixNQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzNFLE1BQU0sbUNBQWUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNuQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUMifQ==
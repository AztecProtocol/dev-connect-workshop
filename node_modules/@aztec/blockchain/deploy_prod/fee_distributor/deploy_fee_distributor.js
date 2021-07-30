"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployFeeDistributor = void 0;
const ethers_1 = require("ethers");
const AztecFeeDistributor_json_1 = __importDefault(require("../../artifacts/contracts/AztecFeeDistributor.sol/AztecFeeDistributor.json"));
async function deployFeeDistributor(signer, rollupProcessorAddress, uniswapRouterAddress) {
    console.error('Deploying FeeDistributor...');
    const feeDistributorLibrary = new ethers_1.ContractFactory(AztecFeeDistributor_json_1.default.abi, AztecFeeDistributor_json_1.default.bytecode, signer);
    const feeDistributor = await feeDistributorLibrary.deploy(rollupProcessorAddress, uniswapRouterAddress);
    console.error(`FeeDistributor contract address: ${feeDistributor.address}`);
    return feeDistributor;
}
exports.deployFeeDistributor = deployFeeDistributor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95X2ZlZV9kaXN0cmlidXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZXBsb3lfcHJvZC9mZWVfZGlzdHJpYnV0b3IvZGVwbG95X2ZlZV9kaXN0cmlidXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBaUQ7QUFDakQsMElBQTZHO0FBRXRHLEtBQUssVUFBVSxvQkFBb0IsQ0FDeEMsTUFBYyxFQUNkLHNCQUE4QixFQUM5QixvQkFBNEI7SUFFNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdDLE1BQU0scUJBQXFCLEdBQUcsSUFBSSx3QkFBZSxDQUFDLGtDQUFtQixDQUFDLEdBQUcsRUFBRSxrQ0FBbUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakgsTUFBTSxjQUFjLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RyxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUU1RSxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBWEQsb0RBV0MifQ==
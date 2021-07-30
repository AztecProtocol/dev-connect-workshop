#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployFeeDistributor = void 0;
const ethers_1 = require("ethers");
const AztecFeeDistributor_json_1 = __importDefault(require("../artifacts/contracts/AztecFeeDistributor.sol/AztecFeeDistributor.json"));
async function deployFeeDistributor(signer, rollupProcessor, uniswapRouter) {
    console.error('Deploying FeeDistributor...');
    const feeDistributorLibrary = new ethers_1.ContractFactory(AztecFeeDistributor_json_1.default.abi, AztecFeeDistributor_json_1.default.bytecode, signer);
    const feeDistributor = await feeDistributorLibrary.deploy(rollupProcessor.address, uniswapRouter.address);
    console.error(`FeeDistributor contract address: ${feeDistributor.address}`);
    return feeDistributor;
}
exports.deployFeeDistributor = deployFeeDistributor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95X2ZlZV9kaXN0cmlidXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXBsb3kvZGVwbG95X2ZlZV9kaXN0cmlidXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsbUNBQTJEO0FBQzNELHVJQUEwRztBQUVuRyxLQUFLLFVBQVUsb0JBQW9CLENBQUMsTUFBYyxFQUFFLGVBQXlCLEVBQUUsYUFBdUI7SUFDM0csT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdDLE1BQU0scUJBQXFCLEdBQUcsSUFBSSx3QkFBZSxDQUFDLGtDQUFtQixDQUFDLEdBQUcsRUFBRSxrQ0FBbUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDakgsTUFBTSxjQUFjLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFNUUsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQztBQVBELG9EQU9DIn0=
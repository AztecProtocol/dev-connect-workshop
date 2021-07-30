"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonRpcProvider = void 0;
const ethers_adapter_1 = require("./ethers_adapter");
const providers_1 = require("@ethersproject/providers");
__exportStar(require("./ethereum_provider"), exports);
__exportStar(require("./ethers_adapter"), exports);
__exportStar(require("./wallet_provider"), exports);
__exportStar(require("./web3_adapter"), exports);
__exportStar(require("./web3_provider"), exports);
class JsonRpcProvider extends ethers_adapter_1.EthersAdapter {
    constructor(host) {
        super(new providers_1.JsonRpcProvider(host));
    }
}
exports.JsonRpcProvider = JsonRpcProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvdmlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFpRDtBQUNqRCx3REFBa0U7QUFFbEUsc0RBQW9DO0FBQ3BDLG1EQUFpQztBQUNqQyxvREFBa0M7QUFDbEMsaURBQStCO0FBQy9CLGtEQUFnQztBQUVoQyxNQUFhLGVBQWdCLFNBQVEsOEJBQWE7SUFDaEQsWUFBWSxJQUFZO1FBQ3RCLEtBQUssQ0FBQyxJQUFJLDJCQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUFKRCwwQ0FJQyJ9
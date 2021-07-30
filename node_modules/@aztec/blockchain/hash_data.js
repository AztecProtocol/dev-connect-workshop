"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashData = void 0;
const ethers_1 = require("ethers");
function hashData(signingData) {
    return ethers_1.ethers.utils.solidityKeccak256(['bytes'], [signingData]);
}
exports.hashData = hashData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaF9kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2hhc2hfZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBZ0M7QUFFaEMsU0FBZ0IsUUFBUSxDQUFDLFdBQW1CO0lBQzFDLE9BQU8sZUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDO0FBRkQsNEJBRUMifQ==
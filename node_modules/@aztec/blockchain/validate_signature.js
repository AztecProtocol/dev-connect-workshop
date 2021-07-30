"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignature = void 0;
const ethers_1 = require("ethers");
const hash_data_1 = require("./hash_data");
function validateSignature(publicOwner, signature, signingData) {
    const msgHash = hash_data_1.hashData(signingData);
    const digest = ethers_1.ethers.utils.arrayify(msgHash);
    const recoveredSigner = ethers_1.ethers.utils.verifyMessage(digest, `0x${signature.toString('hex')}`);
    return recoveredSigner.toLowerCase() === publicOwner.toString().toLowerCase();
}
exports.validateSignature = validateSignature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVfc2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ZhbGlkYXRlX3NpZ25hdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBZ0M7QUFDaEMsMkNBQXVDO0FBRXZDLFNBQWdCLGlCQUFpQixDQUFDLFdBQXVCLEVBQUUsU0FBaUIsRUFBRSxXQUFtQjtJQUMvRixNQUFNLE9BQU8sR0FBRyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sTUFBTSxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLE1BQU0sZUFBZSxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLE9BQU8sZUFBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRixDQUFDO0FBTEQsOENBS0MifQ==
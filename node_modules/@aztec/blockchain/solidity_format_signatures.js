"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solidityFormatSignatures = void 0;
/**
 * Format all signatures into useful solidity format. EVM word size is 32bytes
 * and we're supplying a concatenated array of signatures - so need each ECDSA
 * param (v, r, s) to occupy 32 bytes.
 *
 * Zero left padding v by 31 bytes.
 */
function solidityFormatSignatures(signatures) {
    const paddedSignatures = signatures.map(currentSignature => {
        const v = currentSignature.slice(-1);
        return Buffer.concat([currentSignature.slice(0, 64), Buffer.alloc(31), v]);
    });
    return Buffer.concat(paddedSignatures);
}
exports.solidityFormatSignatures = solidityFormatSignatures;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29saWRpdHlfZm9ybWF0X3NpZ25hdHVyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc29saWRpdHlfZm9ybWF0X3NpZ25hdHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsU0FBZ0Isd0JBQXdCLENBQUMsVUFBb0I7SUFDM0QsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDekQsTUFBTSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBTkQsNERBTUMifQ==
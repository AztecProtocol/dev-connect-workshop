"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployVerifier = void 0;
const ethers_1 = require("ethers");
const TurboVerifier_json_1 = __importDefault(require("../artifacts/contracts/verifier/TurboVerifier.sol/TurboVerifier.json"));
const VerificationKeys_json_1 = __importDefault(require("../artifacts/contracts/verifier/keys/VerificationKeys.sol/VerificationKeys.json"));
function linkBytecode(artifact, libraries) {
    let bytecode = artifact.bytecode;
    for (const entry of Object.entries(artifact.linkReferences)) {
        const [, fileReferences] = entry;
        for (const fileEntry of Object.entries(fileReferences)) {
            const [libName, fixups] = fileEntry;
            const addr = libraries[libName];
            if (addr === undefined) {
                continue;
            }
            for (const fixup of fixups) {
                bytecode =
                    bytecode.substr(0, 2 + fixup.start * 2) +
                        addr.substr(2) +
                        bytecode.substr(2 + (fixup.start + fixup.length) * 2);
            }
        }
    }
    return bytecode;
}
async function deployVerifier(signer) {
    console.error('Deploying VerificationKeys...');
    const verificationKeysLibrary = new ethers_1.ContractFactory(VerificationKeys_json_1.default.abi, VerificationKeys_json_1.default.bytecode, signer);
    const verificationKeysLib = await verificationKeysLibrary.deploy();
    console.error('Deploying TurboVerifier...');
    const linkedVBytecode = linkBytecode(TurboVerifier_json_1.default, {
        VerificationKeys: verificationKeysLib.address,
    });
    const verifierFactory = new ethers_1.ContractFactory(TurboVerifier_json_1.default.abi, linkedVBytecode, signer);
    const verifier = await verifierFactory.deploy();
    return verifier;
}
exports.deployVerifier = deployVerifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95X3ZlcmlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGxveS9kZXBsb3lfdmVyaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsbUNBQWlEO0FBQ2pELDhIQUFpRztBQUNqRyw0SUFBK0c7QUFFL0csU0FBUyxZQUFZLENBQUMsUUFBYSxFQUFFLFNBQWM7SUFDakQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQzNELE1BQU0sQ0FBQyxFQUFFLGNBQWMsQ0FBQyxHQUFRLEtBQUssQ0FBQztRQUN0QyxLQUFLLE1BQU0sU0FBUyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdEQsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBUSxTQUFTLENBQUM7WUFDekMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDdEIsU0FBUzthQUNWO1lBRUQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7Z0JBQzFCLFFBQVE7b0JBQ04sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzt3QkFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7S0FDRjtJQUVELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUM7QUFFTSxLQUFLLFVBQVUsY0FBYyxDQUFDLE1BQWM7SUFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSx3QkFBZSxDQUFDLCtCQUFnQixDQUFDLEdBQUcsRUFBRSwrQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0csTUFBTSxtQkFBbUIsR0FBRyxNQUFNLHVCQUF1QixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRW5FLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM1QyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsNEJBQWEsRUFBRTtRQUNsRCxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPO0tBQzlDLENBQUMsQ0FBQztJQUNILE1BQU0sZUFBZSxHQUFHLElBQUksd0JBQWUsQ0FBQyw0QkFBYSxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQVpELHdDQVlDIn0=
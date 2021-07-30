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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95X3ZlcmlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlcGxveV9wcm9kL2RlcGxveV92ZXJpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBaUQ7QUFDakQsOEhBQWlHO0FBQ2pHLDRJQUErRztBQUUvRyxTQUFTLFlBQVksQ0FBQyxRQUFhLEVBQUUsU0FBYztJQUNqRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ2pDLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDM0QsTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDLEdBQVEsS0FBSyxDQUFDO1FBQ3RDLEtBQUssTUFBTSxTQUFTLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN0RCxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFRLFNBQVMsQ0FBQztZQUN6QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN0QixTQUFTO2FBQ1Y7WUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsUUFBUTtvQkFDTixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekQ7U0FDRjtLQUNGO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVNLEtBQUssVUFBVSxjQUFjLENBQUMsTUFBYztJQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFDL0MsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHdCQUFlLENBQUMsK0JBQWdCLENBQUMsR0FBRyxFQUFFLCtCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3RyxNQUFNLG1CQUFtQixHQUFHLE1BQU0sdUJBQXVCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFbkUsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyw0QkFBYSxFQUFFO1FBQ2xELGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLE9BQU87S0FDOUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxlQUFlLEdBQUcsSUFBSSx3QkFBZSxDQUFDLDRCQUFhLENBQUMsR0FBRyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4RixNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBWkQsd0NBWUMifQ==
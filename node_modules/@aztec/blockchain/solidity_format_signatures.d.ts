/// <reference types="node" />
/**
 * Format all signatures into useful solidity format. EVM word size is 32bytes
 * and we're supplying a concatenated array of signatures - so need each ECDSA
 * param (v, r, s) to occupy 32 bytes.
 *
 * Zero left padding v by 31 bytes.
 */
export declare function solidityFormatSignatures(signatures: Buffer[]): Buffer;
//# sourceMappingURL=solidity_format_signatures.d.ts.map
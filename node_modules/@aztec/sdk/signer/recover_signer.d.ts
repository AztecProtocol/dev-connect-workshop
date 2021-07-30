import { GrumpkinAddress } from '@aztec/barretenberg/address';
import { SchnorrSignature } from '@aztec/barretenberg/crypto';
import { Signer } from './signer';
export declare class RecoverSignatureSigner implements Signer {
    private publicKey;
    private signature;
    constructor(publicKey: GrumpkinAddress, signature: SchnorrSignature);
    getPublicKey(): GrumpkinAddress;
    signMessage(): Promise<SchnorrSignature>;
}
//# sourceMappingURL=recover_signer.d.ts.map
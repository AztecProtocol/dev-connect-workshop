/// <reference types="node" />
import { GrumpkinAddress } from '@aztec/barretenberg/address';
import { AccountId } from '@aztec/barretenberg/account_id';
import { SchnorrSignature } from '@aztec/barretenberg/crypto';
export declare class RecoveryData {
    accountId: AccountId;
    signature: SchnorrSignature;
    constructor(accountId: AccountId, signature: SchnorrSignature);
    static fromBuffer(data: Buffer): RecoveryData;
    static fromString(data: string): RecoveryData;
    toBuffer(): Buffer;
    toString(): string;
}
export declare class RecoveryPayload {
    trustedThirdPartyPublicKey: GrumpkinAddress;
    recoveryPublicKey: GrumpkinAddress;
    recoveryData: RecoveryData;
    constructor(trustedThirdPartyPublicKey: GrumpkinAddress, recoveryPublicKey: GrumpkinAddress, recoveryData: RecoveryData);
    static fromBuffer(data: Buffer): RecoveryPayload;
    static fromString(data: string): RecoveryPayload;
    toBuffer(): Buffer;
    toString(): string;
}
//# sourceMappingURL=recovery_payload.d.ts.map
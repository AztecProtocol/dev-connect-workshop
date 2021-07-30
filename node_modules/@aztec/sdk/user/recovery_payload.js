"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveryPayload = exports.RecoveryData = void 0;
const address_1 = require("@aztec/barretenberg/address");
const account_id_1 = require("@aztec/barretenberg/account_id");
const crypto_1 = require("@aztec/barretenberg/crypto");
class RecoveryData {
    constructor(accountId, signature) {
        this.accountId = accountId;
        this.signature = signature;
    }
    static fromBuffer(data) {
        const accountId = account_id_1.AccountId.fromBuffer(data.slice(0, 32));
        const signature = new crypto_1.SchnorrSignature(data.slice(32, 96));
        return new RecoveryData(accountId, signature);
    }
    static fromString(data) {
        return RecoveryData.fromBuffer(Buffer.from(data.replace(/^0x/i, ''), 'hex'));
    }
    toBuffer() {
        return Buffer.concat([this.accountId.toBuffer(), this.signature.toBuffer()]);
    }
    toString() {
        return `0x${this.toBuffer().toString('hex')}`;
    }
}
exports.RecoveryData = RecoveryData;
class RecoveryPayload {
    constructor(trustedThirdPartyPublicKey, recoveryPublicKey, recoveryData) {
        this.trustedThirdPartyPublicKey = trustedThirdPartyPublicKey;
        this.recoveryPublicKey = recoveryPublicKey;
        this.recoveryData = recoveryData;
    }
    static fromBuffer(data) {
        const trustedThirdPartyPublicKey = new address_1.GrumpkinAddress(data.slice(0, 64));
        const recoveryPublicKey = new address_1.GrumpkinAddress(data.slice(64, 64 + 64));
        const recoveryData = RecoveryData.fromBuffer(data.slice(64 + 64));
        return new RecoveryPayload(trustedThirdPartyPublicKey, recoveryPublicKey, recoveryData);
    }
    static fromString(data) {
        return RecoveryPayload.fromBuffer(Buffer.from(data.replace(/^0x/i, ''), 'hex'));
    }
    toBuffer() {
        return Buffer.concat([
            this.trustedThirdPartyPublicKey.toBuffer(),
            this.recoveryPublicKey.toBuffer(),
            this.recoveryData.toBuffer(),
        ]);
    }
    toString() {
        return `0x${this.toBuffer().toString('hex')}`;
    }
}
exports.RecoveryPayload = RecoveryPayload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3ZlcnlfcGF5bG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyL3JlY292ZXJ5X3BheWxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseURBQThEO0FBQzlELCtEQUEyRDtBQUMzRCx1REFBOEQ7QUFFOUQsTUFBYSxZQUFZO0lBQ3ZCLFlBQW1CLFNBQW9CLEVBQVMsU0FBMkI7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUUvRSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDNUIsTUFBTSxTQUFTLEdBQUcsc0JBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWTtRQUM1QixPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBcEJELG9DQW9CQztBQUVELE1BQWEsZUFBZTtJQUMxQixZQUNTLDBCQUEyQyxFQUMzQyxpQkFBa0MsRUFDbEMsWUFBMEI7UUFGMUIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFpQjtRQUMzQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWlCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFSixNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDNUIsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRSxNQUFNLGlCQUFpQixHQUFHLElBQUkseUJBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RSxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLGVBQWUsQ0FBQywwQkFBMEIsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQzVCLE9BQU8sZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFFBQVEsRUFBRTtZQUMxQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0NBQ0Y7QUE3QkQsMENBNkJDIn0=
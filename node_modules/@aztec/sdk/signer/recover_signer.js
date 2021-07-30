"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverSignatureSigner = void 0;
class RecoverSignatureSigner {
    constructor(publicKey, signature) {
        this.publicKey = publicKey;
        this.signature = signature;
    }
    getPublicKey() {
        return this.publicKey;
    }
    async signMessage() {
        return this.signature;
    }
}
exports.RecoverSignatureSigner = RecoverSignatureSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3Zlcl9zaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2lnbmVyL3JlY292ZXJfc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEsc0JBQXNCO0lBQ2pDLFlBQW9CLFNBQTBCLEVBQVUsU0FBMkI7UUFBL0QsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7SUFFdkYsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGO0FBVkQsd0RBVUMifQ==
#!/usr/bin/env node
import { Contract, Signer } from 'ethers';
export declare const createPair: (owner: Signer, router: Contract, asset: Contract, initialTokenSupply?: bigint, initialEthSupply?: bigint) => Promise<void>;
export declare const deployUniswap: (owner: Signer) => Promise<Contract>;
//# sourceMappingURL=deploy_uniswap.d.ts.map
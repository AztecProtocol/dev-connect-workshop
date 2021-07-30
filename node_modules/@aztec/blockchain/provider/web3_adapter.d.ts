import { EthereumProvider, RequestArguments } from './ethereum_provider';
import { Web3Provider } from './web3_provider';
/**
 * Adapts a legacy web3 provider into an EIP1193 compatible provider for injecting into the sdk.
 */
export declare class Web3Adapter implements EthereumProvider {
    private provider;
    private id;
    constructor(provider: Web3Provider);
    request(args: RequestArguments): Promise<any>;
    on(): this;
    removeListener(): this;
}
//# sourceMappingURL=web3_adapter.d.ts.map
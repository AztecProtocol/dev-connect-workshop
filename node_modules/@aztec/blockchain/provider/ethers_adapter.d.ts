import { EthereumProvider, RequestArguments } from './ethereum_provider';
/**
 * Adapts an etheres provider into an EIP1193 compatible provider for injecting into the sdk.
 */
export declare class EthersAdapter implements EthereumProvider {
    private provider;
    constructor(provider: {
        send: (method: string, params: any[]) => Promise<any>;
    });
    request(args: RequestArguments): Promise<any>;
    on(): this;
    removeListener(): this;
}
//# sourceMappingURL=ethers_adapter.d.ts.map
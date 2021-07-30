import { PriceFeed } from '@aztec/barretenberg/blockchain';
export declare class EthPriceFeed implements PriceFeed {
    constructor();
    price(): Promise<bigint>;
    latestRound(): Promise<bigint>;
    getRoundData(roundId: bigint): Promise<{
        roundId: bigint;
        price: bigint;
        timestamp: number;
    }>;
    getHistoricalPrice(roundId: bigint): Promise<bigint>;
}
//# sourceMappingURL=eth_price_feed.d.ts.map
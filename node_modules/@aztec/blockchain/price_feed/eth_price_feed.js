"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthPriceFeed = void 0;
class EthPriceFeed {
    constructor() { }
    async price() {
        return BigInt(10) ** BigInt(18);
    }
    async latestRound() {
        return BigInt(0);
    }
    async getRoundData(roundId) {
        return {
            roundId,
            price: await this.price(),
            timestamp: 0,
        };
    }
    async getHistoricalPrice(roundId) {
        return this.price();
    }
}
exports.EthPriceFeed = EthPriceFeed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoX3ByaWNlX2ZlZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpY2VfZmVlZC9ldGhfcHJpY2VfZmVlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFhLFlBQVk7SUFDdkIsZ0JBQWUsQ0FBQztJQUVoQixLQUFLLENBQUMsS0FBSztRQUNULE9BQU8sTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFlO1FBQ2hDLE9BQU87WUFDTCxPQUFPO1lBQ1AsS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQWU7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBdEJELG9DQXNCQyJ9
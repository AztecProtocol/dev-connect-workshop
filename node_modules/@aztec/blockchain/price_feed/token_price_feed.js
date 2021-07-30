"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPriceFeed = void 0;
const ethers_1 = require("ethers");
const abi = [
    'function latestAnswer() public view returns(int256)',
    'function latestRound() public pure returns(uint256)',
    'function getRoundData(uint80 _roundId) public view returns(uint80,int256,uint256,uint256,uint80)',
];
class TokenPriceFeed {
    constructor(priceFeedContractAddress, provider) {
        this.contract = new ethers_1.Contract(priceFeedContractAddress.toString(), abi, provider);
    }
    async price() {
        return BigInt(await this.contract.latestAnswer());
    }
    async latestRound() {
        return BigInt(await this.contract.latestRound());
    }
    async getRoundData(roundId) {
        const [, answer, , updatedAt] = (await this.contract.getRoundData(roundId)) || [];
        return {
            roundId,
            price: BigInt(answer || 0),
            timestamp: +(updatedAt || 0),
        };
    }
    async getHistoricalPrice(roundId) {
        try {
            const data = await this.contract.getRoundData(roundId);
            return data ? BigInt(data[1]) : BigInt(0);
        }
        catch (e) {
            return BigInt(0);
        }
    }
}
exports.TokenPriceFeed = TokenPriceFeed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcHJpY2VfZmVlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmljZV9mZWVkL3Rva2VuX3ByaWNlX2ZlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsbUNBQWtDO0FBRWxDLE1BQU0sR0FBRyxHQUFHO0lBQ1YscURBQXFEO0lBQ3JELHFEQUFxRDtJQUNyRCxrR0FBa0c7Q0FDbkcsQ0FBQztBQUVGLE1BQWEsY0FBYztJQUd6QixZQUFZLHdCQUFvQyxFQUFFLFFBQXNCO1FBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUs7UUFDVCxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFlO1FBQ2hDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxBQUFELEVBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xGLE9BQU87WUFDTCxPQUFPO1lBQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFlO1FBQ3RDLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEI7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0Qsd0NBZ0NDIn0=
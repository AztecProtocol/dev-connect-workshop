"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthersAdapter = void 0;
/**
 * Adapts an etheres provider into an EIP1193 compatible provider for injecting into the sdk.
 */
class EthersAdapter {
    constructor(provider) {
        this.provider = provider;
    }
    request(args) {
        return this.provider.send(args.method, args.params);
    }
    on() {
        throw new Error('Events not supported.');
    }
    removeListener() {
        throw new Error('Events not supported.');
    }
}
exports.EthersAdapter = EthersAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoZXJzX2FkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJvdmlkZXIvZXRoZXJzX2FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7O0dBRUc7QUFDSCxNQUFhLGFBQWE7SUFDeEIsWUFBb0IsUUFBbUU7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBMkQ7SUFBRyxDQUFDO0lBRXBGLE9BQU8sQ0FBQyxJQUFzQjtRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxFQUFFO1FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQWRELHNDQWNDIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3Adapter = void 0;
/**
 * Adapts a legacy web3 provider into an EIP1193 compatible provider for injecting into the sdk.
 */
class Web3Adapter {
    constructor(provider) {
        this.provider = provider;
        this.id = 0;
    }
    request(args) {
        return new Promise((resolve, reject) => {
            const payload = { jsonrpc: '2.0', id: this.id++, method: args.method, params: args.params || [] };
            this.provider.send(payload, (err, response) => {
                if (err) {
                    return reject(err);
                }
                if (!response) {
                    return reject(new Error('No response.'));
                }
                resolve(response.result);
            });
        });
    }
    on() {
        throw new Error('Events not supported.');
    }
    removeListener() {
        throw new Error('Events not supported.');
    }
}
exports.Web3Adapter = Web3Adapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViM19hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Byb3ZpZGVyL3dlYjNfYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7R0FFRztBQUNILE1BQWEsV0FBVztJQUd0QixZQUFvQixRQUFzQjtRQUF0QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBRmxDLE9BQUUsR0FBRyxDQUFDLENBQUM7SUFFOEIsQ0FBQztJQUV2QyxPQUFPLENBQUMsSUFBc0I7UUFDbkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUVsRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksR0FBRyxFQUFFO29CQUNQLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2dCQUNELE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxFQUFFO1FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxjQUFjO1FBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQTVCRCxrQ0E0QkMifQ==
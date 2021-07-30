"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPermitData = void 0;
const types = {
    Permit: [
        {
            name: 'owner',
            type: 'address',
        },
        {
            name: 'spender',
            type: 'address',
        },
        {
            name: 'value',
            type: 'uint256',
        },
        {
            name: 'nonce',
            type: 'uint256',
        },
        {
            name: 'deadline',
            type: 'uint256',
        },
    ],
};
const getDomain = (name, chainId, verifyingContract) => ({
    name,
    version: '1',
    chainId,
    verifyingContract,
});
const getMessage = (owner, spender, value, nonce, deadline) => ({
    owner: owner.toString(),
    spender: spender.toString(),
    value,
    nonce,
    deadline,
});
function createPermitData(name, owner, spender, value, nonce, deadline, chainId, verifyingContract) {
    const domain = getDomain(name, chainId, verifyingContract.toString());
    const message = getMessage(owner, spender, value, nonce, deadline);
    return { types, domain, message };
}
exports.createPermitData = createPermitData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3Blcm1pdF9kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZV9wZXJtaXRfZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxNQUFNLEtBQUssR0FBRztJQUNaLE1BQU0sRUFBRTtRQUNOO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLE9BQU87WUFDYixJQUFJLEVBQUUsU0FBUztTQUNoQjtRQUNEO1lBQ0UsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLFNBQVM7U0FDaEI7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsaUJBQXlCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDL0UsSUFBSTtJQUNKLE9BQU8sRUFBRSxHQUFHO0lBQ1osT0FBTztJQUNQLGlCQUFpQjtDQUNsQixDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWlCLEVBQUUsT0FBbUIsRUFBRSxLQUFhLEVBQUUsS0FBYSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUU7SUFDdkIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUU7SUFDM0IsS0FBSztJQUNMLEtBQUs7SUFDTCxRQUFRO0NBQ1QsQ0FBQyxDQUFDO0FBRUgsU0FBZ0IsZ0JBQWdCLENBQzlCLElBQVksRUFDWixLQUFpQixFQUNqQixPQUFtQixFQUNuQixLQUFhLEVBQ2IsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixpQkFBNkI7SUFFN0IsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN0RSxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFiRCw0Q0FhQyJ9
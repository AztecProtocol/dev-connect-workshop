"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBaseUnits = exports.fromBaseUnits = void 0;
/**
 * Converts the value to a decimal string representation with the given precision.
 * The digits outside the precision are simply discarded (i.e. the result is floored).
 * This ensures we never report more funds than actually exists.
 * Trailing 0's are also removed.
 * @param value to convert to string
 * @param decimals the number of least significant digits of value that represent the decimal
 * @param precision the number of decimal places to return
 */
function fromBaseUnits(value, decimals, precision = decimals) {
    const neg = value < BigInt(0);
    const valStr = value
        .toString()
        .slice(neg ? 1 : 0)
        .padStart(decimals + 1, '0');
    const integer = valStr.slice(0, valStr.length - decimals);
    const fractionalTrim = valStr.slice(-decimals);
    let end = fractionalTrim.length - 1;
    while (fractionalTrim[end] === '0')
        --end;
    const fractional = fractionalTrim.slice(0, end + 1);
    return (neg ? '-' : '') + (fractional ? `${integer}.${fractional.slice(0, precision)}` : integer);
}
exports.fromBaseUnits = fromBaseUnits;
/**
 * Converts the value from a decimal string to bigint value.
 * @param valueString to convert to bigint
 * @param decimals the number of least significant digits of value that represent the decimal
 */
function toBaseUnits(valueString, decimals) {
    const [integer, decimal] = valueString.split('.');
    const fractional = (decimal || '').replace(/0+$/, '').slice(0, decimals);
    const scalingFactor = BigInt(10) ** BigInt(decimals);
    const fractionalScale = scalingFactor / BigInt(10) ** BigInt(fractional.length || 0);
    return BigInt(fractional || 0) * fractionalScale + BigInt(integer || 0) * scalingFactor;
}
exports.toBaseUnits = toBaseUnits;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdW5pdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixhQUFhLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsWUFBb0IsUUFBUTtJQUN6RixNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLE1BQU0sTUFBTSxHQUFHLEtBQUs7U0FDakIsUUFBUSxFQUFFO1NBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEIsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDL0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMxRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsSUFBSSxHQUFHLEdBQUcsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRztRQUFFLEVBQUUsR0FBRyxDQUFDO0lBQzFDLE1BQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRyxDQUFDO0FBWkQsc0NBWUM7QUFFRDs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFDLFdBQW1CLEVBQUUsUUFBZ0I7SUFDL0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sVUFBVSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RSxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sZUFBZSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckYsT0FBTyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxHQUFHLGVBQWUsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQztBQUMxRixDQUFDO0FBTkQsa0NBTUMifQ==
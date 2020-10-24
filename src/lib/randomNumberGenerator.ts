/**
 * Generate random number with a defined max range.
 * @param maxNumber Maximum number that can be generated minus 1.
 */
export function randomNumberGenerator(
  maxNumber: number,
  diceFormat: boolean = false
) {
  switch (diceFormat) {
    case true:
      return Math.floor(Math.random() * maxNumber) + 1;
    default:
      return Math.floor(Math.random() * maxNumber);
  }
};
/**
 * Batch generate a random number with a defined max range.
 * @param batchRoll How many different numbers to generate.
 * @param maxNumber Maximum number that can be generated minus 1.
 */
export function batchRandomNumberGenerator(
  batchRoll: number,
  maxNumber: number,
  diceFormat: boolean = false
) {
  let index = 0;
  let results: number[] = [];
  switch (diceFormat) {
    case true:
      do {
        results = results.concat(randomNumberGenerator(maxNumber)  +  1);
        index++;
      } while (index < batchRoll);
      return results;
    default:
      do {
        results = results.concat(randomNumberGenerator(maxNumber));
        index++;
      } while (index < batchRoll);
      return results;
  }
};

export function reducer(accumulator: any, currentValue: any) {
  return accumulator + currentValue;
};

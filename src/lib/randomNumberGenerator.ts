/**
 * Generate random number with a defined max range.
 * @param maxNumber Maximum number that can be generated minus 1.
 */
export function randomNumberGenerator(maxNumber: number) {
  return Math.floor(Math.random() * maxNumber);
}
/**
 * Batch generate a random number with a defined max range.
 * @param batchRoll How many different numbers to generate.
 * @param maxNumber Maximum number that can be generated minus 1.
 */
export function batchRandomNumberGenerator(batchRoll: number, maxNumber: number) {
  let index = 0;
  let results:number[] = [];
  do {
    results = results.concat(randomNumberGenerator(maxNumber));
    index++;
  } while (index < batchRoll);
  return results;
}

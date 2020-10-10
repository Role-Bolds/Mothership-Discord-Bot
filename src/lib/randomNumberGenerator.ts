/**
 * Generate random number with a defined max.
 * @param max Maximum number that can be generated.
 */
export function randomNumberGenerator(max: number) {
  return Math.floor(Math.random() * max);
}
/**
 * Batch generate a random number with a defined max.
 * @param numberToRoll How many different numbers to generate.
 * @param max Maximum number that can be generated.
 */
export function batchRandomNumberGenerator(numberToRoll: number, max: number) {
  let i = 0;
  let r = 0;
  do {
    r = r + randomNumberGenerator(max);
    i++;
  } while (i < numberToRoll);
  return r;
}

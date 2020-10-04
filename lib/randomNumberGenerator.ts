export function randomNumberGenerator(n: number) {
  return Math.floor(Math.random() * n);
}

export function batchRandomNumberGenerator(b: number, n: number) {
  let i = 0;
  let r = 0;
  do {
    r = r + randomNumberGenerator(n);
    i++;
  } while (i < b);
  return r;
}

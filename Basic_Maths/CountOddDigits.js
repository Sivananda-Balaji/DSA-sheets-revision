//Count number of odd digits in a number

const countOddDigit = (n) => {
  if (n === 0) {
    return 0;
  }
  let count = 0;
  while (n > 0) {
    const last = n % 10;
    if (last % 2 !== 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
};

const n = 15;

const result = countOddDigit(n);

console.log(result);

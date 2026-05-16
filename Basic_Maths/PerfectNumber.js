//Check for Perfect Number

const isPerfect = (n) => {
  let sum = 0;
  let divisor = 1;
  while (divisor < n) {
    if (n % divisor === 0) {
      sum += divisor;
    }
    divisor++;
  }
  return sum === n;
};

const n = 6;
const result = isPerfect(n);

console.log(result);

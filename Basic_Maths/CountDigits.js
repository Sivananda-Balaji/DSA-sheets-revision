//Count all Digits of a Number

const countDigit = (n) => {
  if (n === 0) {
    return 1;
  }
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

const n = 234;
const result = countDigit(n);

console.log(result);

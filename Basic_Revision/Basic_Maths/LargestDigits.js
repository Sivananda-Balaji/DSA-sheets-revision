//Return the Largest Digit in a Number

const largestDigit = (n) => {
  let ans = 0;
  while (n > 0) {
    const last = n % 10;
    if (last > ans) {
      ans = last;
    }
    n = Math.floor(n / 10);
  }
  return ans;
};

const n = 25;

const result = largestDigit(n);

console.log(result);

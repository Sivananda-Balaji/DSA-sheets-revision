// Reverse a number

const reverseNumber = (n) => {
  if (n < 9) {
    return n;
  }
  let ans = 0;
  while (n > 0) {
    const last = n % 10;
    ans = ans * 10 + last;
    n = Math.floor(n / 10);
  }
  return ans;
};

const n = 123;

const result = reverseNumber(n);

console.log(result);

//Reverse a number

const reverseNumber = (n) => {
  if (n < 10) {
    return n;
  }
  let num = 0;
  while (n > 0) {
    const last = n % 10;
    num = num * 10 + last;
    n = Math.floor(n / 10);
  }
  return num;
};

const n = 123;
const result = reverseNumber(n);

console.log(result);

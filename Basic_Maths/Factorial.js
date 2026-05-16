//Factorial of a given number

const factorial = (n) => {
  if (n === 0 || n == 1) {
    return 1;
  }
  let ans = 1;
  while (n > 1) {
    ans *= n;
    n -= 1;
  }
  return ans;
};

const n = 2;

const result = factorial(n);

console.log(result);

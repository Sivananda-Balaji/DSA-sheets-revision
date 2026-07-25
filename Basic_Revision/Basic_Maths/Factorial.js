//Factorial of a given number

const factorial = (n) => {
  let ans = 1;
  while (n > 1) {
    ans *= n;
    n--;
  }
  return ans;
};

const n = 2;

const result = factorial(n);

console.log(result);

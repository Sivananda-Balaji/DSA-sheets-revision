//Factorial of a Given Number

const factorial = (n) => {
  if (n < 2) {
    return 1;
  }
  return factorial(n - 1) * n;
};

const n = 5;

const result = factorial(n);

console.log(result);

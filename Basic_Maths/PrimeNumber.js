//Check for Prime Number

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const n = 5;

const result = isPrime(n);

console.log(result);

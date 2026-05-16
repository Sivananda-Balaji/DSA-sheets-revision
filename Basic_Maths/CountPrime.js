//Count of Prime Numbers till N

const primeUptoN = (n) => {
  if (n < 2) {
    return 0;
  }
  let count = 0;
  const isprime = (num) => {
    for (let j = 2; j * j <= num; j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= n; i++) {
    if (isprime(i)) {
      count++;
    }
  }
  return count;
};

const n = 10;

const result = primeUptoN(n);

console.log(result);

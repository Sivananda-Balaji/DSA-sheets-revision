//Count of Prime Numbers till N

const primeUptoN = (n) => {
  let count = 0;
  let index = 2;
  const isPrime = (val) => {
    let start = 2;
    while (val >= start * start) {
      if (val % start === 0) {
        return false;
      }
      start++;
    }
    return true;
  };
  while (n >= index) {
    if (isPrime(index)) {
      count++;
    }
    index++;
  }
  return count;
};

const n = 6;

const result = primeUptoN(n);

console.log(result);

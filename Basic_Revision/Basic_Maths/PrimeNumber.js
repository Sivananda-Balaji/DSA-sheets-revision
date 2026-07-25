//Check for Prime Number

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let index = 2;
  while (n > index * index) {
    if (n % index === 0) {
      return false;
    }
    index++;
  }
  return true;
};

const n = 5;

const result = isPrime(n);

console.log(result);

//Check if a Number is Prime or Not

const checkPrime = (num, i = 2) => {
  if (num === 1) {
    return false;
  }
  if (num === 2 || i * i > num) {
    return true;
  }
  if (num % i === 0) {
    return false;
  }
  return checkPrime(num, i + 1);
};

const result = checkPrime(5);

console.log(result);

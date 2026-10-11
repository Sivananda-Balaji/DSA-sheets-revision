//Check if a Number is Prime or Not

const checkPrime = (num, index = 2) => {
  if (num <= 1) {
    return false;
  }
  if (index * index > num) {
    return true;
  }
  if (num % index === 0) {
    return false;
  }
  return checkPrime(num, index + 1);
};

const num = 5;

const result = checkPrime(num);

console.log(result);

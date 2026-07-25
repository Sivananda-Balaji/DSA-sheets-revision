//Check for Perfect Number

const isPerfect = (n) => {
  let ans = 0;
  let index = 1;
  while (n > index) {
    if (n % index === 0) {
      ans += index;
    }
    index++;
  }
  return ans === n;
};

const n = 6;

const result = isPerfect(n);

console.log(result);

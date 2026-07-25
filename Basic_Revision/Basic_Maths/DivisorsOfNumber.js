//Divisors of a Number

const divisors = (n) => {
  const ans = [];
  let i = 1;
  while (i <= n) {
    if (n % i === 0) {
      ans.push(i);
    }
    i++;
  }
  return ans;
};

const n = 6;

const result = divisors(n);

console.log(result);

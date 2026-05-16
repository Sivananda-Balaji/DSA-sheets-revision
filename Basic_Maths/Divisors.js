//Divisors of a Number

const divisors = (n) => {
  const ans = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      ans.push(i);
    }
  }
  return ans;
};

const n = 6;

const result = divisors(n);

console.log(result);

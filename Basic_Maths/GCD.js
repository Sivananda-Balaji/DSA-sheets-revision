//GCD of Two Numbers

const GCD = (n1, n2) => {
  const num = Math.min(n1, n2);
  let ans = -1;
  for (let i = 1; i <= num; i++) {
    if (n1 % i === 0 && n2 % i == 0) {
      ans = i;
    }
  }
  return ans;
};

const n1 = 4,
  n2 = 6;

const result = GCD(n1, n2);

console.log(result);

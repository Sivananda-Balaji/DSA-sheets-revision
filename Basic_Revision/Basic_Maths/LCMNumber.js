//LCM of two numbers

const LCM = (n1, n2) => {
  const GCD = (n1, n2) => {
    const min = Math.min(n1, n2);
    let i = min;
    while (i >= 1) {
      if (n1 % i === 0 && n2 % i === 0) {
        return i;
      }
      i--;
    }
  };
  return (n1 * n2) / GCD(n1, n2);
};

const n1 = 4,
  n2 = 6;

const result = LCM(n1, n2);

console.log(result);

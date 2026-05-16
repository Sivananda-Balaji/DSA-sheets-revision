//LCM of two numbers

const LCM = (n1, n2) => {
  const GCD = (n1, n2) => {
    const min = Math.min(n1, n2);
    for (let i = min; i >= 1; i--) {
      if (n1 % i === 0 && n2 % i === 0) {
        return i;
      }
    }
  };
  const gcdValue = GCD(n1, n2);
  return Math.floor((n1 * n2) / gcdValue);
};

const n1 = 4,
  n2 = 6;

const result = LCM(n1, n2);

console.log(result);

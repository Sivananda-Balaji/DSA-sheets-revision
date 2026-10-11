//Power of Numbers

const power1 = (m, n) => {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 0) {
    return power1(m * m, Math.floor(n / 2));
  }
  return m * power1(m * m, Math.floor((n - 1) / 2));
};

const power = (m, n) => {
  if (n === 0) {
    return 1;
  }
  return power(m, n - 1) * m;
};

const result = power(2, 9);

const result1 = power1(2, 9);

console.log(result);

console.log(result1);

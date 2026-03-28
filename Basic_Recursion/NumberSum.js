//Sum of First N Numbers

const NumberSum = (N) => {
  if (N === 0) {
    return N;
  }
  return N + NumberSum(N - 1);
};

const result = NumberSum(5);

console.log(result);

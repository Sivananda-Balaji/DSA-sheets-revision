//Sum of First N Numbers

const NnumbersSum = (N) => {
  if (N === 0) {
    return 0;
  }
  return NnumbersSum(N - 1) + N;
};

const N = 4;

const result = NnumbersSum(N);

console.log(result);

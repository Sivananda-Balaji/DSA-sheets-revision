//Sum of Array Elements

const sum = (arr, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = sum(arr, n);

console.log(result);

//Sum of Array Elements

const sumOfArray = (arr, n) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += arr[i];
  }
  return ans;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = sumOfArray(arr, n);

console.log(result);

//Reverse an array

const reverseArray = (arr, n) => {
  let i = 0,
    j = n - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = reverseArray(arr, n);

console.log(result);

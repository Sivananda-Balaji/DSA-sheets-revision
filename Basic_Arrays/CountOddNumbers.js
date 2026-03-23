//Count of odd numbers in array

const countOddNumbers = (arr, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
};

const n = 5,
  array = [1, 2, 3, 4, 5];

const result = countOddNumbers(array, n);

console.log(result);

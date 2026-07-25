//Check if the Array is Sorted I

const arraySortedOrNot = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const n = 5,
  arr = [1, 2, 3, 4, 5];

const result = arraySortedOrNot(arr, n);

console.log(result);

//Check if the Array is Sorted II

const isSorted = (nums, i = 0) => {
  if (i === nums.length - 1) {
    return true;
  }
  if (nums[i] > nums[i + 1]) {
    return false;
  }
  return isSorted(nums, i + 1);
};

const nums = [1, 2, 3, 4, 5];

const result = isSorted(nums);

console.log(result);

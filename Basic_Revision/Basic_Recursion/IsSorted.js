//Check if the Array is Sorted II

const isSorted = (nums, index = 0) => {
  if (index >= nums.length - 1) {
    return true;
  }
  if (nums[index] > nums[index + 1]) {
    return false;
  }
  return isSorted(nums, index + 1);
};

const nums = [1, 2, 3, 4, 5];

const result = isSorted(nums);

console.log(result);

//Reverse an array

const reverseArray = (nums, i = 0, j = nums.length - 1) => {
  if (i >= j) {
    return nums;
  }
  [nums[i], nums[j]] = [nums[j], nums[i]];
  return reverseArray(nums, i + 1, j - 1);
};

const nums = [1, 2, 3, 4, 5];

const result = reverseArray(nums);

console.log(result);

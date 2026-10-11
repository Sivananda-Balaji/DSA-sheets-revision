//Reverse an array 2

const reverseArray = (nums, first = 0) => {
  const last = nums.length - 1 - first;
  if (first >= last) {
    return nums;
  }
  [nums[first], nums[last]] = [nums[last], nums[first]];
  return reverseArray(nums, first + 1);
};

const nums = [1, 2, 3, 4, 5];

const result = reverseArray(nums);

console.log(result);

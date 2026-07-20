//Remove duplicates from sorted array

const removeDuplicates = (nums) => {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

const nums = [0, 0, 3, 3, 5, 6];

const result = removeDuplicates(nums);

console.log(result);

//Move Zeros to End

const moveZeroes = (nums) => {
  let left = 0,
    right = 0;
  const len = nums.length;
  while (right < len) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  while (left < len) {
    nums[left++] = 0;
  }
  return nums;
};

const nums = [0, 1, 4, 0, 5, 2];

const result = moveZeroes(nums);

console.log(result);

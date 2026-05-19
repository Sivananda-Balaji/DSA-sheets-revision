//Left Rotate Array by One

const rotateArrayByOne = (nums) => {
  const len = nums.length;
  const first = nums[0];
  for (let i = 0; i < len - 1; i++) {
    nums[i] = nums[i + 1];
  }
  nums[len - 1] = first;
  return nums;
};

const nums = [1, 2, 3, 4, 5];

const result = rotateArrayByOne(nums);

console.log(result);

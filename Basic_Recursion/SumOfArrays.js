//Sum of Array Elements

const arraySum = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + arraySum(nums.slice(1));
};

const nums = [1, 2, 3];

const result = arraySum(nums);

console.log(result);

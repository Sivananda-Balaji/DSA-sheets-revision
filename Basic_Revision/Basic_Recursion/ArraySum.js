//Sum of Array Elements II

const arraySum = (nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums.pop() + arraySum(nums);
};

const nums = [1, 2, 3];

const result = arraySum(nums);

console.log(result);

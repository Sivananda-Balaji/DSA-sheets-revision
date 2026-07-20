//Find missing number

const missingNumber = (nums) => {
  const len = nums.length;
  const totalSum = (len * (len + 1)) / 2;
  const sum = nums.reduce((acc, val) => acc + val, 0);
  return totalSum - sum;
};

const nums = [0, 2, 3, 1, 4];

const result = missingNumber(nums);

console.log(result);

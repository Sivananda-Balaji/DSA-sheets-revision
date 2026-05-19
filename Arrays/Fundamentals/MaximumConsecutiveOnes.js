//Maximum Consecutive Ones

const findMaxConsecutiveOnes = (nums) => {
  let count = 0,
    temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      temp++;
    } else if (nums[i] === 0) {
      temp = 0;
    }
    if (temp > count) {
      count = temp;
    }
  }
  return count;
};

const nums = [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1];

const result = findMaxConsecutiveOnes(nums);

console.log(result);

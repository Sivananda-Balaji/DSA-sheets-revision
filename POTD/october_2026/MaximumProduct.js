//285. Maximum Product of maxThree Numbers

const maximumProduct = (nums) => {
  let maxOne = -Infinity,
    maxTwo = -Infinity,
    maxThree = -Infinity;
  let minOne = Infinity,
    minTwo = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= maxOne) {
      maxThree = maxTwo;
      maxTwo = maxOne;
      maxOne = nums[i];
    } else if (nums[i] >= maxTwo) {
      maxThree = maxTwo;
      maxTwo = nums[i];
    } else if (nums[i] >= maxThree) {
      maxThree = nums[i];
    }
    if (nums[i] <= minOne) {
      minTwo = minOne;
      minOne = nums[i];
    } else if (nums[i] <= minTwo) {
      minTwo = nums[i];
    }
  }

  return Math.max(maxOne * maxTwo * maxThree, minOne * minTwo * maxOne);
};

const nums = [3, 1, 4, 2];

const result = maximumProduct(nums);

console.log(result);

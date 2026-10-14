//512. Leaders in an Array

const leaders = (nums) => {
  const len = nums.length;
  const ans = [nums[len - 1]];
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] > ans.at(-1)) {
      ans.push(nums[i]);
    }
  }
  return ans.reverse();
};

const nums = [1, 2, 5, 3, 1, 2];

const result = leaders(nums);

console.log(result);

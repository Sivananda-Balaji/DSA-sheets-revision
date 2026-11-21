//178. Longest subarray with sum K

const longestSubarray = (nums, k) => {
  const len = nums.length;
  let max = 0,
    runningSum = 0;
  const map = new Map();
  map.set(0, -1);
  for (let i = 0; i < len; i++) {
    runningSum += nums[i];
    const requiredSum = runningSum - k;
    if (map.has(requiredSum)) {
      const length = i - map.get(requiredSum);
      max = Math.max(length, max);
    }
    if (!map.has(runningSum)) {
      map.set(runningSum, i);
    }
  }
  return max;
};

const nums = [10, 5, 2, 7, 1, 9],
  k = 15;

const result = longestSubarray(nums, k);

console.log(result);

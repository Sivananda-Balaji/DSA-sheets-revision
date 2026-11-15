//Two Sum

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const diff = target - val;
    if (map.has(diff)) {
      return [i, map.get(diff)];
    }
    map.set(val, i);
  }
}

const nums = [1, 6, 2, 10, 3],
  target = 7;

const result = twoSum(nums, target);

console.log(result);

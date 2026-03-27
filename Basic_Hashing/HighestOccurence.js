//Highest Occurring Element in an Array

const highestOccurrence = (nums) => {
  const map = {};
  let freq = -1,
    value = Infinity;
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] === undefined ? (map[nums[i]] = 1) : map[nums[i]]++;
    if (map[nums[i]] > freq || (map[nums[i]] === freq && value > nums[i])) {
      freq = map[nums[i]];
      value = nums[i];
    }
  }
  return value;
};

const nums = [1, 2, 2, 3, 3, 3];

const result = highestOccurrence(nums);

console.log(result);

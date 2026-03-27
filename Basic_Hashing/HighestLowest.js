//Sum of Highest and Lowest Frequency

const sumHighestAndLowestFrequency = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] === undefined ? (map[nums[i]] = 1) : map[nums[i]]++;
  }
  let high = -Infinity,
    low = Infinity;
  for (let index in map) {
    high = Math.max(map[index], high);
    low = Math.min(map[index], low);
  }
  return high + low;
};

const arr = [1, 2, 2, 3, 3, 3];

const result = sumHighestAndLowestFrequency(arr);

console.log(result);

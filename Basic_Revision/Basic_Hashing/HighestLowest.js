//Sum of Highest and Lowest Frequency

const sumHighestAndLowestFrequency = (nums) => {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let min = Infinity,
    max = -Infinity;
  for (let [num, freq] of map) {
    if (freq > max) {
      max = freq;
    }
    if (freq < min) {
      min = freq;
    }
  }
  return min + max;
};

const arr = [1, 2, 2, 3, 3, 3];

const result = sumHighestAndLowestFrequency(arr);

console.log(result);

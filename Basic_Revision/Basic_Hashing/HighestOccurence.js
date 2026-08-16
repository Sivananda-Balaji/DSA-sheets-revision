//Highest Occurring Element in an Array

const mostFrequentElement = (nums) => {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let max = -Infinity,
    ans = Infinity;
  for (let [num, freq] of map) {
    if (freq > max || (freq === max && num < ans)) {
      ans = num;
      max = freq;
    }
  }
  return ans;
};

const nums = [1, 2, 2, 3, 3, 3];

const result = mostFrequentElement(nums);

console.log(result);

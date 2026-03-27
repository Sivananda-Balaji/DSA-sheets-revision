//Second Highest Occurring Element

const secondOccurrence = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] === undefined ? (map[nums[i]] = 1) : map[nums[i]]++;
  }
  const freq = Object.values(map);
  let first = -1,
    second = -1;
  for (let i = 0; i < freq.length; i++) {
    if (freq[i] > first) {
      second = first;
      first = freq[i];
    } else if (freq[i] < first && freq[i] > second) {
      second = freq[i];
    }
  }
  let value = Infinity;
  for (let index in map) {
    if (map[index] === second && Number(index) < Number(value)) {
      value = index;
    }
  }
  return value === Infinity ? -1 : value;
};

const nums = [
  7350, 7548, 2648, 331, 3936, 4277, 9142, 1472, 7722, 3542, 3348, 5998, 6644,
  7720, 5228, 1937, 3864, 2739, 3357, 2469, 6613, 9925, 6288, 5380, 1958, 1058,
  4239, 3297, 5592, 2269, 8957, 5628, 4271, 3967, 4029, 9424, 8054, 7914, 722,
  2438, 28, 2396, 3949, 8115, 3982, 4618, 2974, 8843, 4656, 683, 5355, 9263,
  4736, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
];

const result = secondOccurrence(nums);

console.log(result);

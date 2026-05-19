//Linear Search

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

const nums = [2, 3, 4, 5, 3],
  target = 3;

const result = linearSearch(nums, target);

console.log(result);

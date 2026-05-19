//Left Rotate Array by K Places

const rotateArray = (nums, k) => {
  const len = nums.length;
  const revisedK = Math.floor(k % len);
  const reverse = (nums, start, end) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  reverse(nums, 0, revisedK - 1);
  reverse(nums, revisedK, len - 1);
  reverse(nums, 0, len - 1);

  return nums;
};

const nums = [1, 2, 3, 4, 5, 6],
  k = 2;

const result = rotateArray(nums, k);

console.log(result);

/*
const rotateArray = (nums, k) => {
  const len = nums.length;
  const revisedK = Math.floor(k % len);
  for (let i = 0; i < revisedK; i++) {
    let first = nums[0];
    for (let j = 0; j < len - 1; j++) {
      nums[j] = nums[j + 1];
    }
    nums[len - 1] = first;
  }
  return nums;
};
 */

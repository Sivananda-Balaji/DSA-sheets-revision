//Intersection of two sorted arrays

const intersectionArray = (nums1, nums2) => {
  const len1 = nums1.length,
    len2 = nums2.length;
  let i = 0,
    j = 0;
  const ans = [];
  while (i < len1 && j < len2) {
    if (nums1[i] === nums2[j]) {
      ans.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return ans;
};

const nums1 = [1, 2, 2, 3, 5],
  nums2 = [1, 2, 7];

const result = intersectionArray(nums1, nums2);

console.log(result);

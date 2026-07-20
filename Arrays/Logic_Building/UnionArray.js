//Union of two sorted arrays

const unionArray = (nums1, nums2) => {
  const ans = [];
  let pt1 = 0,
    pt2 = 0;
  const len1 = nums1.length,
    len2 = nums2.length;
  while (pt1 < len1 && pt2 < len2) {
    if (nums1[pt1] < nums2[pt2]) {
      if (ans.length === 0 || ans[ans.length - 1] !== nums1[pt1]) {
        ans.push(nums1[pt1]);
      }
      pt1++;
    } else {
      if (ans.length === 0 || ans[ans.length - 1] !== nums2[pt2]) {
        ans.push(nums2[pt2]);
      }
      pt2++;
    }
  }
  while (pt1 < len1) {
    if (ans.length === 0 || ans[ans.length - 1] !== nums1[pt1]) {
      ans.push(nums1[pt1]);
    }
    pt1++;
  }
  while (pt2 < len2) {
    if (ans.length === 0 || ans[ans.length - 1] !== nums2[pt2]) {
      ans.push(nums2[pt2]);
    }
    pt2++;
  }
  return ans;
};

const nums1 = [1, 2, 3, 4, 5],
  nums2 = [1, 2, 7];

const result = unionArray(nums1, nums2);
console.log(result);

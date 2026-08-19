//Longest Common Prefix

const longestCommonPrefix = (str) => {
  let ans = str[0];
  for (let i = 1; i < str.length; i++) {
    const val = str[i];
    for (let j = 0; j < ans.length; j++) {
      if (ans[j] !== val[j]) {
        ans = ans.slice(0, j);
        break;
      }
    }
  }
  return ans;
};

const str = ["single"];

const result = longestCommonPrefix(str);

console.log(result);

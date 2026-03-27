//Longest Common Prefix

const longestCommonPrefix = (str) => {
  let ans = str[0];
  for (let i = 1; i < str.length; i++) {
    const ansLen = ans.length;
    for (let j = 0; j < ansLen; j++) {
      if (ans[j] !== str[i][j]) {
        ans = ans.slice(0, j);
        break;
      }
    }
  }
  return ans;
};

const str = ["flowers", "flow", "fly", "flight"];

const result = longestCommonPrefix(str);

console.log(result);

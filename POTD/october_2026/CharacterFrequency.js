//833. Calculate Frequency of Characters in a String

const characterFrequency = (s) => {
  const nums = {};
  for (let i = 0; i < s.length; i++) {
    nums[s[i]] !== undefined ? nums[s[i]]++ : (nums[s[i]] = 1);
  }
  const sorted = Object.entries(nums).sort(([a], [b]) => a.localeCompare(b));

  let ans = "";
  for (let [char, freq] of sorted) {
    ans += `${char}${freq} `;
  }
  return ans.trim();
};

const s = "takeuforward";

const result = characterFrequency(s);

console.log(result);

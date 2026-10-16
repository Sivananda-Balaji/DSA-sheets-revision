//303. Sort Characters by Frequency

const frequencySort = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  const sorted = Object.entries(map).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (b[1] > a[1]) {
      return 1;
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  return sorted.map(([char]) => char);
};

const s = "tree";

const result = frequencySort(s);

console.log(result);

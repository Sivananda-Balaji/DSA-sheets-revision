//Sort Characters by Frequency

const frequencySort = (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const arr = [...map];
  arr.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[0].localeCompare(b[0]);
    }
  });
  return arr.map(([key]) => key);
};

const s = "tree";

const result = frequencySort(s);

console.log(result);

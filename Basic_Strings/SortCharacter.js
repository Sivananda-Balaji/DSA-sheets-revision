//Sort Characters by Frequency

const sortCharacter = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] !== undefined ? map[s[i]]++ : (map[s[i]] = 1);
  }
  const ans = Object.keys(map).sort((a, b) => {
    if (map[a] > map[b]) {
      return -1;
    } else if (map[a] < map[b]) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  });
  return ans;
};

const s = "tree";

const result = sortCharacter(s);

console.log(result);

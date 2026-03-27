//Isomorphic String

const isomorphicString = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = {},
    tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]] === undefined && tMap[t[i]] === undefined) {
      sMap[s[i]] = t[i];
      tMap[t[i]] = s[i];
    } else {
      if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
        return false;
      }
    }
  }
  return true;
};

const s = "egg",
  t = "add";

const result = isomorphicString(s, t);

console.log(result);

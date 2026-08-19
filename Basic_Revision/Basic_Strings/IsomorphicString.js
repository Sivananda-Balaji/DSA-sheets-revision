//Isomorphic String

const isomorphicString = (s, t) => {
  const sLen = s.length,
    tLen = t.length;
  if (sLen !== tLen) {
    return false;
  }
  const sMap = new Map();
  const tMap = new Map();
  for (let i = 0; i < sLen; i++) {
    const sVal = s[i],
      tVal = t[i];
    if (!sMap.has(sVal) && !tMap.has(tVal)) {
      sMap.set(sVal, tVal);
      tMap.set(tVal, sVal);
    } else if (sMap.get(sVal) !== tVal || tMap.get(tVal) !== sVal) {
      return false;
    }
  }
  return true;
};

const s = "egg",
  t = "add";

const result = isomorphicString(s, t);

console.log(result);

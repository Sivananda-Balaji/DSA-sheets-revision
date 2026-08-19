//Valid Anagram

const anagramStrings = (s, t) => {
  const sLen = s.length,
    tLen = t.length;
  if (sLen !== tLen) {
    return false;
  }
  const arr = new Array(26).fill(0);
  for (let i = 0; i < sLen; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
};

const s = "anagram",
  t = "nagaram";

const result = anagramStrings(s, t);

console.log(result);

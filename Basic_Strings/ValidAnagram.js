//Valid Anagram

const validAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }
  return arr.every((count) => count === 0);
};

const s = "anagram",
  t = "nagaram";

const result = validAnagram(s, t);

console.log(result);

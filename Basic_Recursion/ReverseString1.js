//Reverse a String I

const reverseString = (s, i = 0, j = s.length - 1) => {
  if (i >= j) {
    return s;
  }
  [s[i], s[j]] = [s[j], s[i]];
  return reverseString(s, i + 1, j - 1);
};

const s = ["h", "e", "l", "l", "o"];

const result = reverseString(s);

console.log(result);

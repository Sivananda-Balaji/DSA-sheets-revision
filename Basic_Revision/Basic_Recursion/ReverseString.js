// Reverse a String I

const reverseString = (s, first = 0, last = s.length - 1) => {
  if (first >= last) {
    return s;
  }
  [s[first], s[last]] = [s[last], s[first]];
  return reverseString(s, first + 1, last - 1);
};

const s = ["h", "e", "l", "l", "o"];

const result = reverseString(s);

console.log(result);

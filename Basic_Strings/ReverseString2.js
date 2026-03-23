//Reverse a String II

const reverseString2 = (s) => {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};

const s = ["h", "e", "l", "l", "o"];

const result = reverseString2(s);

console.log(result);

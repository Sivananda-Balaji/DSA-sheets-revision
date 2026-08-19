//Reverse a String II

const reverseString = (s) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

const s = ["h", "e", "l", "l", "o"];

reverseString(s);

console.log(s);

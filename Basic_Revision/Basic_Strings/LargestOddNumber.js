//Largest Odd Number in a String

const largeOddNum = (s) => {
  let i = 0,
    j = s.length - 1;
  while (j >= 0 && s[j] % 2 === 0) {
    j--;
  }
  if (j < 0) {
    return "";
  }
  while (Number(s[i]) === 0) {
    i++;
  }
  return s.slice(i, j + 1);
};

const s = "0214638";

const result = largeOddNum(s);

console.log(result);

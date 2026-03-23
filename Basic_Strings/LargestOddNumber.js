//Largest Odd Number in a String

const largestOddNumber = (s) => {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] % 2 !== 0) {
      return s.slice(0, i + 1).replace(/^0+/, "");
    }
  }
  return "";
};

const s = "0214638";

const result = largestOddNumber(s);

console.log(result);

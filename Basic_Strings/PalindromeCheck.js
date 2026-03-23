//Palindrome Check

const PalindromeCheck = (s) => {
  let start = 0,
    end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const s = "hannah";

const result = PalindromeCheck(s);

console.log(result);

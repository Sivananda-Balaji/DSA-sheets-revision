//Palindrome Check

const palindromeCheck = (s) => {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const s = "hannah";

const result = palindromeCheck(s);

console.log(result);

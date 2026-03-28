//Check if String is Palindrome or Not

const palindromeCheck = (s, i = 0, j = s.length - 1) => {
  if (i >= j) {
    return true;
  }
  if (s[i] !== s[j]) {
    return false;
  }
  return palindromeCheck(s, i + 1, j - 1);
};

const s = "hannah";

const result = palindromeCheck(s);

console.log(result);

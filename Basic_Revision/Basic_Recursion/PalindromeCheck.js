//Check if String is Palindrome or Not

const palindromeCheck = (s, first = 0, last = s.length - 1) => {
  if (first >= last) {
    return true;
  }
  if (s[first] !== s[last]) {
    return false;
  }
  return palindromeCheck(s, first + 1, last - 1);
};

const s = "hannah";

const result = palindromeCheck(s);

console.log(result);

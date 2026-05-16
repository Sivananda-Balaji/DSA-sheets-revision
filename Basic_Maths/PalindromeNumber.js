//Palindrome Number

const isPalindrome = (n) => {
  let reverse = 0;
  let copy = n;
  while (copy > 0) {
    const last = copy % 10;
    reverse = reverse * 10 + last;
    copy = Math.floor(copy / 10);
  }
  return reverse === n;
};

const n = 121;

const result = isPalindrome(n);

console.log(result);

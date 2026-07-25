//Palindrome Number

const isPalindrome = (n) => {
  let copy = n;
  let reverse = 0;
  while (copy > 0) {
    const last = copy % 10;
    reverse = reverse * 10 + last;
    copy = Math.floor(copy / 10);
  }
  return n === reverse;
};

const n = 121;

const result = isPalindrome(n);

console.log(result);

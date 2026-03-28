//Sum of Digits in a Given Number

const addDigits = (num, ans = 0) => {
  if (num === 0) {
    if (ans > 9) {
      return addDigits(ans, 0);
    }
    return ans;
  }
  ans += num % 10;
  return addDigits(Math.floor(num / 10), ans);
};

const num = 529;

const result = addDigits(num);

console.log(result);

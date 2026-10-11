//Sum of Digits in a Given Number

const addDigits = (num, sum = 0) => {
  if (num <= 9) {
    if (sum + num > 9) {
      return addDigits(sum + num, 0);
    }
    return sum + num;
  }
  const last = num % 10;
  sum += last;
  return addDigits(Math.floor(num / 10), sum);
};

const num = 529;

const result = addDigits(num);

console.log(result);

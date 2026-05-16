//Check if the Number is Armstrong

const isArmstrong = (n) => {
  if (n === 0) {
    return true;
  }
  let copy = n;
  let digits = 0;
  while (copy > 0) {
    digits++;
    copy = Math.floor(copy / 10);
  }
  copy = n;
  let sum = 0;
  while (copy > 0) {
    const last = copy % 10;
    const value = last ** digits;
    sum += value;
    copy = Math.floor(copy / 10);
  }
  return sum === n;
};

const n = 153;

const result = isArmstrong(n);

console.log(result);

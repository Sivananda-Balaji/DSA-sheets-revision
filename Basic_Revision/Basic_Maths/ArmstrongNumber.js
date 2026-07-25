//Check if the Number is Armstrong

const isArmstrong = (n) => {
  let copy = n;
  let ans = 0;
  while (copy > 0) {
    const last = copy % 10;
    ans += Math.pow(last, String(n).length);
    copy = Math.floor(copy / 10);
  }
  return ans === n;
};

const n = 3;

const result = isArmstrong(n);

console.log(result);

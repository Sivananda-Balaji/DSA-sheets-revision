//Second Highest Occurring Element

const secondMostFrequentElement = (nums) => {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let firstMax = -Infinity,
    secondMax = -Infinity,
    firstNum = Infinity,
    secondNum = Infinity;
  for (let [num, freq] of map) {
    if (freq > firstMax || (freq === firstMax && num < firstNum)) {
      if (freq > firstMax) {
        secondMax = firstMax;
        secondNum = firstNum;
      }
      firstMax = freq;
      firstNum = num;
    } else if (
      (freq > secondMax && freq < firstMax) ||
      (freq === secondMax && num < secondNum)
    ) {
      secondMax = freq;
      secondNum = num;
    }
  }
  return secondNum === Infinity ? -1 : secondNum;
};

const arr = [10000, 10000, 9999, 9999];

const result = secondMostFrequentElement(arr);

console.log(result);

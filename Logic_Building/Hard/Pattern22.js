//Pattern 22

const Pattern22 = (num) => {
  for (let i = 0; i < 2 * num - 1; i++) {
    let temp = "";
    for (let j = 0; j < 2 * num - 1; j++) {
      if (i === 0 || i == 2 * num - 1 || j == 0 || j == 2 * num - 1) {
        temp += num;
      } else {
        const size = 2 * num - 1;
        const min = Math.min(i, j, size - 1 - i, size - 1 - j);
        temp += num - min;
      }
    }
    console.log(temp);
  }
};

const num = 5;

Pattern22(num);

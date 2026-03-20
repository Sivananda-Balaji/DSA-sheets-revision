//Pattern 9

const Pattern9 = (num) => {
  for (let i = 0; i < 2 * num; i++) {
    let temp = "";
    const spaceEqu = i < num ? num - i - 1 : i - num;
    for (let j = 0; j < spaceEqu; j++) {
      temp += " ";
    }
    const starEqu = i < num ? 2 * i + 1 : 2 * num + (2 * num - (i * 2 + 1));
    for (let k = 0; k < starEqu; k++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern9(num);

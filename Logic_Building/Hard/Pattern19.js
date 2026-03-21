//Pattern 19

const Pattern19 = (num) => {
  for (let i = 0; i < 2 * num; i++) {
    let temp = "";
    const starEqu = i < num ? num - i : i - num + 1;
    for (let j = 0; j < starEqu; j++) {
      temp += "*";
    }
    const spaceEqu = i < num ? i * 2 : 2 * num - temp.length * 2;
    for (let k = 0; k < spaceEqu; k++) {
      temp += " ";
    }
    for (let l = 0; l < starEqu; l++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern19(num);

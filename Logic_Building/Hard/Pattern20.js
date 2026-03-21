//Pattern 20

const Pattern20 = (num) => {
  for (let i = 0; i < 2 * num - 1; i++) {
    let temp = "";
    const starEqu = i < num ? i + 1 : num - (i - num + 1);
    for (let j = 0; j < starEqu; j++) {
      temp += "*";
    }
    const spaceEqu = 2 * num - temp.length * 2;
    for (let k = 0; k < spaceEqu; k++) {
      temp += " ";
    }
    for (let l = 0; l < starEqu; l++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 4;

Pattern20(num);

//Pattern 10

const Pattern10 = (num) => {
  for (let i = 0; i < 2 * num - 1; i++) {
    let temp = "";
    const starEqu = i < num - 1 ? i + 1 : num - (i - num + 1);
    for (let j = 0; j < starEqu; j++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern10(num);

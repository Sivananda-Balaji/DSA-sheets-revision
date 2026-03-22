//Pattern 21

const Pattern21 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
        temp += "*";
      } else {
        temp += " ";
      }
    }
    console.log(temp);
  }
};

const num = 5;

Pattern21(num);

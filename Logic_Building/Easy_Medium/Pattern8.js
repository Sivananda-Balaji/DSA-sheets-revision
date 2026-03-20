//Pattern 8

const Pattern8 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += " ";
    }
    for (let k = 0; k < 2 * num - (i * 2 + 1); k++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern8(num);

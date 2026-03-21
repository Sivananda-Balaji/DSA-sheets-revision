//Pattern 12

const Pattern12 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += j + 1;
    }
    for (let k = 0; k < 2 * num - (i + 1) * 2; k++) {
      temp += " ";
    }
    for (let l = i + 1; l > 0; l--) {
      temp += l;
    }
    console.log(temp);
  }
};

const num = 5;

Pattern12(num);

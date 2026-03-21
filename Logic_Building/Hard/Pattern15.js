//Pattern 15

const Pattern15 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < num - i; j++) {
      temp += String.fromCharCode(65 + j);
    }
    console.log(temp);
  }
};

const num = 5;

Pattern15(num);

//Pattern 18

const Pattern18 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += String.fromCharCode(65 + num - 1 - i + j);
    }
    console.log(temp);
  }
};

const num = 5;

Pattern18(num);

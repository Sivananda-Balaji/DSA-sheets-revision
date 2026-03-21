//Pattern 14

const Pattern14 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += String.fromCharCode(65 + j);
    }
    console.log(temp);
  }
};

const num = 5;

Pattern14(num);

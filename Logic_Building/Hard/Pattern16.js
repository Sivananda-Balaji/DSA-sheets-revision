//Pattern 16

const Pattern16 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += String.fromCharCode(65 + i);
    }
    console.log(temp);
  }
};

const num = 5;

Pattern16(num);

//Pattern 17

const Pattern17 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < num - i - 1; j++) {
      temp += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      temp += String.fromCharCode(65 + k);
    }
    for (let l = 0; l < i; l++) {
      temp += String.fromCharCode(65 + i - l - 1);
    }
    console.log(temp);
  }
};

const num = 5;

Pattern17(num);

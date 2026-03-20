//Pattern 7

const Pattern7 = (num) => {
  for (let i = 1; i <= num; i++) {
    let temp = "";
    for (let j = 1; j <= num - i; j++) {
      temp += " ";
    }
    for (let k = 1; k < i * 2; k++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern7(num);

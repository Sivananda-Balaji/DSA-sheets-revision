//Pattern 5

const Pattern5 = (num) => {
  for (let i = num; i > 0; i--) {
    let temp = "";
    for (let j = i; j > 0; j--) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern5(num);

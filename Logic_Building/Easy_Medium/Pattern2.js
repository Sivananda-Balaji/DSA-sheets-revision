//Pattern 2

const Pattern2 = (num) => {
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j <= i; j++) {
      temp += "*";
    }
    console.log(temp);
  }
};

const num = 5;

Pattern2(num);

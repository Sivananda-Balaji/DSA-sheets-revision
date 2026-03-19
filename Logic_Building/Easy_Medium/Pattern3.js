//Pattern 3

const Pattern3 = (num) => {
  for (let i = 1; i <= num; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp += j;
    }
    console.log(temp);
  }
};

const num = 5;

Pattern3(num);

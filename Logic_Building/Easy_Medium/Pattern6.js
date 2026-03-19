//Pattern 6

const Pattern6 = (num) => {
  for (let i = num; i > 0; i--) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp += j;
    }
    console.log(temp);
  }
};

const num = 5;

Pattern6(num);

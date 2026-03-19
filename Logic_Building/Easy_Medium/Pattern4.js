//Pattern 4

const Pattern4 = (num) => {
  for (let i = 1; i <= num; i++) {
    let temp = "";
    for (let j = 1; j <= i; j++) {
      temp += i;
    }
    console.log(temp);
  }
};

const num = 5;

Pattern4(num);

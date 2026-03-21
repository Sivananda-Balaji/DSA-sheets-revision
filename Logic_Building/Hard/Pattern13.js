//Pattern 13

const Pattern13 = (num) => {
  let count = 1;
  for (let i = 0; i < num; i++) {
    let temp = "";
    for (let j = 0; j < i + 1; j++) {
      temp += count + " ";
      count++;
    }
    console.log(temp);
  }
};

const num = 5;

Pattern13(num);

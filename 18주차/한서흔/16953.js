let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "C:/Users/user/Desktop/coding-test/input.txt",
  )
  .toString()
  .split("\n");

// A -> B

const [a, b] = input[0].split(" ").map(Number);

let answer = 1;

const greedy = (result, temp) => {
  while (result < temp) {
    if (temp % 2 === 0) {
      temp = temp / 2;
      answer++;
    } else if (temp % 5 === 1) {
      temp = Number(`${temp}`.slice(0, `${temp}`.length - 1));
      answer++;
    } else return -1;

    if (temp === result) {
      return answer;
    }

    if (temp < result) return -1;
  }
};

console.log(greedy(a, b));

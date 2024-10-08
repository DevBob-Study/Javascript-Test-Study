const fs = require("fs");
let input = fs.readFileSync("./18주차/김선구/input.txt").toString();

const start = Number(input.split(" ")[0]);
let end = Number(input.split(" ")[1]);

let answer = -1;

const dfs = (tmp, cnt) => {
  if (tmp === end) {
    answer = cnt + 1;
    return;
  } else {
    if (tmp * 2 <= end) {
      dfs(tmp * 2, cnt + 1);
    }
    if (tmp * 10 + 1 <= end) {
      dfs(tmp * 10 + 1, cnt + 1);
    }
  }
};

dfs(start, 0);
console.log(answer);

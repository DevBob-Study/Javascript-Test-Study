const fs = require("fs");
let input = fs.readFileSync("./19주차/김선구/input.txt").toString();
input = input.split(" ");

const start = +input.shift();
const end = +input.shift();
let visited = Array(200000 + 1).fill(0);

const bfs = (start) => {
  let q = [start];

  if (start === end) {
    return 0;
  }

  while (q.length) {
    let tmp = q.shift();

    if (tmp === end) {
      return visited[tmp];
    }

    const arr = [tmp - 1, tmp + 1, tmp * 2];
    for (let next of arr) {
      if (next >= 0 && next <= 200000 && visited[next] === 0) {
        visited[next] = visited[tmp] + 1;
        q.push(next);
      }
    }
  }
};

const answer = bfs(start);
console.log(answer);

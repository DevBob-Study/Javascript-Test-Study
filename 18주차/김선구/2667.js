const fs = require("fs");
let input = fs.readFileSync("./18주차/김선구/input.txt").toString();
input = input.split("\n");
const N = +input.shift();

let answer = [];
let visited = Array.from({ length: N }, () => Array(N).fill(false));

const bfs = (x, y) => {
  let cnt = 1;
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let q = [[x, y]];
  visited[x][y] = true;

  while (q.length) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
        if (input[nx][ny] === "1" && !visited[nx][ny]) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
          cnt++;
        }
      }
    }
  }
  return cnt;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (input[i][j] === "1" && !visited[i][j]) {
      const ans = bfs(i, j);
      answer.push(ans);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

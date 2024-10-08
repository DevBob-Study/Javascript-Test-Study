const fs = require("fs");
let input = fs.readFileSync("./19주차/김선구/input.txt").toString();
input = input.split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  const n = +input.shift();
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const start = input.shift().split(" ").map(Number);
  const end = input.shift().split(" ").map(Number);
  dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  dy = [-1, -2, -2, -1, 1, 2, 2, 1];

  const bfs = (start, end) => {
    let q = [start];

    if (start[0] === end[0] && start[1] === end[1]) {
      return 0;
    }

    while (q.length) {
      let tmp = q.shift();

      if (tmp[0] === end[0] && tmp[1] === end[1]) {
        return visited[tmp[0]][tmp[1]];
      }

      for (let i = 0; i < 8; i++) {
        let nx = tmp[0] + dx[i];
        let ny = tmp[1] + dy[i];
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && visited[nx][ny] === 0) {
          visited[nx][ny] = visited[tmp[0]][tmp[1]] + 1;
          q.push([nx, ny]);
        }
      }
    }
  };
  const answer = bfs(start, end);
  console.log(answer);
}

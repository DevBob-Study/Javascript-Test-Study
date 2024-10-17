let fs = require("fs");
let input = fs
  .readFileSync("./20주차/김선구/input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);
input = input.slice(1).map((v) => v.split("").map(Number));
const visited = Array.from(Array(N), () =>
  Array(M)
    .fill(0)
    .map(() => [0, 0])
);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const q = [];

q.push([0, 0, 0]);
visited[0][0][0] = 1;

function BFS() {
  let pointer = 0;

  while (pointer !== q.length) {
    console.log(visited);
    const [y, x, isBreak] = q[pointer];

    if (x === M - 1 && y === N - 1) {
      return visited[y][x][isBreak];
    }

    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        if (input[ny][nx] === 0 && visited[ny][nx][isBreak] === 0) {
          visited[ny][nx][isBreak] = visited[y][x][isBreak] + 1;
          q.push([ny, nx, isBreak]);
        } else if (input[ny][nx] === 1 && isBreak === 0) {
          visited[ny][nx][1] = visited[y][x][isBreak] + 1;
          q.push([ny, nx, isBreak + 1]);
        }
      }
    }
    pointer++;
  }

  return -1;
}

console.log(BFS());

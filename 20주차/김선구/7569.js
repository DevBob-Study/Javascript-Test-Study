const fs = require("fs");
let input = fs.readFileSync("./20주차/김선구/input.txt").toString().split("\n");

const [N, M, H] = input.shift().split(" ").map(Number);
let graph = [];
let index = 0;

for (let h = 0; h < H; h++) {
  let tmp = [];
  for (let m = 0; m < M; m++) {
    tmp.push(input[index].split(" ").map(Number));
    index++;
  }
  graph.push(tmp);
}

const visited = Array.from(Array(H), () =>
  Array.from(Array(M), () => Array(N).fill(0))
);

let q = [];
let head = 0;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[i][j][k] === 1) {
        q.push([i, j, k]);
        visited[i][j][k] = 1;
      }
    }
  }
}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

while (head < q.length) {
  const [x, y, z] = q[head++];

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];
    if (
      nx >= 0 &&
      nx < H &&
      ny >= 0 &&
      ny < M &&
      nz >= 0 &&
      nz < N &&
      graph[nx][ny][nz] === 0 &&
      visited[nx][ny][nz] === 0
    ) {
      visited[nx][ny][nz] = visited[x][y][z] + 1;
      q.push([nx, ny, nz]);
    }
  }
}

let cnt = 0;
let flag = true;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[i][j][k] === 0 && visited[i][j][k] === 0) {
        console.log(-1);
        flag = false;
        break;
      }
      cnt = Math.max(cnt, visited[i][j][k]);
    }
    if (!flag) break;
  }
  if (!flag) break;
}

if (flag) {
  console.log(cnt - 1);
}

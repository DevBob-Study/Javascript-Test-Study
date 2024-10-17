// const fs = require("fs");
// let input = fs.readFileSync("./19주차/김선구/input.txt").toString().split("\n");

// const [col, row] = input.shift().split(" ").map(Number);
// let graph = input.map((row) => row.split(" ").map(Number));
// let visited = Array.from({ length: row }, () => Array(col).fill(0));

// let q = [];

// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     if (graph[i][j] === 1) {
//       q.push([i, j]);
//       visited[i][j] = 1;
//     }
//   }
// }

// const dx = [-1, 1, 0, 0];
// const dy = [0, 0, -1, 1];

// while (q.length) {
//   const [x, y] = q.shift();

//   for (let i = 0; i < 4; i++) {
//     const nx = x + dx[i];
//     const ny = y + dy[i];
//     if (
//       nx >= 0 &&
//       nx < row &&
//       ny >= 0 &&
//       ny < col &&
//       graph[nx][ny] === 0 &&
//       visited[nx][ny] === 0
//     ) {
//       visited[nx][ny] = visited[x][y] + 1;
//       q.push([nx, ny]);
//     }
//   }
// }

// let cnt = 0;
// let flag = true;

// for (let i = 0; i < row; i++) {
//   for (let j = 0; j < col; j++) {
//     if (graph[i][j] === 0 && visited[i][j] === 0) {
//       console.log(-1);
//       flag = false;
//       break;
//     }
//     if (visited[i][j] > cnt) {
//       cnt = visited[i][j];
//     }
//   }
//   if (!flag) break;
// }

// if (flag) {
//   console.log(cnt - 1);
// }

const fs = require("fs");
let input = fs.readFileSync("./19주차/김선구/input.txt").toString().split("\n");

const [col, row] = input.shift().split(" ").map(Number);
let graph = input.map((row) => row.split(" ").map(Number));
let visited = Array.from({ length: row }, () => Array(col).fill(0));

let q = [];
let head = 0;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (graph[i][j] === 1) {
      q.push([i, j]);
      visited[i][j] = 1;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

while (head < q.length) {
  const [x, y] = q[head++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < row &&
      ny >= 0 &&
      ny < col &&
      graph[nx][ny] === 0 &&
      visited[nx][ny] === 0
    ) {
      visited[nx][ny] = visited[x][y] + 1;
      q.push([nx, ny]);
    }
  }
}

let cnt = 0;
let flag = true;

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (graph[i][j] === 0 && visited[i][j] === 0) {
      console.log(-1);
      flag = false;
      break;
    }
    if (visited[i][j] > cnt) {
      cnt = visited[i][j];
    }
  }
  if (!flag) break;
}

if (flag) {
  console.log(cnt - 1);
}

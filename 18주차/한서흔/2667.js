let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "C:/Users/user/Desktop/coding-test/input.txt",
  )
  .toString()
  .split("\n");

// 단지 번호 붙이기

// TIP: 1을 발견했을 때에만 BFS 호출
// 오름차순 정렬임을 확인!

const n = Number(input[0]);
const map = input.splice(1).map(v => v.split("").map(Number));

let visited = new Array(n).fill().map(_ => new Array(n).fill(false));
let answer = [];

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const BFS = (n, map, start) => {
  let position = [start];
  let count = 0;

  while (position.length) {
    let [x, y] = position.shift();

    if (!visited[x][y]) {
      visited[x][y] = true;

      if (map[x][y]) {
        count++;
      }

      for (let i = 0; i < 4; i++) {
        let [posX, posY] = [x + dir[i][0], y + dir[i][1]];
        if (posX >= 0 && posX < n && posY >= 0 && posY < n) {
          if (!visited[posX][posY] && map[posX][posY]) {
            position.push([posX, posY]);
          }
        }
      }
    }

    if (!position.length && count) {
      answer.push(count);
    }
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j]) BFS(n, map, [i, j]);
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
answer.forEach(v => console.log(v));

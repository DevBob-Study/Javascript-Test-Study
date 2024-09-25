const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
const [N, M, K] = input[0].split(" ").map(Number);

// 입력값을 배열로 만들어줌
const answer = [];

// 음식물 쓰레기가 있는 좌표를 배열로 만들어줌
let newArr = [];
for (let i = 1; i <= K; i++) {
  const arr = input[i].split(" ").map(Number);
  newArr.push(arr);
}

const graph = Array.from({ length: N }, () => Array(M).fill(0));

// 방문 여부를 체크할 visited 배열
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let result = 1;

// 음식물 쓰레기가 있는 좌표에 1로 표시
newArr.forEach(([y, x]) => {
  graph[y - 1][x - 1] = 1;
});

function dfs(y, x) {
  // 방문 처리
  visited[y][x] = true;

  // 상하좌우 확인
  for (let k = 0; k < 4; k++) {
    let ny = y + dy[k];
    let nx = x + dx[k];

    // 상하좌우가 graph 범위 안에 있고, 음식물 쓰레기가 있고, 방문하지 않았다면
    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      graph[ny][nx] === 1 &&
      !visited[ny][nx]
    ) {
      result += 1;
      dfs(ny, nx);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] == 1) {
      dfs(i, j);
      answer.push(result);
      // result 초기화
      result = 1;
    }
  }
}

console.log(Math.max(...answer));

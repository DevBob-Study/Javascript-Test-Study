const fs = require("fs");
let input = fs.readFileSync("./20주차/김선구/input.txt").toString().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: 101 }, (_, i) => i);
const visited = Array(101).fill(false);

for (let i = 0; i < M + N; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start] = end;
}

const bfs = () => {
  const q = [];
  q.push(1);
  visited[1] = true;

  let moves = 0;

  while (q.length) {
    let size = q.length;

    for (let i = 0; i < size; i++) {
      const tmp = q.shift();
      if (tmp === 100) {
        console.log(moves);
        return;
      }
      for (let dice = 1; dice <= 6; dice++) {
        const next = tmp + dice;
        if (next <= 100) {
          if (!visited[graph[next]]) {
            visited[graph[next]] = true;
            q.push(graph[next]);
          }
        }
      }
    }
    moves++;
  }
};

bfs();

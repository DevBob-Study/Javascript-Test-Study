let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "C:/Users/user/Desktop/coding-test/input.txt",
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const px = [-2, -1, 1, 2, -2, -1, 1, 2];
const py = [-1, -2, -2, -1, 1, 2, 2, 1];

const bfs = (l, from, to, visited) => {
  let list = [[0, from]];

  let answer = 0;

  while (list.length) {
    let [count, [x, y]] = list.shift();
    visited[x][y] = true;

    // 방문할 position의 위치가 목적지일 경우
    if (x === to[0] && y === to[1]) {
      answer = count;
      break;
    }

    for (let i = 0; i < 8; i++) {
      let [posX, posY] = [x + px[i], y + py[i]];

      if (posX >= 0 && posX < l && posY >= 0 && posY < l && !visited[posX][posY]) {
        visited[posX][posY] = true;
        list.push([count + 1, [posX, posY]]);
      }
    }
  }

  return answer;
};

for (let i = 1; i < input.length; i += 3) {
  let l = Number(input[i]);
  let from = input
    .slice(i + 1)[0]
    .split(" ")
    .map(Number);
  let to = input
    .slice(i + 2)[0]
    .split(" ")
    .map(Number);

  let visited = new Array(l).fill().map(v => new Array(l).fill(false));

  console.log(bfs(l, from, to, visited));
}

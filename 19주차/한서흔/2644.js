let input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "C:/Users/user/Desktop/coding-test/input.txt",
  )
  .toString()
  .trim()
  .split("\n");

// 촌수계산 - 검색 참고

const n = Number(input[0]);
const [a, b] = input[1].split(" ").map(Number);
const relation = input.splice(3).map(v => v.split(" ").map(Number)); // [부모, 자식]

let visited = Array(n + 1).fill(false);
let graph = [...Array(n + 1)].map(() => []);

// 양방향 그래프!!!
relation.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start, target) => {
  let stack = [[start, 0]];

  visited[start] = true;

  while (stack.length) {
    let [pos, depth] = stack.pop();

    if (pos === target) return depth;

    for (const node of graph[pos]) {
      if (!visited[node]) {
        visited[node] = true;
        stack.push([node, depth + 1]);
      }
    }
  }

  return -1;
};

console.log(dfs(a, b));

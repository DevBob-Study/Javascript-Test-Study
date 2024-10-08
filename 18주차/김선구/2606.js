const fs = require("fs");
let input = fs.readFileSync("./18주차/김선구/input.txt").toString();
input = input.split("\n");

const N = +input.shift();
const node_cnt = +input.shift();

let answer = 0;
const graph = [...new Array(N + 1)].map(() => []);
const visited = [...new Array(N + 1)].fill(0);
visited[1] = true;

for (let i = 0; i < node_cnt; i++) {
  let start = Number(input[i].split(" ")[0]);
  let end = Number(input[i].split(" ")[1]);
  graph[start].push(end);
  graph[end].push(start);
}

function dfs(node) {
  for (let tmp of graph[node]) {
    if (!visited[tmp]) {
      visited[tmp] = true;
      answer++;
      dfs(tmp);
    }
  }
}

dfs(1);
console.log(answer);

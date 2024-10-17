let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "C:/Users/user/Desktop/coding-test/input.txt")
    .toString()
    .split("\n");

// 바이러스

const num = Number(input[0]);
const lines = input.splice(2).map((v) => v.split(" ").map((num) => Number(num)));

let graph = new Array(num + 1).fill([]);
for (let i = 1; i <= num; i++) {
    graph[i] = [
        ...lines.filter((v) => i === v[0]).map((v) => v[1]),
        ...lines.filter((v) => i === v[1]).map((v) => v[0]),
    ];
}

let visited = new Array(num + 1).fill(false);
let virus = []; // 답이 개수이므로 answer++ 로 처리 가능

const DFS = (index) => {
    if (!visited[index]) {
        virus.push(index);
        visited[index] = true;

        for (let i = 0; i < graph[index].length; i++) {
            DFS(graph[index][i]);
        }
    }
};
DFS(1);

console.log(virus.length - 1);

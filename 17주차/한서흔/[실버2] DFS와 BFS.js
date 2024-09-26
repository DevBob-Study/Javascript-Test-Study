let input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "/input.txt")
    .toString()
    .split("\n");

// DFS와 BFS

// 정점의 개수 n, 간선의 개수 m, 시작 정점 번호 start
const [n, m, start] = input[0].split(" ").map((v) => Number(v));

// 간선이 연결하는 두 정점의 번호 목록
const lines = input.splice(1).map((v) => v.split(" ").map((num) => Number(num)));

// 그래프 저장
let graph = [];
for (let i = 1; i <= n; i++) {
    graph[i - 1] = [
        ...lines.filter((v) => v[0] === i).map((v) => v[1]),
        ...lines.filter((v) => v[1] === i).map((v) => v[0]),
    ].sort((a, b) => a - b);
}

// DFS : 스택 사용
const visited = new Array(n).fill(false); // 방문 여부
let answer = [];

const DFS = (node) => {
    // 방문하지 않은 정점일 시
    if (!visited[node - 1]) {
        // 방문 처리
        visited[node - 1] = true;
        answer.push(node);

        for (let n of graph[node - 1]) {
            if (!visited[n - 1]) DFS(n);
        }
    }
};
DFS(start);
console.log(answer.join(" "));

// BFS : 큐 사용
visited.fill(false); // 방문 여부 초기화
answer = [];

const BFS = (node) => {
    let queue = [node];

    // 모든 정점을 방문할 때까지 반복
    while (queue.length) {
        let pos = queue.shift();

        // 방문하지 않은 정점일 시
        if (!visited[pos - 1]) {
            // 방문 처리
            visited[pos - 1] = true;
            answer.push(pos);

            // 현재 정점의 주변 정점 파악
            for (let n of graph[pos - 1]) {
                // 주변 정점 중 방문하지 않은 정점일 시
                if (!visited[n - 1]) queue.push(n);
            }
        }
    }
};
BFS(start);
console.log(answer.join(" "));

// 시도 1 아이디어 - wires에서 하나씩 제거하고 dfs를 돌려본다. dfs를 실행하면서 각각의 연결된 전선 개수를 저장하고 두개의 dfs가 끝났을 때 서로의 차이를 구한다.

function solution(n, wires) {
  const graph = [];
  for (let i = 0; i <= n; i++) {
    const row = [];
    for (let j = 0; j <= n; j++) {
      row.push(0);
    }
    graph.push(row);
  }

  wires.forEach((wire) => {
    graph[wire[0]][wire[1]] = graph[wire[1]][wire[0]] = 1;
  });

  const dfs = (arr, node) => {
    let res = 0;
    for (let i = 1; i <= arr[node].length; i++) {
      if (arr[node][i]) {
        arr[node][i] = arr[i][node] = 0;
        res += 1 + dfs(arr, i);
      }
    }
    return res;
  };

  let result = Number.MAX_SAFE_INTEGER;
  wires.forEach((wire) => {
    const copy = graph.map((node) => [...node]);
    const [a, b] = wire;
    copy[a][b] = copy[b][a] = 0;
    result = Math.min(result, Math.abs(dfs(copy, a) - dfs(copy, b)));
  });
  return result;
}

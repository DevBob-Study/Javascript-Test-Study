function solution(n, wires) {
  let tree = Array.from(Array(n + 1), () => []);
  for (let [v1, v2] of wires) {
    tree[v1].push(v2);
    tree[v2].push(v1);
  }

  var answer = -1;

  const bfs = (start, cut) => {
    //start: 시작노드, cut: 끊은 엣지
    let queue = [start];
    let visited = Array(n + 1).fill(false);
    visited[start] = true;
    let count = 0; //방문한 노드의 개수

    const isConnected = (node, near, cut) => {
      return (
        !(node === cut[0] && near === cut[1]) &&
        !(near === cut[0] && node === cut[1])
      );
    };
    //잘렸으면 false, 안잘렸으면 true
    while (queue.length) {
      let node = queue.shift();
      count++;

      for (let near of tree[node]) {
        if (!visited[near] && isConnected(node, near, cut)) {
          //방문하지 않았고, 연결되어 있으면
          visited[near] = true;
          queue.push(near);
        }
      }
    }
    return count;
  };
  let minDifference = n; //최소 차이

  for (let [v1, v2] of wires) {
    let count1 = bfs(v1, [v1, v2]);
    let count2 = n - count1;
    let difference = Math.abs(count1 - count2);
    minDifference = Math.min(minDifference, difference);
  }
  return minDifference;
}

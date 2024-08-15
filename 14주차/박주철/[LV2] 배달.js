// 1차 시도 (성공)
function solution(N, road, K) {
  // 각 마을까지의 최단 거리를 저장할 배열 초기화
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0; // 1번 마을까지의 거리는 0

  // 인접 리스트 생성
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, c] of road) {
      graph[a].push([b, c]);
      graph[b].push([a, c]);
  }

  // 우선순위 큐 구현 (거리가 짧은 순)
  const pq = [[0, 1]]; // [거리, 마을 번호]

  while (pq.length > 0) {
      const [dist, node] = pq.shift();
      
      // 현재 거리가 이미 저장된 거리보다 크면 스킵
      if (dist > distances[node]) continue;

      // 인접한 마을들을 확인
      for (const [nextNode, nextDist] of graph[node]) {
          const newDist = dist + nextDist;
          // 더 짧은 경로를 찾으면 업데이트
          if (newDist < distances[nextNode]) {
              distances[nextNode] = newDist;
              pq.push([newDist, nextNode]);
          }
      }
      // 거리순으로 정렬
      pq.sort((a, b) => a[0] - b[0]);
  }

  // K 이하의 거리에 있는 마을 수 반환
  return distances.filter(d => d <= K).length;
}
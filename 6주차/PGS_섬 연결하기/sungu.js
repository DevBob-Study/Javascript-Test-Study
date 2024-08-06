function findParent(parent, point) {
  if (parent[point] == point) {
    return point;
  } else {
    return (parent[point] = findParent(parent, parent[point]));
  }
}
function unionParent(parent, a, b) {
  const parentA = findParent(parent, a);
  const parentB = findParent(parent, b);
  if (parentA < parentB) {
    return (parent[parentB] = parentA);
  } else {
    return (parent[parentA] = parentB);
  }
}
function solution(n, costs) {
  let answer = 0;
  let parent = Array(n)
    .fill()
    .map((obj, index) => index);
  costs.sort((a, b) => {
    if (a[2] == b[2]) {
      return a[0] - b[0];
    } else {
      return a[2] - b[2];
    }
  });
  for (const cost of costs) {
    if (findParent(parent, cost[0]) !== findParent(parent, cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  }
  return answer;
}

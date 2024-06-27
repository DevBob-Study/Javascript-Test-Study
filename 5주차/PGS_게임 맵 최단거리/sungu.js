// 1차 시도 -> 45m

function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const visited = Array.from(Array(row), () => Array(col).fill(0));

  const q = [];
  q.push([0, 0]);
  visited[0][0] = 1;

  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < row &&
        ny >= 0 &&
        ny < col &&
        maps[nx][ny] === 1 &&
        visited[nx][ny] === 0
      ) {
        q.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }

  return visited[row - 1][col - 1] !== 0 ? visited[row - 1][col - 1] : -1;
}

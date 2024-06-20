function solution(k, dungeons) {
  let answer = 0;
  let visited = new Array(dungeons.length).fill(false);
  const dfs = (hp, count) => {
    for (let i in dungeons) {
      if (!visited[i] && hp >= dungeons[i][0]) {
        visited[i] = true;
        dfs(hp - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }
    answer = Math.max(answer, count);
  };
  dfs(k, 0);
  return answer;
}

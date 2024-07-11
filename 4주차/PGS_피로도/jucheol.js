// 2차 시도 (실패)
function solution(k, d) {
    return Math.max(...d.map((_, i) => 
        d[i][0] > k ? 0 : 1 + solution(
            k - d[i][1], 
            [...d.slice(0, i), ...d.slice(i + 1)]
        )
    ));
}



// 1차 시도 (성공)
function solution(k, dungeons) {
	const n = dungeons.length;
	const visited = new Array(n).fill(false);
	let maxExplored = 0;

	function dfs(fatigue, count) {
		maxExplored = Math.max(maxExplored, count);

		for (let i = 0; i < n; i++) {
			if (!visited[i] && fatigue >= dungeons[i][0]) {
				visited[i] = true;
				dfs(fatigue - dungeons[i][1], count + 1);
				visited[i] = false;
			}
		}
	}

	dfs(k, 0);
	return maxExplored;
}

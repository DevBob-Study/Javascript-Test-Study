// 2차 시도 - 성공
function solution(maps) {
	// 지도의 세로 길이
	const rows = maps.length;
	// 지도의 가로 길이
	const cols = maps[0].length;
	// 방문 여부를 체크할 2차원 배열 초기화 (모두 false로 설정)
	const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
	// 각 무인도의 식량 합계를 저장할 배열
	const result = [];
	// 깊이 우선 탐색(DFS) 함수 정의
	function dfs(x, y) {
		// 현재 위치가 유효한지 확인
		// 1. 지도 범위를 벗어나는 경우
		// 2. 이미 방문한 경우
		// 3. 바다('X')인 경우
		// 위 세 경우 중 하나라도 해당되면 0을 반환하고 탐색 종료
		if (x < 0 || x >= rows || y < 0 || y >= cols || visited[x][y] || maps[x][y] === "X") {
			return 0;
		}
		// 현재 위치를 방문했다고 표시
		visited[x][y] = true;

		// 현재 위치의 식량 값을 정수로 변환하여 저장
		let sum = parseInt(maps[x][y]);
		// 상하좌우 네 방향에 대해 재귀적으로 DFS 수행
		// 각 방향의 결과를 현재 위치의 식량 값에 더함
		sum += dfs(x - 1, y); // 위쪽 탐색
		sum += dfs(x + 1, y); // 아래쪽 탐색
		sum += dfs(x, y - 1); // 왼쪽 탐색
		sum += dfs(x, y + 1); // 오른쪽 탐색
		// 현재 위치와 연결된 모든 땅의 식량 합계 반환
		return sum;
	}
	// 지도의 모든 위치에 대해 반복
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			// 아직 방문하지 않았고, 땅인 경우에만 DFS 수행
			if (!visited[i][j] && maps[i][j] !== "X") {
				// DFS 결과(무인도의 총 식량 값)를 결과 배열에 추가
				result.push(dfs(i, j));
			}
		}
	}
	// 결과 처리
	// 무인도가 하나라도 있으면 식량 합계를 오름차순으로 정렬하여 반환
	// 무인도가 없으면 [-1] 반환
	return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}



// 1차 시도 - 성공
function solution(maps) {
	// 지도의 세로 길이
	const rows = maps.length;
	// 지도의 가로 길이
	const cols = maps[0].length;
	// 방문 여부를 저장할 2차원 배열
	const visited = [];
	// 각 무인도의 식량 합계를 저장할 배열
	const result = [];
	// 방문 배열 초기화 (모든 위치를 false로 설정)
	for (let i = 0; i < rows; i++) {
		visited[i] = [];
		for (let j = 0; j < cols; j++) {
			visited[i][j] = false;
		}
	}
	// 무인도 탐색 함수 정의
	function dfs(x, y) {
		// 현재 위치가 유효한지 확인
		// 1. 지도 범위를 벗어나는 경우
		if (x < 0 || x >= rows || y < 0 || y >= cols) {
			return 0;
		}
		// 2. 이미 방문한 경우
		if (visited[x][y]) {
			return 0;
		}
		// 3. 바다('X')인 경우
		if (maps[x][y] === "X") {
			return 0;
		}
		// 현재 위치를 방문했다고 표시
		visited[x][y] = true;

		// 현재 위치의 식량 값을 정수로 변환하여 저장
		let foodSum = parseInt(maps[x][y]);
		// 상하좌우 네 방향에 대해 재귀적으로 탐색 수행
		// 각 방향의 결과를 현재 위치의 식량 값에 더함
		foodSum += dfs(x - 1, y); // 위쪽 탐색
		foodSum += dfs(x + 1, y); // 아래쪽 탐색
		foodSum += dfs(x, y - 1); // 왼쪽 탐색
		foodSum += dfs(x, y + 1); // 오른쪽 탐색
		// 현재 위치와 연결된 모든 땅의 식량 합계 반환
		return foodSum;
	}
	// 지도의 모든 위치에 대해 반복
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			// 아직 방문하지 않았고, 땅인 경우에만 무인도 탐색 수행
			if (!visited[i][j] && maps[i][j] !== "X") {
				// 탐색 결과(무인도의 총 식량 값)를 결과 배열에 추가
				result.push(dfs(i, j));
			}
		}
	}
	// 결과 처리
	// 무인도가 하나도 없는 경우
	if (result.length === 0) {
		return [-1];
	} else {
		// 무인도가 하나 이상 있는 경우, 식량 합계를 오름차순으로 정렬하여 반환
		return result.sort((a, b) => a - b);
	}
}

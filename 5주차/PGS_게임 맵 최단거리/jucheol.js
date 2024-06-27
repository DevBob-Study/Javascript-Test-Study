// 3차 시도 (성공)
function solution(maps) {
	const n = maps.length;
	const m = maps[0].length;
	const queue = [[0, 0]];
	const visited = Array.from({ length: n }, () => new Array(m).fill(0));
	visited[0][0] = 1;

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	let queueIndex = 0;

	while (queueIndex < queue.length) {
		const [row, col] = queue[queueIndex++];
		const dist = visited[row][col];

		if (row === n - 1 && col === m - 1) {
			return dist;
		}

		for (const [dr, dc] of directions) {
			const newRow = row + dr;
			const newCol = col + dc;

			if (
				newRow >= 0 &&
				newRow < n &&
				newCol >= 0 &&
				newCol < m &&
				maps[newRow][newCol] === 1 &&
				!visited[newRow][newCol]
			) {
				queue.push([newRow, newCol]);
				visited[newRow][newCol] = dist + 1;
			}
		}
	}

	return -1;
}



// 2차 시도 (실패) - 시간 초과
function solution(maps) {
	const n = maps.length;
	const m = maps[0].length;
	const queue = [[0, 0, 1]];
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	while (queue.length > 0) {
		const [row, col, dist] = queue.shift();

		if (row === n - 1 && col === m - 1) {
			return dist;
		}

		for (const [dr, dc] of directions) {
			const newRow = row + dr;
			const newCol = col + dc;

			if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && maps[newRow][newCol] === 1) {
				queue.push([newRow, newCol, dist + 1]);
				maps[newRow][newCol] = 0;
			}
		}
	}

	return -1;
}



// 1차 시도 (실패) - 그리디하게 하려다가 실패
function solution(maps) {
	const n = maps.length,
		m = maps[0].length;
	let x = 0,
		y = 0,
		dist = 1;

	while (x < n - 1 || y < m - 1) {
		if (y < m - 1 && maps[x][y + 1]) y++;
		else if (x < n - 1 && maps[x + 1][y]) x++;
		else return -1;
		dist++;
	}

	return dist;
}

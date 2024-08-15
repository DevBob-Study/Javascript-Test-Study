// 1차 시도 (성공)
function solution(n) {
	let bigArray = [];
	for (let i = 0; i < n; i++) {
		bigArray.push(new Array(n).fill(0));
	}

	let count = 1;
	let x = -1,
		y = 0;
	let move = 0;

	for (let i = n; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (move === 0) x++;
			else if (move === 1) y++;
			else {
				x--;
				y--;
			}

			bigArray[x][y] = count++;
		}
		move = (move + 1) % 3;
	}

	let answer = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (bigArray[i][j] !== 0) {
				answer.push(bigArray[i][j]);
			}
		}
	}

	return answer;
}

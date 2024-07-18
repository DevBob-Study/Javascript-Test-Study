// 3차 시도 (성공)
function solution(n) {
	let count = 0;

	for (let i = 1; i <= Math.sqrt(2 * n); i++) {
		if ((n - (i * (i - 1)) / 2) % i === 0) {
			count++;
		}
	}

	return count;
}



// 2차 시도 (실패) - 시간 초과
function solution(n) {
	let count = 0;

	for (let start = 1; start <= n; start++) {
		let sum = 0;
		let current = start;

		while (sum < n) {
			sum += current;
			current++;
		}

		if (sum === n) {
			count++;
		}
	}

	return count;
}



// 1차 시도 (성공)
function solution(n) {
	let count = 0;
	let start = 1;
	let end = 1;
	let sum = 0;

	if (n <= 1) return n;
	while (start <= n) {
		if (sum < n) {
			sum += end;
			end += 1;
		} else if (sum > n) {
			sum -= start;
			start += 1;
		} else {
			count += 1;
			sum -= start;
			start += 1;
		}
	}
	return count;
}

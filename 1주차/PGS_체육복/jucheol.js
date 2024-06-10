// 3차 시도 (성공)
function solution(n, lost, reserve) {
	const arr = new Array(n).fill(1);

	for (const value of reserve) {
		arr[value - 1]++;
	}

	for (const value of lost) {
		arr[value - 1]--;
	}

	for (let i = 0; i < n; i++) {
		if (arr[i] === 0) {
			if (arr[i - 1] === 2) {
				arr[i]++;
				arr[i - 1]--;
			} else if (arr[i + 1] === 2) {
				arr[i]++;
				arr[i + 1]--;
			}
		}
	}

	return arr.filter((count) => count > 0).length;
}



// 2차 시도 (성공)
function solution(n, lost, reserve) {
	let arr = new Array(n).fill(1);
	lost.forEach((element) => arr[element - 1]--);
	reserve.forEach((element) => arr[element - 1]++);

	for (let i = 0; i < n; i++) {
		if (arr[i] === 0) {
			if (arr[i - 1] === 2) {
				arr[i]++;
				arr[i - 1]--;
			} else if (arr[i + 1] === 2) {
				arr[i]++;
				arr[i + 1]--;
			}
		}
	}
	return arr.filter((value) => value > 0).length;
}



// 1차 시도 (성공)
function solution(n, lost, reserve) {
	let result = 0;
	let arr = new Array(n).fill(1);
	for (let i = 0; i < lost.length; i++) {
		arr[lost[i] - 1]--;
	}
	for (let i = 0; i < reserve.length; i++) {
		arr[reserve[i] - 1]++;
	}
	for (let i = 0; i < n; i++) {
		if (arr[i] === 0) {
			if (arr[i - 1] === 2 && i > 0) {
				arr[i]++;
				arr[i - 1]--;
			} else if (arr[i + 1] === 2 && i < n - 1) {
				arr[i]++;
				arr[i + 1]--;
			}
		}
		if (arr[i] > 0) {
			result++;
		}
	}
	return result;
}

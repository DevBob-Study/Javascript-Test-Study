// 2차 시도 (성공)
function solution(numbers, target) {
	if (numbers.length === 0) return target === 0 ? 1 : 0;
	return solution(numbers.slice(1), target - numbers[0]) + solution(numbers.slice(1), target + numbers[0]);
}



// 1차 시도 (성공)
function solution(numbers, target) {
	let count = 0;

	function dfs(index, sum) {
		if (index === numbers.length) {
			if (sum === target) {
				count++;
			}
			return;
		}

		dfs(index + 1, sum + numbers[index]);
		dfs(index + 1, sum - numbers[index]);
	}

	dfs(0, 0);
	return count;
}

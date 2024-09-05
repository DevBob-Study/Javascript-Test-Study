function solution(queue1, queue2) {
	let answer = 0;
	let sum1 = queue1.reduce((a, b) => a + b, 0);
	let sum2 = queue2.reduce((a, b) => a + b, 0);
	let target = (sum1 + sum2) / 2;
	let totalQueue = [...queue1, ...queue2];
	let start = 0;
	let end = queue1.length;

	while (start < totalQueue.length && end < totalQueue.length * 2) {
		if (sum1 === target) {
			return answer;
		}

		if (sum1 > target) {
			sum1 -= totalQueue[start % totalQueue.length];
			start++;
		} else {
			sum1 += totalQueue[end % totalQueue.length];
			end++;
		}
		answer++;
	}
	return -1;
}

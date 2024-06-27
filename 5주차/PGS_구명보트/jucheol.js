// 2차 시도 (성공) - 그리디
function solution(people, limit) {
	var answer = 0;
	var left = 0,
		right = people.length - 1;
	people.sort((a, b) => a - b);
	while (left <= right) {
		if (people[left] + people[right] <= limit) {
			left++;
		}
		right--;
		answer++;
	}
	return answer;
}



// 1차 시도 (실패) - DP
function solution(people, limit) {
	people.sort((a, b) => a - b);
	const n = people.length;
	const dp = new Array(n + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		dp[i] = dp[i - 1] + 1;
		for (let j = 1; j < i; j++) {
			if (people[i - 1] + people[j - 1] <= limit) {
				dp[i] = Math.min(dp[i], dp[j - 1] + (i - j + 1) / 2);
			} else {
				break;
			}
		}
	}

	return Math.ceil(dp[n]);
}

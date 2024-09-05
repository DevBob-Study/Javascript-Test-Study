//1차 시도 - 성공
function solution(n) {
	const result = [];

	function hanoi(n, start, end, mid) {
		if (n === 1) {
			result.push([start, end]);
			return;
		}
		hanoi(n - 1, start, mid, end);
		result.push([start, end]);
		hanoi(n - 1, mid, end, start);
	}
	hanoi(n, 1, 3, 2);

	return result;
}

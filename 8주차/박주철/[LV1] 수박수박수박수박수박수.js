// 2차 시도 (성공)
function solution(n) {
	return "수박".repeat(n).slice(0, n);
}



// 1차 시도 (성공)
function solution(n) {
	let result = "";
	for (let i = 0; i < n; i++) {
		result += i % 2 === 0 ? "수" : "박";
	}
	return result;
}

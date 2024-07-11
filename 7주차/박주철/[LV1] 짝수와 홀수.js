// 2차 시도 (성공)
function solution(num) {
	return num % 2 == 0 ? "Even" : "Odd";
}



// 1차 시도 (성공)
function solution(num) {
	let remainder = num % 2;

	if (remainder === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

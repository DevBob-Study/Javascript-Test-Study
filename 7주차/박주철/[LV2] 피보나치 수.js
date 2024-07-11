// 2차 시도 (성공)
function solution(n) {
	let a = 0;
	let b = 1;

	for (let i = 2; i <= n; i++) {
		let c = (a + b) % 1234567;
		a = b;
		b = c;
	}

	return b;
}



// 1차 시도 (성공)
function solution(n) {
	var n = [0, 1];
	for (var i = 2; i <= n; i++) {
		n[i] = (n[i - 1] + n[i - 2]) % 1234567;
	}
	return n[n];
}

// 2차 시도 (성공)
function solution(n) {
	return n
		.toString()
		.split("")
		.reduce((acc, curr) => acc + parseInt(curr), 0);
}



// 1차 시도 (성공)
function solution(n) {
	let answer = 0;
	let tempn = n;
	for (let i = 0; i < String(n).length; i++) {
		answer += tempn % 10;
		tempn = Math.floor(tempn / 10);
	}

	return answer;
}

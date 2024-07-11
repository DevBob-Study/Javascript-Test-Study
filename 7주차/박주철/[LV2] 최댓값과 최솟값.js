// 3차 시도 (성공)
function solution(s) {
	return Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "));
}



// 2차 시도 (성공)
function solution(s) {
	// 문자열을 공백을 기준으로 나누고 바로 숫자로 변환합니다.
	const numbers = s.split(" ").map(Number);

	// Math.min과 Math.max 함수를 사용하여 최솟값과 최댓값을 찾습니다.
	const min = Math.min(...numbers);
	const max = Math.max(...numbers);

	// 템플릿 리터럴을 사용하여 결과 문자열을 만들어 반환합니다.
	return `${min} ${max}`;
}



// 1차 시도 (성공)
function solution(s) {
	// 문자열을 공백을 기준으로 나누어 배열로 만듭니다.
	let numbers = s.split(" ");

	// 문자열 배열을 숫자 배열로 변환합니다.
	numbers = numbers.map((num) => Number(num));

	// 최솟값과 최댓값을 저장할 변수를 초기화합니다.
	let min = numbers[0];
	let max = numbers[0];

	// 배열을 순회하며 최솟값과 최댓값을 찾습니다.
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < min) {
			min = numbers[i];
		}
		if (numbers[i] > max) {
			max = numbers[i];
		}
	}

	// 최솟값과 최댓값을 문자열로 만들어 반환합니다.
	return min + " " + max;
}

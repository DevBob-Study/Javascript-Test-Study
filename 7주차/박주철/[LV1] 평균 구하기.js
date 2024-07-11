// 2차 시도 (성공)
function solution(arr) {
	return arr.reduce((a, b) => a + b) / arr.length;
}



// 1차 시도 (성공)
function solution(arr) {
	// 배열의 모든 원소의 합을 저장할 변수를 초기화합니다.
	let sum = 0;

	// 배열의 각 원소를 순회하면서 합을 계산합니다.
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	// 평균을 계산합니다. (합계 / 배열의 길이)
	let average = sum / arr.length;

	// 계산된 평균값을 반환합니다.
	return average;
}

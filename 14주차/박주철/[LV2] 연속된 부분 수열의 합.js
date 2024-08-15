// 1차 시도 (성공)
function solution(sequence, k) {
	let left = 0; // 왼쪽 포인터 초기화
	let right = 0; // 오른쪽 포인터 초기화
	let sum = 0; // 현재 부분 수열의 합
	let result = [0, sequence.length - 1]; // 결과를 저장할 배열, 초기값은 전체 수열

	// 오른쪽 포인터가 수열의 끝에 도달할 때까지 반복
	while (right < sequence.length) {
		sum += sequence[right]; // 오른쪽 포인터의 값을 합에 추가

		// 현재 합이 목표값 k보다 크면 왼쪽 포인터를 이동
		while (sum > k && left <= right) {
			sum -= sequence[left]; // 왼쪽 포인터의 값을 합에서 제거
			left++; // 왼쪽 포인터 이동
		}

		// 현재 합이 목표값 k와 같고, 현재 부분 수열의 길이가 이전 결과보다 짧으면 결과 업데이트
		if (sum === k && right - left < result[1] - result[0]) {
			result = [left, right];
		}

		right++; // 오른쪽 포인터 이동
	}

	return result; // 최종 결과 반환
}

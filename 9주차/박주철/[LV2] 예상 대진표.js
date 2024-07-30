// 2차 시도 (성공)
function solution(N, A, B) {
	let round = 0;

	// 라운드를 진행하면서 A와 B의 위치를 업데이트
	while (A !== B) {
		round++;
		// A와 B를 다음 라운드의 위치로 업데이트
		A = Math.ceil(A / 2);
		B = Math.ceil(B / 2);
	}

	return round;
}



// 1차 시도 (성공)
function solution(N, A, B) {
	let round = 0;

	// A와 B가 다른 동안 계속 반복
	while (A !== B) {
		round = round + 1; // 라운드 수 증가

		// A의 다음 라운드 위치 계산
		if (A % 2 === 0) {
			// A가 짝수면
			A = A / 2;
		} else {
			// A가 홀수면
			A = (A + 1) / 2;
		}

		// B의 다음 라운드 위치 계산
		if (B % 2 === 0) {
			// B가 짝수면
			B = B / 2;
		} else {
			// B가 홀수면
			B = (B + 1) / 2;
		}
	}

	return round; // 최종 라운드 수 반환
}

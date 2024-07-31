// 2차 시도 (성공)
const solution = (n) => n.toString(2).split("1").length - 1;



// 1차 시도 (성공)
function solution(n) {
	// 건전지 사용량을 저장할 변수 초기화
	let batteryUsage = 0;

	// n이 0이 될 때까지 반복
	while (n > 0) {
		// n이 홀수인 경우
		if (n % 2 !== 0) {
			// 1칸 점프하고 건전지 사용량 1 증가
			n -= 1;
			batteryUsage += 1;
		}
		// n이 짝수인 경우
		else {
			// 순간이동으로 절반 이동 (건전지 사용 없음)
			n /= 2;
		}
	}

	// 최종 건전지 사용량 반환
	return batteryUsage;
}

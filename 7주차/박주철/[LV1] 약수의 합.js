// 2차 시도 (성공)
function solution(n) {
	let sum = 0;

	// n의 제곱근까지만 확인하면 됨
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			sum += i; // i는 약수
			if (i !== n / i) {
				// i와 n/i가 다르면 (예: 12의 경우 3과 4)
				sum += n / i; // n/i도 약수
			}
		}
	}

	return sum;
}



// 1차 시도 (성공)
function solution(n) {
	let sum = 0; // 약수의 합을 저장할 변수

	// 1부터 n까지 모든 수를 확인
	for (let i = 1; i <= n; i++) {
		// 만약 n이 i로 나누어 떨어진다면 (나머지가 0이면)
		if (n % i === 0) {
			sum += i; // i는 n의 약수이므로 sum에 더함
		}
	}

	return sum; // 모든 약수의 합을 반환
}

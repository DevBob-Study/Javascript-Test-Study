// 2차 시도 (성공)
function solution(W, H) {
	// 최대공약수를 구하는 함수 (유클리드 호제법 사용)
	function gcd(a, b) {
		// b가 0이면 a가 최대공약수
		if (b === 0) return a;
		// b가 0이 아니면 재귀적으로 호출 (b와 a를 b로 나눈 나머지)
		return gcd(b, a % b);
	}

	// 전체 사각형 개수
	let totalSquares = W * H;

	// W와 H의 최대공약수 계산
	let greatestCommonDivisor = gcd(W, H);

	// 대각선에 의해 잘린 사각형 개수
	let cutSquares = W + H - greatestCommonDivisor;

	// 사용할 수 있는 사각형 개수 계산 및 반환
	return totalSquares - cutSquares;
}


// 1차 시도 (성공)
function solution(W, H) {
	// 최대공약수를 구하는 함수
	function gcd(a, b) {
		// b가 0이 될 때까지 반복
		while (b !== 0) {
			// a를 b로 나눈 나머지를 계산
			let r = a % b;
			// a에 b값을 할당
			a = b;
			// b에 나머지 r을 할당
			b = r;
		}
		// 최대공약수 반환
		return a;
	}

	// W와 H의 최대공약수 계산
	let g = gcd(W, H);

	// 전체 사각형 개수에서 대각선에 의해 잘린 사각형 개수를 뺌
	// 잘린 사각형 개수 = W + H - 최대공약수
	return W * H - (W + H - g);
}

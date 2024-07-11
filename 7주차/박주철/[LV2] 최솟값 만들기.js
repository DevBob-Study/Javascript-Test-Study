// 2차 시도 (성공)
function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((sum, val, idx) => sum + val * B[idx], 0);
}



// 1차 시도 (성공)
function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	var answer = 0;
	for (var i = 0; i < A.length; i++) {
		answer += A[i] * B[i];
	}
	return answer;
}


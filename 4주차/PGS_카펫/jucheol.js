// 3차 시도 (성공) - 이차방정식
function solution(brown, yellow) {
	const total = brown + yellow;

	const b = brown / 2 + 2;
	const discriminant = Math.sqrt(b * b - 4 * total);

	const width = (b + discriminant) / 2;
	const height = (b - discriminant) / 2;

	return [width, height];
}



// 2차 시도 (성공)
function solution(brown, yellow) {
	for (let i = 3; i <= (brown + yellow) / i; i++) {
		const j = (brown + yellow) / i;
		if ((i - 2) * (j - 2) === yellow) return [j, i];
	}
}



// 1차 시도 (성공)
function solution(brown, yellow) {
	var total = brown + yellow;
	for (var i = 3; i <= Math.sqrt(total); i++) {
		if (total % i == 0) {
			var h = total / i;
			var w = total / h;
			if ((w - 2) * (h - 2) == yellow) {
				return [h, w];
			}
		}
	}
}

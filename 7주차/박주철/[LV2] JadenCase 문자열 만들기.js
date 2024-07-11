// 2차 시도 (성공)
function solution(s) {
	// 문자열을 순회하면서 각 문자를 처리함
	// 여기서 '/(^|\s)\S/g'는 문자열의 시작 부분이나 공백 다음에 오는 첫 번째 문자를 모두 찾음.
	return s.toLowerCase().replace(/(^|\s)\S/g, char => char.toUpperCase());
}



// 1차 시도 (성공)
function solution(s) {
	var words = s.toLowerCase().split(" ");
	for (var i = 0; i < words.length; i++) {
		if (words[i] !== "") {
			words[i] = words[i][0].toUpperCase() + words[i].slice(1);
		}
	}
	return words.join(" ");
}

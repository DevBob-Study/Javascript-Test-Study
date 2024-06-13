// 2차 시도 (성공)
function solution(numbers) {
	const sortedNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));
	return sortedNumbers[0] === "0" ? "0" : sortedNumbers.join("");
}



// 1차 시도 (성공)
function solution(numbers) {
	const sortedNumbers = numbers.sort((a, b) => {
		const strA = a.toString();
		const strB = b.toString();
		return strB + strA - (strA + strB);
	});

	const answer = sortedNumbers.join("");
	return answer[0] === "0" ? "0" : answer;
}
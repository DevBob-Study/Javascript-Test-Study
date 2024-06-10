// 4차 시도 (성공) - 풀어서 보여주기
function solution(array, commands) {
	const answer = commands.map((command) => {
		const [startIndex, endIndex, targetIndex] = command;
		const slicedArray = array.slice(startIndex - 1, endIndex);
		const sortedArray = slicedArray.sort((a, b) => a - b);
		const targetNumber = sortedArray[targetIndex - 1];
		return targetNumber;
	});

	return answer;
}



// 3차 시도 (성공)
function solution(array, commands) {
	let answer = commands.map(([startIndex, endIndex, targetIndex]) => {
		return array.slice(startIndex - 1, endIndex).sort((a, b) => a - b)[targetIndex - 1];
	});
	return answer;
}



// 2차 시도 (성공)
function solution(array, commands) {
	let answer = commands.map((value) => {
		return array.slice(value[0] - 1, value[1]).sort((a, b) => a - b)[value[2] - 1];
	});
	return answer;
}



// 1차 시도 (실패)
function solution(array, commands) {
	let answer = commands.map((value) => {
		return array.slice(value[0] - 1, value[1]).sort()[value[2] - 1];
	});
	return answer;
}

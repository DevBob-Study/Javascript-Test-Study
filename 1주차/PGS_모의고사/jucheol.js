// 5차 시도 (성공) - 시간 복잡도: O(n)
function solution(answers) {
	var answer = [];
	var a1 = [1, 2, 3, 4, 5];
	var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
	var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
	var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
	var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
	var max = Math.max(a1c, a2c, a3c);

	if (a1c === max) {
		answer.push(1);
	}
	if (a2c === max) {
		answer.push(2);
	}
	if (a3c === max) {
		answer.push(3);
	}

	return answer;
}



// 4차 시도 (성공) - 시간 복잡도: O(n)
function solution(answers) {
	const patterns = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];

	const scores = patterns.map(
		(pattern) => answers.filter((answer, index) => answer === pattern[index % pattern.length]).length
	);

	const maxScore = Math.max(...scores);

	return scores.map((score, index) => (score === maxScore ? index + 1 : null)).filter(Boolean);
}



// 3차 시도 (성공) - 시간 복잡도: O(n)
function solution(answers) {
	const patterns = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];

	const scores = patterns.map(
		(pattern) => answers.filter((answer, index) => answer === pattern[index % pattern.length]).length
	);

	const maxScore = Math.max(...scores);

	return scores.map((score, index) => (score === maxScore ? index + 1 : null)).filter(Boolean);
}



// 2차 시도 (성공) - 시간 복잡도: O(n)[그런데 가장 효율적임]
function solution(answers) {
	let result = [];
	const petterns = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];
	let score = [0, 0, 0];

	for (let i = 0; i < answers.length; i++) {
		if (petterns[0][i % petterns[0].length] === answers[i]) score[0]++;
		if (petterns[1][i % petterns[1].length] === answers[i]) score[1]++;
		if (petterns[2][i % petterns[2].length] === answers[i]) score[2]++;
	}
	for (let i = 0; i < petterns.length; i++) {
		if (Math.max(...score) === score[i]) {
			result.push(i + 1);
		}
	}
	return result;
}



// 1차 시도 (성공) - 시간 복잡도: O(n * m)...인데 m은 상수인 3으로 볼 수도 있어서 O(n)에 가까움
function solution(answers) {
	const petterns = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];
	let score = [0, 0, 0];

	for (let i = 0; i < answers.length; i++) {
		for (let j = 0; j < petterns.length; j++) {
			if (petterns[j][i % petterns[j].length] === answers[i]) {
				score[j]++;
			}
		}
	}
	let max = Math.max(...score);
	let result = [];
	for (let i = 0; i < petterns.length; i++) {
		if (max === score[i]) {
			result.push(i + 1);
		}
	}
	return result;
}

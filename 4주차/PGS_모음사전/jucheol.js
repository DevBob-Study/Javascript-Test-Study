// 3차 시도 (성공) - 완전탐색
function solution(word) {
	const dictionary = [];
	const vowels = ["A", "E", "I", "O", "U"];

	function generateWords(currentWord) {
		if (currentWord.length === 5) {
			return;
		}

		for (let i = 0; i < vowels.length; i++) {
			const newWord = currentWord + vowels[i];
			dictionary.push(newWord);
			generateWords(newWord);
		}
	}

	generateWords("");

	return dictionary.indexOf(word) + 1;
}



// 2차 시도 (성공)
function solution(word) {
	const vowels = ["A", "E", "I", "O", "U"];
	const lengths = [781, 156, 31, 6, 1];

	let result = word.length;

	for (let i = 0; i < word.length; i++) {
		const index = vowels.indexOf(word[i]);
		result += lengths[i] * index;
	}

	return result;
}



// 1차 시도 (성공)
function solution(word) {
	const vowels = ["A", "E", "I", "O", "U"];
	let answer = 0;

	for (let i = 0; i < word.length; i++) {
		const index = vowels.indexOf(word[i]);
		answer += (index * (Math.pow(5, 5 - i) - 1)) / (5 - 1);
		answer++;
	}
	return answer;
}

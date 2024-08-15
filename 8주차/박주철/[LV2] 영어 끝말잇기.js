function solution(n, words) {
	let used = new Set();
	let lastChar = words[0][0];

	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let player = (i % n) + 1;
		let turn = Math.floor(i / n) + 1;

		if (word[0] !== lastChar || used.has(word)) {
			return [player, turn];
		}

		used.add(word);
		lastChar = word[word.length - 1];
	}

	return [0, 0];
}

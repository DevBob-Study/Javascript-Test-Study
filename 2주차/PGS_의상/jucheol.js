// 3차 시도 (성공)
function solution(clothes) {
	const clothesMap = clothes.reduce((map, [_, type]) =>
        map.set(type, (map.get(type) || 0) + 1), new Map());

	return [...clothesMap.values()].reduce((answer, count) =>
        answer * (count + 1), 1) - 1;
}



// 2차 시도 (성공)
function solution(clothes) {
	const clothesMap = new Map();

	for (const [_, type] of clothes) {
		//듣자 하니, name을 _로 표현해도 되는 듯? 불필요한 변수 표시라고 함
		clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
	}

	let answer = 1;

	for (const count of clothesMap.values()) {
		answer *= count + 1;
	}

	return answer - 1;
}



// 1차 시도 (성공)
function solution(clothes) {
	const clothesMap = {};
	for (let i = 0; i < clothes.length; i++) {
		const type = clothes[i][1];
		if (clothesMap[type]) {
			clothesMap[type] += 1;
		} else {
			clothesMap[type] = 1;
		}
	}

	let answer = 1;

	for (const type in clothesMap) {
		answer *= clothesMap[type] + 1;
	}

	return answer - 1;
}

// 1차 시도 (성공)
function solution(relation) {
	// 컬럼의 개수와 행의 개수 계산
	const columnCount = relation[0].length;
	const rowCount = relation.length;

	// 후보키를 저장할 배열
	const candidateKeys = [];

	// 1부터 컬럼 개수까지의 모든 조합을 확인
	for (let i = 1; i <= columnCount; i++) {
		// i개의 컬럼을 선택하는 모든 조합 생성
		const combinations = getCombinations(columnCount, i);

		// 각 조합에 대해 후보키 여부 확인
		for (const combination of combinations) {
			// 유일성 검사
			if (isUnique(relation, combination)) {
				// 최소성 검사
				if (isMinimal(candidateKeys, combination)) {
					candidateKeys.push(combination);
				}
			}
		}
	}

	// 후보키의 개수 반환
	return candidateKeys.length;
}

// 주어진 개수의 컬럼에서 특정 개수를 선택하는 모든 조합을 생성
function getCombinations(columnCount, selectCount) {
	const result = [];

	// 재귀 함수를 이용한 조합 생성
	function combine(current, start) {
		if (current.length === selectCount) {
			result.push(current);
			return;
		}

		for (let i = start; i < columnCount; i++) {
			combine([...current, i], i + 1);
		}
	}

	combine([], 0);
	return result;
}

// 주어진 컬럼 조합이 유일성을 만족하는지 검사
function isUnique(relation, combination) {
	const set = new Set();

	for (const row of relation) {
		// 선택된 컬럼의 값들을 조합하여 키 생성
		const key = combination.map((index) => row[index]).join(",");

		// 이미 존재하는 키라면 유일성 만족 실패
		if (set.has(key)) {
			return false;
		}

		set.add(key);
	}

	// 모든 행을 검사했을 때 중복이 없으면 유일성 만족
	return true;
}

// 주어진 컬럼 조합이 최소성을 만족하는지 검사
function isMinimal(candidateKeys, combination) {
	for (const key of candidateKeys) {
		// 이미 존재하는 후보키가 현재 조합의 부분집합인 경우 최소성 만족 실패
		if (key.every((column) => combination.includes(column))) {
			return false;
		}
	}

	// 모든 기존 후보키에 대해 검사를 통과하면 최소성 만족
	return true;
}

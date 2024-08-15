// 2차 시도 (성공)
function solution(arr1, arr2) {
	const result = new Array(arr1.length).fill().map(() => new Array(arr2[0].length).fill(0));

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2[0].length; j++) {
			for (let k = 0; k < arr2.length; k++) {
				result[i][j] += arr1[i][k] * arr2[k][j];
			}
		}
	}

	return result;
}



// 1차 시도 (성공)
function solution(arr1, arr2) {
	// 결과를 저장할 빈 배열을 만듭니다.
	let result = [];

	// arr1의 각 행에 대해 반복합니다.
	for (let i = 0; i < arr1.length; i++) {
		// 현재 행의 결과를 저장할 배열을 만듭니다.
		let row = [];

		// arr2의 각 열에 대해 반복합니다.
		for (let j = 0; j < arr2[0].length; j++) {
			// 현재 위치의 값을 계산하기 위한 변수를 초기화합니다.
			let sum = 0;

			// arr1의 현재 행과 arr2의 현재 열을 곱하고 더합니다.
			for (let k = 0; k < arr2.length; k++) {
				// arr1의 i번째 행, k번째 열의 값과 arr2의 k번째 행, j번째 열의 값을 곱하고 더합니다.
				sum += arr1[i][k] * arr2[k][j];
			}

			// 계산된 값을 현재 행에 추가합니다.
			row.push(sum);
		}

		// 완성된 행을 결과 배열에 추가합니다.
		result.push(row);
	}

	// 최종 결과를 반환합니다.
	return result;
}

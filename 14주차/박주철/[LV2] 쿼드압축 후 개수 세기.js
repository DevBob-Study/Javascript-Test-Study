// 1차 시도 (성공)
function solution(arr) {
	// 0과 1의 개수를 저장할 변수
	let zeroCount = 0;
	let oneCount = 0;

	// 주어진 영역이 모두 같은 값인지 확인하는 함수
	function isAllSame(startX, startY, size) {
		const firstValue = arr[startY][startX];
		for (let y = startY; y < startY + size; y++) {
			for (let x = startX; x < startX + size; x++) {
				if (arr[y][x] !== firstValue) {
					return false;
				}
			}
		}
		return true;
	}

	// 영역을 압축하는 함수
	function compressArea(startX, startY, size) {
		// 영역이 모두 같은 값인 경우
		if (isAllSame(startX, startY, size)) {
			if (arr[startY][startX] === 0) {
				zeroCount++;
			} else {
				oneCount++;
			}
		}
		// 영역이 같은 값이 아닌 경우, 4등분하여 재귀 호출
		else {
			const newSize = size / 2;
			compressArea(startX, startY, newSize);
			compressArea(startX + newSize, startY, newSize);
			compressArea(startX, startY + newSize, newSize);
			compressArea(startX + newSize, startY + newSize, newSize);
		}
	}

	// 전체 배열에 대해 압축 시작
	compressArea(0, 0, arr.length);

	// 결과 반환
	return [zeroCount, oneCount];
}

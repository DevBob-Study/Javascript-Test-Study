// 1차 시도 (성공)
function solution(cacheSize, cities) {
	// 실행 시간을 저장할 변수 초기화
	let executionTime = 0;
	// 캐시를 저장할 배열 초기화
	const cache = [];

	// 도시 이름 배열을 순회
	for (let city of cities) {
		// 도시 이름을 소문자로 변환 (대소문자 구분 없음)
		city = city.toLowerCase();

		// 캐시에 도시가 있는지 확인
		const index = cache.indexOf(city);

		if (index > -1) {
			// 캐시 히트: 실행 시간 1 추가
			executionTime += 1;
			// 해당 도시를 캐시의 가장 최근 위치로 이동
			cache.splice(index, 1);
			cache.push(city);
		} else {
			// 캐시 미스: 실행 시간 5 추가
			executionTime += 5;
			// 캐시가 가득 찼다면 가장 오래된 항목 제거
			if (cache.length >= cacheSize) {
				cache.shift();
			}
			// 새로운 도시를 캐시에 추가 (캐시 크기가 0이 아닌 경우에만)
			if (cacheSize > 0) {
				cache.push(city);
			}
		}
	}

	// 총 실행 시간 반환
	return executionTime;
}

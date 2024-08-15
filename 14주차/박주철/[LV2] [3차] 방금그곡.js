// 2차 시도 (성공)
function solution(m, musicinfos) {
	// '#'이 붙은 음을 소문자로 변환하는 함수
	const convertSharp = (melody) => melody.replace(/(\w)#/g, (_, p) => p.toLowerCase());

	// 멜로디를 변환
	m = convertSharp(m);

	// 결과를 저장할 변수 초기화
	let result = { title: "(None)", playTime: 0 };

	musicinfos.forEach((info) => {
		// 음악 정보를 분해
		let [start, end, title, melody] = info.split(",");

		// 재생 시간 계산
		const [startHour, startMin] = start.split(":").map(Number);
		const [endHour, endMin] = end.split(":").map(Number);
		const playTime = endHour * 60 + endMin - (startHour * 60 + startMin);

		// 멜로디를 변환
		melody = convertSharp(melody);

		// 실제 재생된 멜로디 생성
		let playedMelody = melody.repeat(Math.floor(playTime / melody.length)) + melody.slice(0, playTime % melody.length);

		// 기억한 멜로디가 재생된 멜로디에 포함되는지 확인
		if (playedMelody.includes(m)) {
			// 조건에 맞는 경우 결과 업데이트
			if (playTime > result.playTime) {
				result = { title, playTime };
			}
		}
	});

	return result.title;
}



// 1차 시도 (실패) - 테스트 34 〉	실패 (0.14ms, 33.6MB)
function solution(m, musicinfos) {
	// 결과를 저장할 변수를 초기화
	let result = "(None)";
	let maxPlayTime = 0;

	// '#'이 붙은 음을 변환하는 함수
	function convertSharpNotes(melody) {
		return melody.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
	}

	// 기억한 멜로디를 변환
	m = convertSharpNotes(m);

	// 각 음악 정보를 하나씩 확인
	for (let info of musicinfos) {
		// 음악 정보를 쉼표로 구분하여 분리
		let [startTime, endTime, title, melody] = info.split(",");

		// 시작 시간과 종료 시간을 분 단위로 변환
		let [startHour, startMin] = startTime.split(":").map(Number);
		let [endHour, endMin] = endTime.split(":").map(Number);
		let playTime = endHour * 60 + endMin - (startHour * 60 + startMin);

		// 멜로디에서 '#'이 붙은 음을 변환
		melody = convertSharpNotes(melody);

		// 실제 재생된 멜로디를 만듦
		let playedMelody = "";
		for (let i = 0; i < playTime; i++) {
			playedMelody += melody[i % melody.length];
		}

		// 기억한 멜로디가 재생된 멜로디에 포함되는지 확인
		if (playedMelody.includes(m)) {
			// 재생 시간이 더 길거나, 같은 경우 먼저 입력된 음악을 선택
			if (playTime > maxPlayTime) {
				result = title;
				maxPlayTime = playTime;
			}
		}
	}

	// 찾은 음악의 제목을 마지막으로 반환
	return result;
}

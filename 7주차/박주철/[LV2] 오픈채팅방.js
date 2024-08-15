// 2차 시도 (성공)
function solution(record) {
	// 사용자 정보를 저장할 객체
	const userInfo = {};

	// 행동 객체
	const actionMap = {
		Enter: "님이 들어왔습니다.",
		Leave: "님이 나갔습니다.",
	};

	// 첫 번째 패스: 사용자 정보 업데이트 및 유효한 액션 필터링
	const validActions = record.reduce((actions, log) => {
		const [action, userId, nickname] = log.split(" ");

		// 닉네임이 있으면 사용자 정보 업데이트
		if (nickname) {
			userInfo[userId] = nickname;
		}

		// Change 액션이 아니면 유효한 액션으로 저장
		if (action !== "Change") {
			actions.push([action, userId]);
		}

		return actions;
	}, []);

	// 두 번째 패스: 최종 메시지 생성
	return validActions.map(([action, userId]) => `${userInfo[userId]}${actionMap[action]}`);
}



// 1차 시도 (성공)
function solution(record) {
	// 사용자 ID와 닉네임을 저장할 객체
	let userInfo = {};
	// 최종 결과를 저장할 배열
	let result = [];

	// 첫 번째 반복: 사용자 정보 업데이트
	for (let i = 0; i < record.length; i++) {
		// 각 레코드를 공백으로 분리
		let [action, userId, nickname] = record[i].split(" ");

		// Enter나 Change 액션일 경우 사용자 정보 업데이트
		if (action === "Enter" || action === "Change") {
			userInfo[userId] = nickname;
		}
	}

	// 두 번째 반복: 최종 메시지 생성
	for (let i = 0; i < record.length; i++) {
		let [action, userId] = record[i].split(" ");

		if (action === "Enter") {
			result.push(`${userInfo[userId]}님이 들어왔습니다.`);
		} else if (action === "Leave") {
			result.push(`${userInfo[userId]}님이 나갔습니다.`);
		}
		// Change는 메시지를 생성하지 않음
	}

	return result;
}

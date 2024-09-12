//2차 시도 - 성공
function solution(book_time) {
	// 시간을 분으로 바꾸는 함수
	function changeTimeToMinutes(time) {
		// 시간 문자열을 : 기준으로 쪼개서 시간과 분을 분리
		const splitTime = time.split(":");
		const hours = parseInt(splitTime[0]);
		// 시간을 숫자로 변환
		const minutes = parseInt(splitTime[1]);
		// 분을 숫자로 변환

		// 시간을 분으로 변환하고 기존 분을 더함
		return hours * 60 + minutes;
	}

	// 모든 예약 시간을 분으로 바꾸고 새로운 배열 만들기
	const changedBookings = book_time.map(function (booking) {
		return {
			startTime: changeTimeToMinutes(booking[0]),
			// 시작 시간을 분으로 변환
			endTime: changeTimeToMinutes(booking[1]) + 10,
			// 종료 시간을 분으로 변환하고 청소 시간 10분 추가
		};
	});

	// 예약들을 시작 시간 순서대로 정렬
	changedBookings.sort(function (a, b) {
		return a.startTime - b.startTime;
	});

	const usedRooms = [];
	// 사용 중인 방들의 종료 시간을 저장할 배열

	// 모든 예약에 대해 반복
	for (let i = 0; i < changedBookings.length; i++) {
		const currentBooking = changedBookings[i];
		let foundEmptyRoom = false;
		// 빈 방을 찾았는지 표시하는 변수

		// 이미 사용 중인 방들을 확인
		for (let j = 0; j < usedRooms.length; j++) {
			// 만약 방의 사용 종료 시간이 현재 예약의 시작 시간보다 이르다면
			if (usedRooms[j] <= currentBooking.startTime) {
				usedRooms[j] = currentBooking.endTime;
				// 해당 방의 사용 종료 시간을 현재 예약의 종료 시간으로 업데이트
				foundEmptyRoom = true;
				// 빈 방을 찾았다고 표시
				break;
				// 방을 찾았으니 더 이상 찾지 않아도 됨
			}
		}

		// 만약 빈 방을 찾지 못했다면
		if (!foundEmptyRoom) {
			usedRooms.push(currentBooking.endTime);
      // 새로운 방을 추가하고 현재 예약의 종료 시간을 저장
		}
	}

	// 총 사용된 방의 개수 반환
	return usedRooms.length;
}



//1차 시도 - 실패
function solution(book_time) {
	function timeToMinutes(time) {
		const [hours, minutes] = time.split(":").map(Number);
		return hours * 60 + minutes;
	}

	const bookings = book_time.map(([start, end]) => [timeToMinutes(start), timeToMinutes(end) + 10]);

	let roomCount = 0;

	for (let i = 0; i < bookings.length; i++) {
		let overlapping = 1;

		for (let j = 0; j < bookings.length; j++) {
			if (i !== j) {
				if (bookings[i][0] < bookings[j][1] && bookings[j][0] < bookings[i][1]) {
					overlapping++;
				}
			}
		}

		roomCount = Math.max(roomCount, overlapping);
	}

	return roomCount;
}

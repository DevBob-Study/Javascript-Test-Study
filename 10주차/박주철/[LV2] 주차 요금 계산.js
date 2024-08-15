// 1차 시도 (성공)
function solution(fees, records) {
	// 기본 시간, 기본 요금, 단위 시간, 단위 요금
	const [basicTime, basicFee, unitTime, unitFee] = fees;

	// 차량별 주차 시간을 저장할 객체
	const parkingTimes = {};

	// 시간을 분으로 변환하는 함수
	function convertToMinutes(time) {
		const [hours, minutes] = time.split(":");
		return parseInt(hours) * 60 + parseInt(minutes);
	}

	// 주차 시간 계산하기
	records.forEach((record) => {
		const [time, carNumber, type] = record.split(" ");

		if (!parkingTimes[carNumber]) {
			parkingTimes[carNumber] = { inTime: null, totalTime: 0 };
		}

		if (type === "IN") {
			parkingTimes[carNumber].inTime = convertToMinutes(time);
		} else {
			// 'OUT'
			const parkingTime = convertToMinutes(time) - parkingTimes[carNumber].inTime;
			parkingTimes[carNumber].totalTime += parkingTime;
			parkingTimes[carNumber].inTime = null;
		}
	});

	// 출차하지 않은 차량 처리
	Object.keys(parkingTimes).forEach((carNumber) => {
		if (parkingTimes[carNumber].inTime !== null) {
			const parkingTime = convertToMinutes("23:59") - parkingTimes[carNumber].inTime;
			parkingTimes[carNumber].totalTime += parkingTime;
		}
	});

	// 요금 계산하기
	const calculateFee = (time) => {
		if (time <= basicTime) return basicFee;
		const overTime = Math.ceil((time - basicTime) / unitTime);
		return basicFee + overTime * unitFee;
	};

	// 차량 번호 순으로 정렬하고 요금 계산
	return Object.entries(parkingTimes)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([_, data]) => calculateFee(data.totalTime));
}

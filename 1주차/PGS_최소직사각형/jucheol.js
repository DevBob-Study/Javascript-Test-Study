// 3차 시도 (성공)
function solution(sizes) {
	let result = [0, 0];
	let rotated = sizes.map(([w, h]) => (
        w < h ? [h, w] : [w, h]
    ));
    
	rotated.forEach(([w, h]) => {
		if (w > result[0]) result[0] = w;
		if (h > result[1]) result[1] = h;
	});
	return result[0] * result[1];
}



// 2차 시도 (성공)
function solution(sizes) {
	let result = [0, 0];
	sizes.forEach(([w, h]) => {
		let [min, max] = w > h ? [h, w] : [w, h];
		result[0] = Math.max(result[0], max);
		result[1] = Math.max(result[1], min);
	});
	return result[0] * result[1];
}



// 1차 시도 (성공)
function solution(sizes) {
	let result = [];
	sizes.map(([value]) => {
		value.sort((a, b) => a - b);
		result[0] < value[0] || !result[0] ? (result[0] = value[0]) : 0;
		result[1] < value[1] || !result[1] ? (result[1] = value[1]) : 0;
	});
	return result[0] * result[1];
}

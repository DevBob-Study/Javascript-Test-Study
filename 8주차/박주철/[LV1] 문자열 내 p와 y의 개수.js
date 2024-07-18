// 2차 시도 (성공)
function solution(s) {
	return s.toLowerCase().split("p").length === s.toLowerCase().split("y").length;
}



// 1차 시도 (성공)
function solution(s) {
	let pCount = 0;
	let yCount = 0;
    
	s = s.toLowerCase();

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "p")
            pCount++;
		if (s[i] === "y")
            yCount++;
	}

	return pCount === yCount;
}

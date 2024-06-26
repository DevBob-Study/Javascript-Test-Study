// 2차 시도 (성공)
function solution(name) {
    let moves = 0;
    let minSideMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        moves += Math.min(name[i].charCodeAt(0) - 65, 91 - name[i].charCodeAt(0));
        
        let endA = i + 1;
        while (endA < name.length && name[endA] === 'A') endA++;
        
        minSideMove = Math.min(minSideMove, i * 2 + (name.length - endA), (name.length - endA) * 2 + i);
    }
    
    return moves + minSideMove;
}



// 1차 시도 (성공)
function solution(name) {
	let totalMoves = 0;
	let leftRightMoves = name.length - 1;

	for (let i = 0; i < name.length; i++) {
		let char = name[i];
		let upMoves = char.charCodeAt(0) - "A".charCodeAt(0);
		let downMoves = 26 - upMoves;
		totalMoves += Math.min(upMoves, downMoves);

		let nextIndex = i + 1;
		while (nextIndex < name.length && name[nextIndex] === "A") {
			nextIndex++;
		}

		let moveBack = i * 2 + (name.length - nextIndex);
		let moveForward = (name.length - nextIndex) * 2 + i;
		leftRightMoves = Math.min(leftRightMoves, moveBack, moveForward);
	}

	return totalMoves + leftRightMoves;
}

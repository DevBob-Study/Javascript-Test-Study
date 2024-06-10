//3차 해결 (성공)
function solution(nums) {
	return Math.min(new Set(nums).size, nums.length / 2);
}

//2차 해결 (성공)
function solution(nums) {
	let hashSet = new Set(nums);
	return Math.min(hashSet.size, nums.length / 2);
}

// 1차 시도 (성공)
function solution(nums) {
    let answer = 0;
    let hashSet = new Set(nums);
    let numsLen = nums.length/2;

    if (hashSet.size > numsLen) {
        answer = numsLen
    }
    else {
        answer = hashSet.size
    }
    return answer;
}

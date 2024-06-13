// 3차 시도 (성공)
function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) =>
        Math.ceil((100 - progress) / speeds[index])
    );
    
    let maxDay = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            maxDay = days[i];
            count = 1;
        }
    }
    
    answer.push(count);
    
    return answer;
}



// 2차 시도 (성공)
function solution(progresses, speeds) {
    const answer = [];
    const stack = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const remainingDays = Math.ceil((100 - progresses[i]) / speeds[i]);
        
        if (stack.length === 0 || remainingDays > stack[stack.length - 1]) {
            stack.push(remainingDays);
            answer.push(1);
        } else {
            answer[answer.length - 1]++;
        }
    }
    
    return answer;
}


// 1차 시도 (성공)
function solution(progresses, speeds) {
    var answer = [];
    
    while(progresses.length > 0) {
        progresses = progresses.map((acc, idx) => acc + speeds[idx])
        
        var count = 0;
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count++;
        }
        if(count > 0) {
            answer.push(count)
        }
    }
    
    return answer;
}
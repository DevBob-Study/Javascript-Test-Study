// 4차 시도 (성공) - 해시 사용
function solution(participant, completion) {   
    let hashMap = new Map();
    
    for (let par of participant) {
        hashMap.set(par, (hashMap.get(par) || 0) + 1);
    }
    
    for (let com of completion) {
        hashMap.set(com, hashMap.get(com) - 1);
    }
    
    for(let [name, count] of hashMap) {
        if(count > 0) {
            return name;
        }
    }
}



// 3차 시도 (성공) - 해시 사용
function solution(participant, completion) {   
    let hashMap = new Map();
    for(let i = 0;i<=participant.length;i++) {
        let par = participant[i];
        let com = completion[i];
        hashMap.set(par, (hashMap.get(par) || 0) + 1);
        hashMap.set(com, (hashMap.get(com) || 0) - 1);
    }
    for(let [i, j] of hashMap) {
        if(j > 0) {
            return i;
        }
    }
}



// 2차 시도 (성공) - 해시 미사용
function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    for(let i = 0;i<=participant.length;i++) {
        if(participant[i] != completion[i])
            return participant[i];
    }
}



// 1차 시도 (실패) - Set 사용
function solution(participant, completion) {
    let participantSet = new Set(participant);
    let completionSet = new Set(completion);
    
    let result = participant.filter((value) => !completionSet.has(value))
    console.log(result);
}

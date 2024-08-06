// 내 풀이 - 25.9%
function mySolution(name) {
    var answer = 0;

    let nameArr = name.split("");

    let countA = nameArr.filter((item) => "A" === item).length;
    let withoutA = nameArr.filter((item) => "A" !== item);

    for (let i = 0; i < withoutA.length; i++) {
        let nameNum = withoutA[i].charCodeAt(0);
        let differ = nameNum - 78;
        if (differ < 0) {
            answer += nameNum - 65;
        } else {
            // differ > 0
            answer += 91 - nameNum;
        }

        answer += 1;
    }

    if (countA === nameArr.length - 2) {
        return answer - 1;
    } else {
        return answer - 1 + countA;
    }
}

// 검색 풀이 분석
function solution(name) {
    var answer = 0;
    let min = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let current = name.charCodeAt(i);

        if (current < 78) {
            answer += current % 65;
        } else {
            answer += 91 - current;
        }

        // 여기부터 생각 못한 풀이
        // 1. A 확인
        let nextIndex = i + 1;
        while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
            nextIndex += 1;
        }

        // 2. 커서 루트 나눠서 min 값 찾기
        min = Math.min(
            min,
            i * 2 + name.length - nextIndex, // 오른쪽
            i + (name.length - nextIndex) * 2 // 처음부터 반대로
        );
    }

    answer += min; // 커서 움직인 정도 더하기
    return answer;
}

// 내 풀이 - 25.9%
function mySolution(people, limit) {
    var answer = 0;

    const smallist = Math.min(...people);
    const notAlone = people.filter((person) => person + smallist <= limit);
    const aloneCount = people.length - notAlone.length;

    while (notAlone.length > 1) {
        let remain = limit - notAlone[0];
        notAlone.shift();
        while (remain > 0) {
            const temp = notAlone.filter((person) => person <= remain);
            if (temp.length !== 0) {
                let min = Math.min(...temp);
                let minIndex = temp.indexOf(min);
                notAlone.splice(minIndex, 1);
                remain -= min;
            } else {
                break;
            }
        }
        answer += 1;
    }

    if (notAlone.length === 1) {
        answer += 1;
    }

    return aloneCount + answer;
}

// 검색한 방법 변형 - 검색에서는 at이라는 생소한? 것을 사용해서 그 부분만 변경
// sort를 하는 방법이 있었구나...

function solution(people, limit) {
    let count = 0;
    people.sort((a, b) => a - b);

    while (people.length) {
        if (people[0] + people[people.length - 1] <= limit) {
            people.shift(); // 맨 뒤 삭제
            people.pop(); // 맨 앞 삭제
            count++; // 보트 개수 증가
        } else {
            people.pop();
            count++;
        }
    }
    return count;
}

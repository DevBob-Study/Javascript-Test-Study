// 3차 시도 (성공) - 해시 사용
function solution(phone_book) {
    let phoneMap = {};
    for(const item of phone_book) {
        phoneMap[item] = true;
    }

    for(let i = 0 ; i < phone_book.length ; i++) {
        for(let j = 0 ; j < phone_book[i].length ; j++) {
            let front = phone_book[i].substring(0, j);
            if(phoneMap[front] && front !== phone_book[i]) {
                return false;
            }
        }
    }
    return true;
}



// 2차 시도 (성공) - 해시 미사용
function solution(phone_book) {
    phone_book.sort();
    for(let i = 0 ; i < phone_book.length - 1 ;i++) {
        if(phone_book[i+1].startsWith(phone_book[i]))
            return false;
        }
    return true;
}



// 1차 시도 (실패)
function solution(phone_book) {
    var answer = true;
    phone_book.map((value) => {
        value.includes(phone_book[0], 0) && value !== phone_book[0] ? answer = false : 0;
    });
    return answer;
}
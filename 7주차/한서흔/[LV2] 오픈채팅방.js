// 1차 시도 - 실패
function solution(record) {
    var answer = [];

    // Set을 통해 uid를 중복없이 배열로 정렬
    let uidList = [...new Set(record.map((v) => v.split(" ")[1]))];
    let nickname = "";

    // 1
    for (let i = 0; i < uidList.length; i++) {
        let searchUser = record.filter((v) => v.split(" ")[0] !== "Leave" && v.split(" ")[1] === uidList[i]);
        nickname = searchUser[searchUser.length - 1].split(" ")[2];
        uidList[i] = [uidList[i], nickname];
    }

    let status = [];
    let user = [];

    // 2
    while (record.length > 0) {
        status = record.shift().split(" ");
        user = uidList.filter((v) => v[0] === status[1]);

        if (status[0] === "Enter") {
            answer.push(`${user[0][1]}님이 들어왔습니다.`);
        } else if (status[0] === "Leave") {
            answer.push(`${user[0][1]}님이 나갔습니다.`);
        }
    }

    return answer;
}

// 2차 시도 - 성공
function solution(record) {
    var answer = [];

    let temp = [];

    // Map을 통해 key: uid, value: 닉네임을 저장
    let userList = new Map();
    record.forEach((v) => {
        temp = v.split(" ");
        if (temp[0] !== "Leave") {
            userList.set(temp[1], temp[2]);
        }
    });

    let status = [];

    // Map.get을 통해 닉네임을 바로 호출
    while (record.length > 0) {
        status = record.shift().split(" ");

        if (status[0] === "Enter") {
            answer.push(`${userList.get(status[1])}님이 들어왔습니다.`);
        } else if (status[0] === "Leave") {
            answer.push(`${userList.get(status[1])}님이 나갔습니다.`);
        }
    }

    return answer;
}

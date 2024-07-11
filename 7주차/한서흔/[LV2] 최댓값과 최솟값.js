function solution(s) {
    let numList = s.split(" ");
    numList = numList.map((v) => Number(v)).sort((a, b) => a - b);

    return `${numList[0]} ${numList[numList.length - 1]}`;
}

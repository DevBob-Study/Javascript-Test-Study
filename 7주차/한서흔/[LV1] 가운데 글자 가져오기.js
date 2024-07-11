function solution(s) {
    let length = s.length;
    let center = Math.round(length / 2);

    if (length % 2 !== 0) {
        return s[center - 1];
    } else {
        return s[center - 1] + s[center];
    }
}

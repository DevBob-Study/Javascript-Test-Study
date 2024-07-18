function solution(s) {
    s = s.toLowerCase();

    let count_p = s.split("").filter((v) => v === "p").length;
    let count_y = s.split("").filter((v) => v === "y").length;

    if (count_p === count_y) {
        return true;
    } else {
        return false;
    }
}

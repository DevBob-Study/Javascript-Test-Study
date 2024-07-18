function solution(n) {
    let newN = n;

    while (true) {
        newN = newN + 1;

        let n_arr = n.toString(2).toString().split("");
        let new_arr = newN.toString(2).toString().split("");

        let count_n = n_arr.filter((v) => v === "1").length;
        let count_new = new_arr.filter((v) => v === "1").length;

        if (count_n === count_new) return newN;
    }
}

function solution(s) {
    let words = s.split(" ");
    let word = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            word = words[i]
                .split("")
                .filter((v, index) => index > 0)
                .join("")
                .toLowerCase();
            words[i] = words[i][0].toUpperCase() + word;
        } else {
            continue;
        }
    }

    return words.join(" ");
}

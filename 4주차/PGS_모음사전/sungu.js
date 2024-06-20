// 1h 30m

function solution(word) {
  const vowel = ["A", "E", "I", "O", "U"];
  const arr = [];

  const dfs = (cur) => {
    if (cur.length > 5) return;

    arr.push(cur);

    for (let i = 0; i < 5; i++) {
      dfs(cur + vowel[i]);
    }
  };
  dfs("");
  return arr.indexOf(word);
}

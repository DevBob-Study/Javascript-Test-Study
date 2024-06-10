function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] == "(" ? cnt++ : (cnt -= 1);
    if (cnt < 0) {
      break;
    }
  }
  return cnt == 0 ? true : false;
}

function solution(s) {
  let tmp = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      tmp++;
    } else {
      tmp -= 1;
    }
    if (tmp == -1) {
      return false;
    }
  }
  if (tmp == 0) {
    return true;
  } else {
    return false;
  }
}

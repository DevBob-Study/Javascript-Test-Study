function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const tmp = discount.slice(i, i + 10);

    let isOk = true;

    for (let j = 0; j < want.length; j++) {
      let cnt = 0;
      for (let k = 0; k < 10; k++) {
        if (want[j] === tmp[k]) {
          cnt++;
        }
      }
      if (cnt !== number[j]) {
        isOk = false;
        break;
      }
    }

    if (isOk == true) {
      answer++;
    }
  }
  return answer;
}

function solution(want, number, discount) {
  let answer = 0;

  const wantList = {};
  want.forEach((item, index) => {
    wantList[item] = number[index];
  });

  function checkDiscount(start) {
    const discountList = {};

    for (let i = start; i < start + 10; i++) {
      e;
      const item = discount[i];
      discountList[item] = (discountList[item] || 0) + 1;
    }

    for (let item in wantList) {
      if (wantList[item] !== discountList[item]) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    if (checkDiscount(i)) {
      answer++;
    }
  }

  return answer;
}

function solution(phone_book) {
  const hash = new Map();
  for (const number of phone_book) {
    hash.set(number, true);
  }
  for (const number of phone_book) {
    for (let i = 0; i < number.length; i++) {
      if (hash.has(number.substring(0, i))) {
        return false;
      }
    }
  }
  return true;
}

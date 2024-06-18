function solution(phone_book) {
  const hashMap = {};
  for (let phone of phone_book) {
    hashMap[phone] = true;
  }
  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const prefix = phone.substring(0, i);
      if (hashMap[prefix]) return false;
    }
  }
  return true;
}

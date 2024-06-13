function solution(phone_book) {
  let phone_hash = new Set(phone_book);
  
  for (let number of phone_book) {
      for (let i = 1; i < number.length; i++) {
          if (phone_hash.has(number.substring(0, i))) {
              return false;
          }
      }
  }
  return true;
}
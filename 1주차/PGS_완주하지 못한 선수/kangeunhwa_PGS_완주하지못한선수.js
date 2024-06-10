function solution(participant, completion) {
  let hashMap = new Map();

  participant.map((person) => {
    if (!hashMap.has(person)) {
      hashMap.set(person, 1);
    } else {
      hashMap.set(person, hashMap.get(person) + 1);
    }
  });

  completion.map((person) => {
    if (hashMap.has(person)) {
      hashMap.set(person, hashMap.get(person) - 1);
    }
  });

  for (const person of participant) {
    if (hashMap.get(person) && hashMap.get(person) >= 1) {
      return person;
    }
  }
}

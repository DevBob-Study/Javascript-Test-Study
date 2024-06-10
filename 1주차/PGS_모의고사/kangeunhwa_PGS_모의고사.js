const answerfilter = (personarray, answerarray) => {
  let answercount = 0;
  for (let i = 0; i < answerarray.length; i++) {
    if (personarray[i % personarray.length] == answerarray[i]) {
      answercount++;
    }
  }
  return answercount;
};

function solution(answers) {
  const result = [];

  const firstperson = [1, 2, 3, 4, 5];
  const secondperson = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdperson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const firstanswer = answerfilter(firstperson, answers);
  const secondanswer = answerfilter(secondperson, answers);
  const thirdanswer = answerfilter(thirdperson, answers);

  const max = Math.max(firstanswer, secondanswer, thirdanswer);
  if (firstanswer == max) result.push(1);
  if (secondanswer == max) result.push(2);
  if (thirdanswer == max) result.push(3);

  return result.sort((a, b) => a - b);
}

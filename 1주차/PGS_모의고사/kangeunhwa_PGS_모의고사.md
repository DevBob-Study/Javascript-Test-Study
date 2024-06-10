수포자가 찍은 순대로 정답을 얼만큼 맞췄는 지 알려주는 문제이다.

first, second, third 별로 정해진 패턴을 배열로 만들고

answerfilter 함수를 만들어서

answerarray의 값과 personarray[i % personarray.length] 을 하여서 정답이 맞았는지를 판별하고 리턴해준다.

i % personarray.length를 해주는 이유는 personarray와 answerarray의 길이가 다르기 때문에 이렇게 해주는 것이다.

일단 그렇게 answerfilter를 하면 맞은 정답 개수가 나오는데

이거를 Math.max로 무엇이 더 큰 지 max 변수에 담고

if문을 돌려서 max와 첫번째, 두번째, 세번째 값 중 max를 찾아서 result.push 해주고,

가장 많은 문제를 맞힌 사람이 여러명일 수 있으니 오름차순 해준다.

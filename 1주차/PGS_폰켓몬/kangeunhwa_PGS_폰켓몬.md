폰켓몬은 n개의 폰켓몬 중에서 n/2 폰켓몬을 최대한 중복없이 가져가는 문제이다.

해시 알고리즘 문제이기 때문에 해시 알고리즘을 사용했다.
해시는 Key, value 로 이루어진 자료구조이다.

나는 폰켓몬에서는 new Map() 자료구조를 이용해 구현했다.

new Map()
-> Map 객체를 만들때 쓰인다.
map.set(key,value)
-> key를 이용해 value값을 저장한다.
map.get(key)
-> key에 해당하는 value를 반환한다.
map.has(key)
-> key가 존재한다면 true, 없다면 false를 반환한다.
map.delete(key)
-> key에 해당하는 값을 삭제한다.
map.size
-> 요소의 개수를 반환한다.

map 자료구조를 사용하는 방법이다.

코드 설명을 해보자면
n / 2 로 일단 가져갈 수 있는 폰켓몬을 구한다.
우리는 사실 가져갈 수 있는 유형을 구하는 문제기 때문에 유형만 구하면 된다.

그 후 hashMap 변수를 선언하여 new Map() 객체를 만든다.
주어진 숫자 값을 반복문을 돌린 후,
hashMap.set으로 주어진 숫자값을 Key로, 숫자값이 얼만큼 중복되었는 지를 num으로 받아왔다.

그렇게 되면 중복된 값은 어차피 같은 key일 테니까
1, 2, 3, 3 이면 1, 2, 3 만 Key가 만들어져 있을 것이다.
그럼 hashMap의 size는 3개이다.

여기서 앞서 구한 n / 2 인 result 값과 hashMap.size를 비교하여 hashMap.size가 result보다 크다면, result만큼의 유형밖에 가져가지 못하니 그렇게 구해주었고,
작다면 hashMap.size의 크기를 가져오면 최대로 가져올 수 있는 유형이 된다.

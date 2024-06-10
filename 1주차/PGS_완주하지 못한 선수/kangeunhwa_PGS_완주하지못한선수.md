완주하지 못한 선수는, 간단하게 설명하자면, 마라톤에 참여한 선수들 중에 완주하지 못하는 선수를 찾는 문제이다.

해시 알고리즘 문제이기 때문에 해시 알고리즘을 사용했다.
해시는 Key, value로 이루어진 자료구조이다.

완주하지 못한 선수는 new Map() 자료구조를 이용해 구현했다.

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

코드 설명을 해보자면,

일단 hashMap으로 new Map() 객체를 선언한다.

참가자를 반복문을 돌린 후,
우선, hashMap.has로 참가자가 존재하는 지에 관해 조건을 주었다.

존재 하지 않는다면, hashMap.set으로 주어진 참가자 이름을 Key, 참가자가 중복된 이름이 있을 수 있으니 참가자 이름의 수를 알기 위해 디폴트로 1 을 넣어준다.
hashMap.set(person, 1);

존재한다면, 중복된 이름일테니 hashMap.get으로 그 이름 key인 value 값을 가져와서 + 1 해준다.
hashMap.set(person, hashMap.get(person) + 1);

그렇게되면 참가자이름: 참가자이름 수 이렇게 key, value로 나눌 수 있다.

그 후, 완료한 완주자도 반복문을 돌려서 앞서 구현해둔 참가자가 담겨있는 hashMap에 완주자가 존재하는 지 hashMap.has로 확인한다.

존재한다면, hashMap.set으로 그 완주한 완주자를 참가자 명단에 제거해주는 소거방식으로 해준다.
hashMap.set(person, hashMap.get(person) - 1);

이렇게 하면, 완주하지 못한 선수는 hashMap안의 value가 0보다 클 것이다.

그 후 참가자 수를 반복문을 돌려서
그 참가자가 hashMap에 존재하고, hashMap의 value가 0보다 크다면,
그 참가자는 완주를 하지 못한 선수이기 때문에 완주하지 못한 선수를 return 해준다.

해시 알고리즘을 사용했기 때문에 시간복잡도도 O(1) 이다.
해시 알고리즘의 장점이 검색과 저장이 아주 빠르게 진행되는 자료구조인데
확실히 시간복잡도 성능 관련해서는 해시를 사용하는 편이 좋아보인다.

처음 시도

```javascript
function solution(scoville, K) {
  let answer = 0;

  scoville.sort((a, b) => a - b);

  while (scoville[0] < K) {
    if (scoville.length < 2) {
      return -1;
    }

    let first = scoville.shift();
    let second = scoville.shift();
    let mix = first + second * 2;

    scoville.push(mix);
    scoville.sort((a, b) => a - b);

    answer++;
  }

  return answer;
}
```

그냥 배열을 이용해서..K보다 작을 때 while문을 돌렸고, scoville.length < 2 이면 비교할 대상 자체가 없기 때문에 -1을 해주고, 첫번째와 두번째 값을 빼내와서 적힌대로 mix하고, scoville.push(mix) 했습니다.
그리고 다시 정렬을 해주고 answer++을 해주었습니다.

효율성 테스트에서 계속 실패했습니다.

사용자가 작성한 코드에서 문제가 되는 부분은 매번 `scoville` 배열을 섞은 후 다시 정렬하는 과정입니다. 배열을 정렬하는 것은 시간 복잡도가 \(O(n \log n)\)입니다. 이 과정을 매번 반복하면, 특히 `scoville` 배열의 크기가 큰 경우에는 시간 복잡도가 매우 높아져서 효율성 문제가 발생할 수 있습니다. 반면에 힙(Heap) 자료구조를 사용할 경우, 요소를 추가하거나 제거할 때 \(O(\log n)\)의 시간 복잡도로 처리할 수 있습니다. 따라서, 문제를 해결하기 위해 힙 자료구조를 사용하는 것이 좋습니다. 자바스크립트에는 기본적으로 힙 자료구조를 제공하는 내장 함수가 없으므로, 우선순위 큐와 같은 힙의 기능을 직접 구현하거나, 더 낮은 시간 복잡도로 문제를 해결할 수 있는 다른 방법을 고려해 보세요. 예를 들어, 사용자가 작성한 코드처럼 배열을 사용할 때는, 매번 전체 배열을 정렬하는 대신 적절한 위치에 새로운 음식의 스코빌 지수를 삽입하는 방법을 생각해 볼 수 있습니다. 하지만 가장 효율적인 방법은 여전히 힙을 활용하는 것입니다.

AI 코드 피드백이라는 신기한 기능이 있어서 사용해보니 매번 정렬하는 과정에서 시간 복잡도가 초과된다고 합니다.
무조건 힙 자료구조를 사용해야하는 문제였네요.

https://chamdom.blog/heap-using-js/

힙이란?
완전 이진 트리의 일종. 특정한 규칙을 따라서 부모노드와 자식 노드 사이의 값이 정렬됨

힙의 종류

최대 힙 : 부모 노드 값이 자식 노드 값보다 항상 크거나 같은 완전이진트리
최소 힙 : 부모 노드 값이 자식 노드 값보다 항상 작거나 같은 완전이진트리

여기서는 가장 작은 스코빌 지수를 구해야 하기 때문에 최소 힙을 사용해야 했습니다.

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  //힙을 빈 배열로 초기화 해줍니다.

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  //삽입 : 값을 힙의 끝에 추가한 후 bubbleUp을 호출하여 힙의 속성을 유지합니다.

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  //힙의 최솟값을 제거하고 반환합니다. 힙의 마지막 값을 루트로 이동한 후, bubbleDown을 호출하여 힙의 속성을 유지합니다.

  peek() {
    return this.heap[0];
  }

  //힙의 최솟값을 반환합니다.

  bubbleUp() {
    let index = this.heap.length - 1;
    const element = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      const parent = this.heap[parentIndex];

      if (element >= parent) break; //요소가 더 작으면 나가라.

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  //새로 삽입된 요소를 올려가며 힙의 속성을 유지합니다. (이진 트리를 생각했을 때, 부모보다 작을 경우 자리바꾼다고 생각하면 쉽게 이해 되더라고요.)

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
  // 이건 내려가며 힙의 속성을 유지해주는 겁니다. 반대로 요소가 자식보다 클 경우 자식과 자리를 바꿉니다.
  // 이진트리이니까 2개의 노드를 가지는 왼쪽 노드 오른쪽노드를 구해줍니다.

  size() {
    return this.heap.length;
  }

  //힙의 크기를 반환합니다.
}
```

이렇게 minHeap이라는 최소힙을 구현해주었습니다.

```javascript
function solution(scoville, K) {
  const minHeap = new MinHeap();

  // 주어진 모든 스코빌 지수를 최소 힙에 삽입
  for (let s of scoville) {
    minHeap.insert(s);
  }

  let answer = 0;

  // 힙의 최솟값이 K 이상이 될 때까지 반복
  while (minHeap.size() > 1 && minHeap.peek() < K) {
    // 가장 맵지 않은 두 개의 스코빌 지수를 추출하여 섞음
    const first = minHeap.extractMin();
    const second = minHeap.extractMin();
    const newScoville = first + second * 2;

    // 새로운 스코빌 지수를 힙에 삽입
    minHeap.insert(newScoville);
    answer++;
  }

  // 모든 음식의 스코빌 지수가 K 이상이 될 수 없는 경우
  if (minHeap.peek() < K) {
    return -1;
  }

  return answer;
}
```

이 코드는 생각보다 쉬웠는데, 힙을 다 구현하고 나니 쉽게 풀이가 되더라고요.
minheap 객체를 생성해준 다음에, 모든 배열에 있는 값을 insert로 삽입합니다.
그리고 횟수 기록하기 위해 answer = 0 해주고,
최소 합의 크기가 1보다 크고, 루트 노드가 K보다 작은 동안 반복합니다.
while문 써서 사용하는 것은 똑같았네요.

그렇게 두개를 추출하고 새로운 스코빌 지수를 만듭니다. 힙의 성질을 유지하기 위해 방금 최소힙을 사용할 때 만든 extractMin을 사용합니다.
그리고 섞은 횟수를 증가합니다.

그리고 예외사항으로 모든 스코빌 지수가 K 이상이 될 수 없는 특이한 경우가 있을 수도 있는데요. (1만 있다거나 하는)
그런 상황을 대비해서 그럴때는 -1을 반환하게 합니다.

그리고 answer를 리턴합니다.

이렇게 힙을 사용해서 풀어야 하는 문제였고, 이러한 방식으로 하면 가장 효율적입니다.

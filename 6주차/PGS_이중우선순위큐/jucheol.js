// MaxHeap 클래스는 2차, 3차 공통
class MaxHeap {
	// 최대 힙 자료구조를 구현
	constructor() {
		this.heap = []; // 힙을 배열로 표현, 루트는 인덱스 0에 위치
	}

	// 새 원소를 힙에 추가하는 메서드
	push(value) {
		this.heap.push(value); // 새 원소를 배열의 끝에 추가
		this.bubbleUp(); // 새로 추가된 원소를 올바른 위치로 이동
	}

	// 최대값(루트)을 제거하고 반환하는 메서드
	pop() {
		if (this.isEmpty()) return null; // 힙이 비어있으면 null을 반환
		const max = this.heap[0]; // 최대값은 항상 루트(인덱스 0)에 있음
		const end = this.heap.pop(); // 배열의 마지막 원소를 제거
		if (this.heap.length > 0) {
			this.heap[0] = end; // 마지막 원소를 루트로 이동
			this.bubbleDown(); // 루트에서 시작해 올바른 위치로 이동
		}
		return max; // 최대값을 반환
	}

	// 새로 추가된 원소를 위로 이동시켜 힙 속성을 유지하는 메서드
	bubbleUp() {
		let index = this.heap.length - 1; // 새로 추가된 원소의 인덱스
		const element = this.heap[index]; // 새로 추가된 원소
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2); // 부모 노드의 인덱스
			let parent = this.heap[parentIndex]; // 부모 노드의 값
			if (element <= parent) break; // 올바른 위치를 찾으면 루프를 종료
			// 부모와 현재 원소를 교환
			this.heap[parentIndex] = element;
			this.heap[index] = parent;
			index = parentIndex; // 인덱스를 부모 인덱스로 업데이트
		}
	}

	// 루트에서 시작해 아래로 이동하며 힙 속성을 유지하는 메서드
	bubbleDown() {
		let index = 0; // 루트에서 시작
		const length = this.heap.length;
		const element = this.heap[0]; // 현재 검사 중인 원소
		while (true) {
			let leftChildIndex = 2 * index + 1; // 왼쪽 자식의 인덱스
			let rightChildIndex = 2 * index + 2; // 오른쪽 자식의 인덱스
			let leftChild, rightChild;
			let swap = null; // 교환할 자식의 인덱스

			// 왼쪽 자식이 존재하고, 현재 원소보다 크면 교환 대상으로 지정
			if (leftChildIndex < length) {
				leftChild = this.heap[leftChildIndex];
				if (leftChild > element) {
					swap = leftChildIndex;
				}
			}

			// 오른쪽 자식이 존재하고, 왼쪽 자식보다 크면 교환 대상으로 지정
			if (rightChildIndex < length) {
				rightChild = this.heap[rightChildIndex];
				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIndex;
				}
			}

			if (swap === null) break; // 교환할 대상이 없으면 루프를 종료
			// 현재 원소와 교환 대상을 교환
			this.heap[index] = this.heap[swap];
			this.heap[swap] = element;
			index = swap; // 인덱스를 교환된 위치로 업데이트
		}
	}

	// 힙이 비어있는지 확인하는 메서드
	isEmpty() {
		return this.heap.length === 0;
	}

	// 최대값(루트)을 반환하는 메서드 (제거하지 않음)
	peek() {
		return this.heap[0];
	}
}



// 3차 시도 (성공) - 힙 알고리즘
// 주어진 연산들을 처리하는 메인 함수
function solution(operations) {
	const maxHeap = new MaxHeap(); // 최대 힙 인스턴스 생성
	const minHeap = new MaxHeap(); // 최소 힙으로 사용할 최대 힙 인스턴스 생성
	let count = 0; // 현재 큐에 있는 원소 수를 추적

	// 각 연산을 순회하며 처리
	for (let op of operations) {
		const [command, num] = op.split(" "); // 연산을 명령어와 숫자로 분리
		if (command === "I") {
			// 삽입 연산
			maxHeap.push(Number(num)); // 최대 힙에 숫자 추가
			minHeap.push(-Number(num)); // 최소 힙에는 음수로 추가 (최대 힙을 최소 힙처럼 사용)
			count++; // 원소 개수 증가
		} else if (count > 0) {
			// 삭제 연산 (큐가 비어있지 않을 때만)
			if (num === "1") {
				maxHeap.pop(); // 최댓값 삭제
			} else {
				minHeap.pop(); // 최솟값 삭제 (실제로는 최대 힙에서 최대값 삭제)
			}
			count--; // 원소 개수 감소

			// 큐가 비어있으면 두 힙을 초기화 (동기화 유지)
			if (count === 0) {
				maxHeap.heap = [];
				minHeap.heap = [];
			}
		}
	}

	// 두 힙 동기화 (불일치하는 원소 제거)
	while (count > 0 && -minHeap.peek() > maxHeap.peek()) {
		maxHeap.pop();
		minHeap.pop();
		count--;
	}

	// 결과 반환
	if (count === 0) return [0, 0]; // 큐가 비어있으면 [0, 0] 반환
	return [maxHeap.peek(), -minHeap.peek()]; // [최댓값, 최솟값] 반환
}



// 2차 시도 (실패) - 힙 알고리즘
// 주어진 연산들을 처리하는 메인 함수
function solution(operations) {
	const maxHeap = new MaxHeap(); // 최대 힙
	const minHeap = new MaxHeap(); // 최소 힙 (음수로 저장)
	let count = 0; // 현재 큐에 있는 원소 수

	for (let op of operations) {
		const [command, num] = op.split(" ");
		if (command === "I") {
			// 삽입 연산
			maxHeap.push(Number(num));
			minHeap.push(-Number(num)); // 최소값을 찾기 위해 음수로 저장
			count++;
		} else if (count > 0) {
			// 삭제 연산 (큐가 비어있지 않을 때만)
			if (num === "1") {
				maxHeap.pop(); // 최댓값 삭제
				count--;
			} else {
				minHeap.pop(); // 최솟값 삭제
				count--;
			}
		}
	}

	// 결과 반환
	if (count === 0) return [0, 0];
	const max = maxHeap.pop();
	const min = -minHeap.pop();
	return [max, min];
}



// 1차 시도 (성공) - 배열
function solution(operations) {
	let queue = []; // 모든 원소를 저장할 배열

	for (let op of operations) {
		const [command, num] = op.split(" ");
		if (command === "I") {
			// 삽입 연산
			queue.push(Number(num));
			queue.sort((a, b) => a - b); // 삽입 후 항상 정렬 상태 유지
		} else if (queue.length > 0) {
			// 삭제 연산 (큐가 비어있지 않을 때만)
			if (num === "1") queue.pop(); // 최댓값(마지막 원소) 삭제
			else queue.shift(); // 최솟값(첫 번째 원소) 삭제
		}
	}

	// 결과 반환
	return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}

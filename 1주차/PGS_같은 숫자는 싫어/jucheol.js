// 3차 시도 (성공) - 자체 배열 스택 사용
function solution(arr) {
	const stack = new Stack_Array();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != arr[i + 1]) {
			stack.push(arr[i]);
		}
	}
	return stack.toArray();
}



// 3차 시도 (실패: 시간 초과) - 자체 연결리스트 스택 사용
function solution(arr) {
	const stack = new Stack_LinkedList();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] != arr[i + 1]) {
			stack.push(arr[i]);
		}
	}
	return stack.toArray();
}



// 2차 시도 (성공) - 내장 스택 사용
function solution(arr) {
	const stack = [];
	for (let i = 0; i < arr.length; i++) {
		if (stack.length === 0 || arr[i] !== stack[stack.length - 1]) {
			stack.push(arr[i]);
		}
	}
	return stack;
}



// 1차 시도 (성공) - 스택/큐 미사용
function solution(arr) {
	return arr.filter((value, index) => value != arr[index + 1]);
}



// 배열 스택
class Stack_Array {
	constructor() {
		this._arr = [];
	}
	push(item) {
		this._arr.push(item);
	}
	pop() {
		return this._arr.pop();
	}
	peek() {
		return this._arr[this._arr.length - 1];
	}
	toArray() {
		return [...this._arr];
	}
	getSize() {
		return this._arr.length;
	}
	isEmpty() {
		return this.getSize() === 0;
	}
}

// 배열 큐
class Queue_Array {
	constructor() {
		this._arr = [];
	}
	enqueue(item) {
		this._arr.push(item);
	}
	dequeue() {
		return this._arr.shift();
	}
	peek() {
		return this._arr[0];
	}
	getSize() {
		return this._arr.length;
	}
	isEmpty() {
		return this.getSize() === 0;
	}
}

// 연결리스트 노드
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// 연결리스트 스택
class Stack_LinkedList {
	constructor() {
		this.top = null;
		this.size = 0;
	}
	push(data) {
		const newNode = new Node(data);
		newNode.next = this.top;
		this.top = newNode;
		this.size++;
	}
	pop() {
		if (this.isEmpty()) {
			return;
		} else {
			this.top = this.top.next;
			this.size--;
		}
	}
	peek() {
		if (this.isEmpty()) {
			return;
		} else {
			return this.top.data;
		}
	}
	toArray() {
		const result = [];
		let current = this.top;
		while (current) {
			result.unshift(current.data);
			current = current.next;
		}
		return result;
	}
	getSize() {
		return this.size;
	}
	isEmpty() {
		return this.top === null;
	}
}

// 연결리스트 큐
class Queue_LinkedList {
	constructor() {
		this.head = 0;
		this.tail = 0;
		this.size = 0;
	}
	enqueue(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.size++;
	}

	dequeue() {
		if (!this.head) {
			return null;
		}

		const tempNode = this.head;
		this.head = this.head.next;

		if (!this.head) {
			this.tail = null;
		}

		this.size--;
		return tempNode.data;
	}
	peek() {
		if (!this.head) {
			return null;
		}
		return this.head.data;
	}
	getSize() {
		return this.size;
	}
	isEmpty() {
		return this.size === 0;
	}
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return this;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return this;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    let current = this.head;
    if (index > this.length - 1 || index < 0) {
      return null;
    }
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(value, index) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return this;
    }
    return 'Sorry, index not found.';
  }

  insert(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);

    let previousNode = this.get(index - 1);
    previousNode.next = node.next;
    this.length--;
    return this;
  }

  reverse() {
    let node = this.head;
    let prev = null;
    let next;

    while (node !== null) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

const list = new SinglyLinkedList();
console.log(list);

list.push(10);
list.push(42);

console.log(list);

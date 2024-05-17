class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  pop() {
    // Si la stack est vide
    if (!this.first) return null;
    // Si la stack a un seul noeud
    if (this.first === this.last) {
      this.last = null;
    }
    // Si la stack a plus d'un noeud
    console.log('Popped ' + this.first.value + ' !');
    this.first = this.first.next;
    this.size--;
    return this;
  }
}

const stack = new Stack();
console.log(stack.push('1'));
console.log(stack.push('2'));
console.log(stack.push('3'));
// console.log(stack.pop());
// console.log(stack.pop());

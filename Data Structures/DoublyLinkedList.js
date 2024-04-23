class Node {
  constructor(value) {
    this.nextNode = null;
    this.prevNode = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insert(value, index) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let counter = 0;
      let currentNode = this.head;
      while (counter < index && currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        counter++;
      }
      newNode.prevNode = currentNode.prevNode;
      newNode.nextNode = currentNode;
      
      if (currentNode.prevNode !== null) {
        currentNode.prevNode.nextNode = newNode;
      } else {
        this.head = newNode;
      }
      currentNode.prevNode = newNode;
    }
    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      newNode.prevNode = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prevNode = newNode;
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(`${currentNode.value} `);
      currentNode = currentNode.nextNode;
    }
  }
}

const list = new DoublyLinkedList();
list.prepend(0);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

list.insert(2.5, 3);

console.log(list.getSize());
console.log(list.isEmpty());

list.print();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      removeNode = previous.next;
      previous.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let previous = this.head;
      for (let i = 0; i < index - 1; i++) {
        previous = previous.next;
      }
      node.next = previous.next;
      previous.next = node;
      this.size++;
    }
  }
  // linear time complexity  O(n)
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = newNode;
    }
    this.size++;
  }

  // constant time complexity  O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value !== value) {
        previous = previous.next;
      }
      if (previous.next) {
        const removeNode = previous.next;
        previous.next = removeNode.next;
        this.size -- 
        return value                                  
      }
      return null                          
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let currentNode = this.head;
      let listValues = "";
      while (currentNode) {
        listValues += `${currentNode.value} `;
        currentNode = currentNode.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty()); // true
console.log(list.getSize());

list.print();

// list.prepend(10);

// list.prepend(20);
// list.prepend(30);
// list.print();

// list.append(40);

// list.print();

list.insert(10, 0);
list.print();

list.insert(20, 0);
list.print();

list.insert(30, 1);
list.print();

list.insert(40, 2);
list.print();
list.getSize();

// console.log(list.removeFrom(10)); // null
// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeFrom(1));
list.print();

list.removeValue(40);
list.print();

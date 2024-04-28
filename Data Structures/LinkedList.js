class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  removeFromFront() {
    if (this.isEmpty()){
      return null
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size --;
    return value;
  }

  removeFromEnd(){
    if(this.isEmpty()){
      return null;
    }
    const value = this.tail.value;
    if(this.size === 1){
      this.head = null;
      this.tail = null;

    }else {
      let prev = this.head;
      while (prev.next !== this.tail){
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size --;
    return value;
  
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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  search(value){
    let currentNode = this.head;
    let index = 0;
    while (currentNode){
      if(currentNode.value === value){
        return index;
      }
      index ++;
      currentNode= currentNode.next;
    }
    return -1;
  }

  // constant time complexity  O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
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

  reverse(){
    let prev = null;
    let current = this.head;

    while(current){
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next
    }
    this.head = prev;
  }
}

const list = new LinkedList();
console.log(list.isEmpty()); // true
console.log(list.getSize());

list.print();

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
console.log(list.size)
list.removeFromFront()
list.print()
console.log(list.size)

list.removeFromEnd()
list.removeFromEnd()
list.removeFromFront()

list.print()
// console.log(list.head.value)
console.log(list.tail.value)

// // list.prepend(10);

// // list.prepend(20);
// // list.prepend(30);
// // list.print();

// // list.append(40);

// // list.print();

// list.insert(10, 0);
// list.print();

// list.insert(20, 0);
// list.print();

// list.insert(30, 1);
// list.print();

// list.insert(40, 2);
// list.print();
// list.getSize();

// // console.log(list.removeFrom(10)); // null
// // console.log(list.removeFrom(0));
// // list.print();

// // console.log(list.removeFrom(1));
// list.print();

// // list.removeValue(40);
// // list.removeValue(30);
// // list.removeValue(20);
// // list.removeValue(10);
// list.print();

// console.log(list.search(30));

// list.reverse()
// list.print()

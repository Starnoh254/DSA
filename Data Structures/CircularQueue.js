class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity; // wrap around to the start of the queue
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedElement = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return removedElement;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let string = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        string += `${this.items[i]} `;
      }
      string += this.items[i];
      console.log(string);
    }
  }
}

const circularQueue = new CircularQueue(5)
console.log(circularQueue.isEmpty())

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.enqueue(50)

console.log(circularQueue.isFull()); 
circularQueue.print()

console.log(circularQueue.dequeue())

console.log(circularQueue.peek())

circularQueue.print()
circularQueue.enqueue(60)
circularQueue.print()
const LinkedList = require('./LinkedList')
class LinkedListQueue{
    constructor(){
        this.list = new LinkedList()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        return this.list.removeFromFront()
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.getSize()
    }
    peek(){
        return this.list.head.value
    }
    print(){
        this.list.print()
    }
}

const newLinkedListQueue = new LinkedListQueue()

console.log(newLinkedListQueue.isEmpty())

newLinkedListQueue.enqueue(1)
newLinkedListQueue.enqueue(2)
newLinkedListQueue.enqueue(3)
newLinkedListQueue.enqueue(4)
newLinkedListQueue.enqueue(5)

console.log(newLinkedListQueue.getSize())

console.log(newLinkedListQueue.dequeue())
newLinkedListQueue.print()
console.log(newLinkedListQueue.peek())

console.log(newLinkedListQueue.isEmpty())

console.log(newLinkedListQueue.getSize())
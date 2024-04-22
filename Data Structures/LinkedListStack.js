const LinkedList = require("./LinkedList")

class LinkedListStack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }
}


const newStack = new LinkedListStack()
newStack.push(12)
newStack.push(13)
newStack.push(14)
console.log(newStack.peek())
console.log(newStack.isEmpty());
console.log(newStack.getSize())
newStack.print()
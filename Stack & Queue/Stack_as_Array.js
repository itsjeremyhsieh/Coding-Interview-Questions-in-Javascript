class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array[this.array.length-1]
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        this.array.pop();
        return this
    }

}

const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.pop()
console.log(myStack)

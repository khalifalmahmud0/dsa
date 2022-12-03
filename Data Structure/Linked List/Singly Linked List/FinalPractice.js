class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    newNode(value) {
        return {
            value: value,
            next: null,
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    push(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        if (this.isEmpty()) {
            return `No Node Exist For POP`;
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let currentHead = this.head;
            while (currentHead) {
                if (currentHead.next === this.tail) {
                    let temporaryTail = currentHead;
                    temporaryTail.next = null;
                    this.tail = temporaryTail;
                    break;
                } else {
                    currentHead = currentHead.next;
                }
            }
        }
        this.length--;
    }
    shift() {
        this.head = this.head.next;
        this.length--;
    }
    unShift(value) { 
        let node = this.newNode(value);
        if (this.isEmpty()) { 
            this.head = null;
            this.tail = null;
        }
        else { 
            let oldHead = this.head;
            let newhead = node;
            this.head = newhead;
            this.head.next = oldHead;
        }
        this.length++;
    }
    show() {
        let arr = [];
        let currentHead = this.head;
        while (currentHead) {
            arr.push(currentHead.value);
            currentHead = currentHead.next;
        }
        return arr;
    }
}

let list = new SinglyLinkedList;
list.push(1);
list.push(2);
list.push(3);
list.unShift(100);
console.log(list.show());
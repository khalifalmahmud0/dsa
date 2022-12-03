class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty() {
        return this.length === 0;
    }
    push(value) {
        let node = {
            value: value,
            next: null
        }
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    pop() {
        if (this.isEmpty()) {
            return `No Node Exist For Pop`;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            let newHead = this.head;
            while (newHead) {
                if (newHead.next == this.tail) {
                    let newTail = newHead;
                    this.tail = newTail;
                    this.tail.next = null;
                    this.length--;
                    break;
                }
                newHead = newHead.next;
            }
        }
    }

    shift() {
        this.head = this.head.next;
        this.length--;
    }

    unShift(value) {
        let node = {
            value: value,
            next: null
        }
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let currentHead = this.head;
            this.head = node;
            this.head.next = currentHead;
        }
        this.length++;
    }

    showList() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
let list = new singlyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.pop();
// list.pop();
// list.pop();
list.shift();
list.unShift(50);
console.log(list.showList()); 

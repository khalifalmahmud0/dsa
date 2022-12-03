class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    createNewNode(value) {
        return {
            value: value,
            next: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    push(value) {
        let node = this.createNewNode(value);
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
            return 'No Node Exist For POP'
        } else {
            let currentHead = this.head;
            while (currentHead) {
                if (currentHead.next == this.tail) {
                    this.tail = currentHead;
                    this.tail.next = null;
                    break;
                }
                currentHead = currentHead.next;
            }
            this.length--;
        }
    }
    shift() {
        this.head = this.head.next;
        this.length--;
    }
    unShift(value) {
        let node = this.createNewNode(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let existingHead = this.head;
            let newHead = node;
            this.head = newHead;
            this.head.next = existingHead;
        }
        this.length++;
    }
    show() {
        let arr = [];
        let currenthead = this.head;
        while (currenthead) {
            arr.push(currenthead.value);
            currenthead = currenthead.next;
        }
        return arr;
    }
}
let list = new singleLinkedList;
list.push(01);
list.push(02);
list.push(03);
list.push(04);
list.push(04);
// list.pop();
// list.pop();
// list.pop();

list.unShift(05);
list.unShift(07);
list.shift();
console.log(list.show());
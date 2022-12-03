class SinglyLinkedList {
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
            return 'No Node Exists For POP';
        }
        else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temporaryHead = this.head;
            while (temporaryHead) {
                if (temporaryHead.next === this.tail) {
                    let temporaryTail = temporaryHead;
                    temporaryTail.next = null;
                    this.tail = temporaryTail;
                    break;
                }
                else {
                    temporaryHead = temporaryHead.next;
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
        let node = {
            value: value,
            next: null
        }
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            let newHead = node;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
    }
    show() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
}
let list = new SinglyLinkedList;
list.push('First Node');
list.push('Secound Node');
list.push('Third Node');
list.push('Forth Node Node');
list.push('Fifth Node');
// list.pop();
// list.pop();
// list.shift();
list.unShift('Zero Node');
// list.show();
console.log(list.show());

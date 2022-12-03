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
        let newNode = {
            value: value,
            next: null
        }
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}
let list = new singlyLinkedList();

list.push(5);
list.push(10);
list.push(15);
list.push(20);
console.log('list', list);


// console.log(JSON.stringify(list, null, 2));
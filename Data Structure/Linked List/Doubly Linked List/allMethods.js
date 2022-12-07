class doublyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    singleNode(value) {
        return {
            prev: null,
            value: value,
            next: null
        }
    }
    /**
     * ::::::::::::::::::::::::: CREATE :::::::::::::::::::::::::
     * 
     * insertLast -
     * insertNodeAnywhereUsingIndex -
     * insertFirst -
     * 
     */
    // insertLast
    insertLast(value) {
        let node = this.singleNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.singleNode(value);
        let indexCurrentValue = this.getAnyNodeValueUsingIndex(index);
        let prevValue = indexCurrentValue.prev;
        let nextValue = indexCurrentValue.next;
        prevValue.next = node;
        node.prev = prevValue;
        node.next = indexCurrentValue;
        this.length++;
    }
    // insertFirst
    insertFirst(value) {
        let node = this.singleNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            let previousHead = this.head;
            this.head = node;
            node.next = previousHead;
            previousHead.prev = this.head;
        }
        this.length++;
    }
    /**
     * ::::::::::::::::::::::::: READ :::::::::::::::::::::::::
     * 
     * getLastData -
     * getAnyNodeValueUsingIndex -
     * getFirstData -
     * showAllData -
     * 
     */
    // getLastData
    getLastData() {
        return this.tail;
    }
    // getAnyNodeValueUsingIndex
    getAnyNodeValueUsingIndex(index) {
        let currentHead = this.head;
        let currentIndex = 0;
        while (currentHead) {
            if (currentIndex === index) {
                return currentHead;
            }
            currentHead = currentHead.next;
            currentIndex = currentIndex + 1;
        }
    }
    // getFirstData
    getFirstData() {
        return this.head;
    }
    // showAllData
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        while (currentHead) {
            arr.push(currentHead.value);
            currentHead = currentHead.next;
        }
        return arr;
    }
    /**
     * ::::::::::::::::::::::::: UPDATE :::::::::::::::::::::::::
     * 
     * updateTail
     * updateAnyNodeValueUsingIndex
     * updateHead
     * 
     */
    /**
     * ::::::::::::::::::::::::: DELETE :::::::::::::::::::::::::
     * 
     * deleteLast -
     * removeAnyNodeValueUsingIndex
     * deleteFirst -
     * 
     */
    // deleteLast
    deleteLast() {
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    }
    // deleteFirst
    deleteFirst() {
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
    }
    /**
     * ::::::::::::::::::::::::: EXTRA :::::::::::::::::::::::::
     * 
     * isEmpty
     * clearAllNodes
     * swapTwoNodes
     * searchUsingNodeValue
     * 
     */
    // isEmpty
    isEmpty() {
        return this.length === 0;
    }
    // clearAllNodes
    clearAllNodes() {
        this.head = this.tail = null;
        this.length = 0;
    }
}
let list = new doublyLinkedList;
for (i = 1; i <= 5; i++) {
    list.insertLast(i);
}
list.insertNodeAnywhereUsingIndex(4, 44);
list.insertNodeAnywhereUsingIndex(2, 22);
list.insertNodeAnywhereUsingIndex(1, 11);
// console.log(list.getAnyNodeValueUsingIndex(49));
console.log(list);
console.log(list.showAllData());

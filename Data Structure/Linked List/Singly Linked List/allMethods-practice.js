class singlyLinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    singleNode(value) {
        return {
            value: value,
            next: null
        }
    }
    /**
     * ::::::::::::::::::::::::: CREATE :::::::::::::::::::::::::
     * 
     * insertLast -
     * insertNodeAnywhereUsingIndex
     * insertFirst -
     * 
     */
    // insertLast
    insertLast(value) {
        let node = this.singleNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.length++;
            return `${value} inserted which is the First and Last value Of the list`;
        } else {
            this.tail = this.tail.next = node;
            this.length++;
            return `${value} inserted in the Last Position of the list`;
        }
    }
    // insertNodeAnywhereUsingIndex
    // insertFirst
    insertFirst(value) {
        let node = this.singleNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.length++;
            return `${value} inserted which is the First and Last value Of the list`;
        } else {
            let node = this.singleNode(value);
            let currenthead = this.head;
            this.head = node;
            this.head.next = currenthead;
            this.length++;
            return `${value} inserted in the First Position of the list`;
        }
    }

    /**
     * ::::::::::::::::::::::::: READ :::::::::::::::::::::::::
     * 
     * getLastData -
     * getAnyNodeValueUsingIndex
     * getFirstData -
     * showAllData -
     * 
     */
    // getLastData
    getLastData() {
        return this.tail.value;
    }
    // getAnyNodeValueUsingIndex
    // getFirstData
    getFirstData() {
        return this.head.value;
    }
    // showAllData
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        while (currentHead) {
            arr.push(currentHead.value);
            currentHead = currentHead.next;
        }
        if (!this.isEmpty()) {
            return arr;
        } else {
            return `List Empty Now`;
        }
    }

    /**
     * ::::::::::::::::::::::::: UPDATE :::::::::::::::::::::::::
     * 
     * updateLastNode -
     * updateAnyNodeValueUsingIndex
     * updateFirstNode -
     * 
     */
    // updateLastNode
    updateLastNode(value) {
        let currentLastNode = this.tail.value;
        this.tail.value = value;
        return `Last value was ${currentLastNode} and now last value is ${value}`;
    }

    // updateFirstNode
    updateFirstNode(value) {
        let currentFirstNode = this.head.value;
        this.head.value = value;
        return `First value was ${currentFirstNode} and now First value is ${value}`;
    }

    /**
     * ::::::::::::::::::::::::: DELETE :::::::::::::::::::::::::
     * 
     * deleteLast
     * removeAnyNodeValueUsingIndex
     * deleteFirst -
     * 
     */
    deleteFirst() {
        if (this.head) {
            let previousHead = this.head.value;
            this.head = this.head.next;
            this.length--;
            return `Value ${previousHead} is Removed`;
        } else {
            return `No Node Exist For Remove`;
        }
    }
    /**
     * ::::::::::::::::::::::::: EXTRA :::::::::::::::::::::::::
     * 
     * isEmpty -
     * clearAllNodes -
     * totalNodes -
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
    // totalNodes
    totalNodes() {
        return this.length;
    }


}

let list = new singlyLinkedList;
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);
list.insertLast(6);
list.insertLast(7);
list.insertLast(8);
// list.updateFirstNode(98);
// list.insertFirst(999);
// list.updateFirstNode('Allah is almighty');
// list.updateLastNode('Finish');
// list.deleteFirst();
// console.log(list.deleteFirst())
// console.log(list.deleteFirst())
// console.log(list.deleteFirst())
// console.log(list.deleteFirst())
console.log(list.showAllData());

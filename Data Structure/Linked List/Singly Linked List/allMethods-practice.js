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
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.singleNode(value);
        let indexPreviousValue = this.getAnyNodeValueUsingIndex(index - 1);
        let indexValue = this.getAnyNodeValueUsingIndex(index);
        let indexNextValue = this.getAnyNodeValueUsingIndex(index + 1);
        console.log(indexPreviousValue, indexValue, indexNextValue);
        if (index === 0) {
            this.head = node;
            this.head.next = indexValue;
        } else if (index >= this.length) {
            this.tail = this.tail.next = node;
        } else {
            let newNode = indexPreviousValue.next = node;
            newNode.next = indexValue;
        }
        // console.log(`${indexValue.value} removed`);
        this.length++;
    }
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
     * getAnyNodeValueUsingIndex -
     * getFirstData -
     * showAllData -
     * 
     */
    // getLastData
    getLastData() {
        console.log(this.tail.value);
    }
    // getAnyNodeValueUsingIndex
    getAnyNodeValueUsingIndex(index) {
        let currentHead = this.head;
        let indexCount = 0;
        while (currentHead) {
            if (indexCount === index) {
                // console.log(currentHead.value);
                return currentHead;
            }
            currentHead = currentHead.next;
            indexCount++;
        }
    }
    // getFirstData
    getFirstData() {
        // return this.head.value;
        console.log(this.head.value);
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
     * updateAnyNodeValueUsingIndex - 
     * updateFirstNode -
     * 
     */
    // updateLastNode
    updateLastNode(value) {
        let currentLastNode = this.tail.value;
        this.tail.value = value;
        return `Last value was ${currentLastNode} and now last value is ${value}`;
    }
    // updateAnyNodeValueUsingIndex
    updateAnyNodeValueUsingIndex(index, value) {
        if (index > this.length) {
            return `No Index Found For Update`;
        } else {
            let currentHead = this.head;
            let indexCount = 0;
            while (currentHead) {
                if (indexCount === index) {
                    let temporaryHead = currentHead.value;
                    currentHead.value = value;
                    return `at index ${index} value was ${temporaryHead} ,
                now value is ${value}`;
                }

                currentHead = currentHead.next;
                indexCount++;

            }
        }
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
     * deleteLast -
     * removeAnyNodeValueUsingIndex -
     * deleteFirst -
     * 
     */
    //  deleteLast
    deleteLast() {
        if (this.isEmpty()) {
            return `No Node Exist For POP`;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
            this.length = 0;
        }
        else {
            let currentHead = this.head;
            while (currentHead) {
                if (currentHead.next === this.tail) {
                    this.tail = currentHead;
                    this.tail.next = null;
                    this.length--;
                    break;
                }
                currentHead = currentHead.next;
            }
        }
    }
    // removeAnyNodeValueUsingIndex
    removeAnyNodeValueUsingIndex(index) {
        let indexPreviousValue = this.getAnyNodeValueUsingIndex(index - 1);
        let indexValue = this.getAnyNodeValueUsingIndex(index);
        let indexNextValue = this.getAnyNodeValueUsingIndex(index + 1);
        if (!indexPreviousValue) {
            this.head = this.head.next;
        } else if (!indexNextValue) {
            indexPreviousValue.next = null;
            this.tail = indexPreviousValue;
        }
        else {
            indexPreviousValue.next = indexNextValue;
        }
        console.log(`${indexValue.value} removed`);
        this.length--;
    }
    // deleteFirst
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
     * searchUsingNodeValue -
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
    // swapTwoNodes
    swapTwoNodes(index1, index2 = undefined) {
        if (!index2) {
            index2 = index1 * 2;
        }
        let index1value = this.getAnyNodeValueUsingIndex(index1 - 1);
        let temporaryIndex1 = index1value.value;
        let index2value = this.getAnyNodeValueUsingIndex(index2 - 1);
        let temporaryIndex2 = index2value.value;
        index1value.value = temporaryIndex2;
        index2value.value = temporaryIndex1;


    }
    // searchUsingNodeValue
    searchUsingNodeValue(value) {
        let currentHead = this.head;
        let itemCount = 0;
        while (currentHead) {
            if (currentHead.value === value) {
                itemCount++;

            }
            currentHead = currentHead.next;
        }
        return `In this Node ${value} exists ${itemCount} times`;
    }


}

let list = new singlyLinkedList;

for (i = 1; i <= 5; i++) {
    list.insertLast(i);
}

list.swapTwoNodes(2);
console.log(list.showAllData());
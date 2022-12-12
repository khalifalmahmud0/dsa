/**
=====================================================================
==========Singly Linked List=========================================
=====================================================================
 */
class singly {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    totalNode() {
        return this.length;
    }
    newNode(value) {
        return {
            value: value,
            next: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    insertLast(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        }
        else if (this.length <= index) {
            this.tail.next = node;
            this.tail = node;
        }
        else {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexedNode = this.getAnyNodeValueUsingIndex(index);
            indexPrevNode.next = node;
            node.next = indexedNode;
        }
        this.length++;
    }
    insertFirst(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            let chead = this.head;
            this.head = node;
            node.next = chead;
        }
        this.length++;
    }
    clearAllNodes() {
        this.head = this.tail = null;
        this.length = 0;
    }
    getLastData() {
        return this.tail;
    }
    getAnyNodeValueUsingIndex(index) {
        if (!this.isEmpty() && index <= this.length) {
            let currentHead = this.head;
            for (let i = 0; i < this.length; i++) {
                if (i === index) {
                    return currentHead;
                }
                if (currentHead.next) {
                    currentHead = currentHead.next;
                }
            }
        }
    }
    getFirstData() {
        return this.head;
    }
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        if (currentHead) {
            do {
                arr.push(currentHead.value);
                currentHead = currentHead.next;
            }
            while (currentHead != this.tail.next);
        }
        return arr;
    }
    updateTail(value) {
        if (!this.isEmpty()) {
            this.tail.value = value;
        }
    }
    updateAnyNodeValueUsingIndex(index, value) {
        if (!this.isEmpty() && index < this.length) {
            let indexNodeValue = this.getAnyNodeValueUsingIndex(index);
            indexNodeValue.value = value;
        }
    }
    updateHead(value) {
        if (!this.isEmpty()) {
            this.head.value = value;
        }
    }
    searchUsingNodeValue(value) {
        if (!this.isEmpty()) {
            let currentHead = this.head;
            let itemCount = 0;
            for (let i = 0; i < this.length; i++) {
                if (currentHead.value === value) {
                    itemCount++;
                }
                if (currentHead.next) {
                    currentHead = currentHead.next;
                }
            }
            return itemCount;
        }
    }
    swapTwoNodes(index1, index2) {
        if (!this.isEmpty() && index1 <= this.length && index2 <= this.length) {
            let index1value = this.getAnyNodeValueUsingIndex(index1);
            let index2value = this.getAnyNodeValueUsingIndex(index2);
            [index1value.value, index2value.value] = [index2value.value, index1value.value];
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            let currentHead = this.head;
            for (let i = 0; i < this.length; i++) {
                if (currentHead.next === this.tail) {
                    this.tail = currentHead;
                    this.tail.next = null;
                    break;
                }
                currentHead = currentHead.next;
            }
        }
        this.length--;
    }
    deleteAnyNodeValueUsingIndex(index) {
        if (!this.isEmpty() && index <= this.length) {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexNextNode = this.getAnyNodeValueUsingIndex(index + 1);
            [indexPrevNode.next] = [indexNextNode];
            this.length--;
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
        }
        this.length--;
    }
}
/**
=====================================================================
==========Doubly Linked List=========================================
=====================================================================
 */
class doubly {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    totalNode() {
        return this.length;
    }
    newNode(value) {
        return {
            prev: null,
            value: value,
            next: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    insertLast(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            let currentTail = this.tail;
            this.tail.next = node;
            this.tail = node;
            node.prev = currentTail;
        }
        this.length++;
    }
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        }
        else if (this.length <= index) {
            let currentTail = this.tail;
            this.tail.next = node;
            this.tail = node;
            node.prev = currentTail;
        }
        else {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexedNode = this.getAnyNodeValueUsingIndex(index);
            indexPrevNode.next = node;
            node.prev = indexPrevNode;
            node.next = indexedNode;
            indexedNode.prev = node;
        }
        this.length++;
    }
    insertFirst(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            let cHead = this.head;
            cHead.prev = node;
            this.head = node;
            node.next = cHead;
        }
        this.length++;
    }
    clearAllNodes() {
        this.head = this.tail = null;
        this.length = 0;
    }
    getLastData() {
        return this.tail;
    }
    getAnyNodeValueUsingIndex(index) {
        let currentHead = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentHead;
            }
            currentHead = currentHead.next;
        }
    }
    getFirstData() {
        return this.head;
    }
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        if (currentHead) {
            do {
                arr.push(currentHead.value);
                currentHead = currentHead.next;
            }
            while (currentHead != this.tail.next);
        }
        return arr;
    }
    updateTail(value) {
        if (!this.isEmpty()) {
            this.tail.value = value;
        }
    }
    updateAnyNodeValueUsingIndex(index, value) {
        if (!this.isEmpty() && index < this.length) {
            let indexNodeValue = this.getAnyNodeValueUsingIndex(index);
            indexNodeValue.value = value;
        }
    }
    updateHead(value) {
        if (!this.isEmpty()) {
            this.head.value = value;
        }
    }
    searchUsingNodeValue(value) {
        let currentHead = this.head;
        let itemCount = 0;
        for (let i = 0; i < this.length; i++) {
            if (currentHead.value === value) {
                itemCount++;
            }
            if (currentHead.next) {
                currentHead = currentHead.next;
            }
        }
        return itemCount;
    }
    swapTwoNodes(index1, index2) {
        if (!this.isEmpty() && index1 <= this.length && index2 <= this.length) {
            let index1value = this.getAnyNodeValueUsingIndex(index1);
            let index2value = this.getAnyNodeValueUsingIndex(index2);
            [index1value.value, index2value.value] = [index2value.value, index1value.value];
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
    }
    deleteAnyNodeValueUsingIndex(index) {
        if (!this.isEmpty() && index < this.length) {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexNextNode = this.getAnyNodeValueUsingIndex(index + 1);
            [indexPrevNode.next, indexNextNode.prev] = [indexNextNode, indexPrevNode];
            this.length--;
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
    }
}
/**
=====================================================================
==========Singly Circular Linked List================================
=====================================================================
 */
class singlyCircular {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    totalNode() {
        return this.length;
    }
    newNode(value) {
        return {
            value: value,
            next: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    insertLast(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.tail.next = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        this.length++;
    }
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.tail.next = this.head;
        }
        else if (this.length <= index) {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        else {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexedNode = this.getAnyNodeValueUsingIndex(index);
            indexPrevNode.next = node;
            node.next = indexedNode;
        }
        this.length++;
    }
    insertFirst(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.tail.next = this.head;
        } else {
            let chead = this.head;
            this.head = node;
            node.next = chead;
            this.tail.next = node;
        }
        this.length++;
    }
    clearAllNodes() {
        this.head = this.tail = null;
        this.length = 0;
    }
    getLastData() {
        return this.tail;
    }
    getAnyNodeValueUsingIndex(index) {
        let currentHead = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentHead;
            }
            currentHead = currentHead.next;
        }
    }
    getFirstData() {
        return this.head;
    }
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        if (currentHead) {
            do {
                arr.push(currentHead.value);
                currentHead = currentHead.next;
            }
            while (currentHead != this.tail.next);
        }
        return arr;
    }
    updateTail(value) {
        if (!this.isEmpty()) {
            this.tail.value = value;
        }
    }
    updateAnyNodeValueUsingIndex(index, value) {
        if (!this.isEmpty() && index < this.length) {
            let indexNodeValue = this.getAnyNodeValueUsingIndex(index);
            indexNodeValue.value = value;
        }
    }
    updateHead(value) {
        if (!this.isEmpty()) {
            this.head.value = value;
        }
    }
    searchUsingNodeValue(value) {
        let currentHead = this.head;
        let itemCount = 0;
        for (let i = 0; i < this.length; i++) {
            if (currentHead.value === value) {
                itemCount++;
            }
            if (currentHead.next) {
                currentHead = currentHead.next;
            }
        }
        return itemCount;
    }
    swapTwoNodes(index1, index2) {
        if (!this.isEmpty() && index1 <= this.length && index2 <= this.length) {
            let index1value = this.getAnyNodeValueUsingIndex(index1);
            let index2value = this.getAnyNodeValueUsingIndex(index2);
            [index1value.value, index2value.value] = [index2value.value, index1value.value];
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            let currentHead = this.head;
            for (let i = 0; i < this.length; i++) {
                if (currentHead.next === this.tail) {
                    this.tail = currentHead;
                    this.tail.next = null;
                    break;
                }
                currentHead = currentHead.next;
            }
        }
        this.length--;
    }
    deleteAnyNodeValueUsingIndex(index) {
        if (!this.isEmpty() && index <= this.length) {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexNextNode = this.getAnyNodeValueUsingIndex(index + 1);
            [indexPrevNode.next] = [indexNextNode];
            this.length--;
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.length--;
    }
}
/**
=====================================================================
==========Doubly Circular Linked List================================
=====================================================================
 */
class doublyCircular {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }
    totalNode() {
        return this.length;
    }
    newNode(value) {
        return {
            prev: null,
            value: value,
            next: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    insertLast(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        } else {
            let ctail = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = ctail;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.length++;
    }
    insertNodeAnywhereUsingIndex(index, value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        else if (this.length <= index) {
            let ctail = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = ctail;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        else {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexedNode = this.getAnyNodeValueUsingIndex(index);
            indexPrevNode.next = node;
            node.prev = indexPrevNode;
            node.next = indexedNode;
            indexedNode.prev = node;
        }
        this.length++;
    }
    insertFirst(value) {
        let node = this.newNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        } else {
            let cHead = this.head;
            let cTail = this.tail;
            this.head = node;
            node.next = cHead;
            cHead.prev = node;
            node.prev = cTail;
            cTail.next = node;
        }
        this.length++;
    }
    clearAllNodes() {
        this.head = this.tail = null;
        this.length = 0;
    }
    getLastData() {
        return this.tail;
    }
    getAnyNodeValueUsingIndex(index) {
        let currentHead = this.head;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                return currentHead;
            }
            currentHead = currentHead.next;
        }
    }
    getFirstData() {
        return this.head;
    }
    showAllData() {
        let arr = [];
        let currentHead = this.head;
        if (currentHead) {
            do {
                arr.push(currentHead.value);
                currentHead = currentHead.next;
            }
            while (currentHead != this.tail.next);
        }
        return arr;
    }
    updateTail(value) {
        if (!this.isEmpty()) {
            this.tail.value = value;
        }
    }
    updateAnyNodeValueUsingIndex(index, value) {
        if (!this.isEmpty() && index < this.length) {
            let indexNodeValue = this.getAnyNodeValueUsingIndex(index);
            indexNodeValue.value = value;
        }
    }
    updateHead(value) {
        if (!this.isEmpty()) {
            this.head.value = value;
        }
    }
    searchUsingNodeValue(value) {
        let currentHead = this.head;
        let itemCount = 0;
        for (let i = 0; i < this.length; i++) {
            if (currentHead.value === value) {
                itemCount++;
            }
            if (currentHead.next) {
                currentHead = currentHead.next;
            }
        }
        return itemCount;
    }
    swapTwoNodes(index1, index2) {
        if (!this.isEmpty() && index1 <= this.length && index2 <= this.length) {
            let index1value = this.getAnyNodeValueUsingIndex(index1);
            let index2value = this.getAnyNodeValueUsingIndex(index2);
            [index1value.value, index2value.value] = [index2value.value, index1value.value];
        }
    }
    deleteLast() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        }
        this.length--;
    }
    deleteAnyNodeValueUsingIndex(index) {
        if (!this.isEmpty() && index < this.length) {
            let indexPrevNode = this.getAnyNodeValueUsingIndex(index - 1);
            let indexNextNode = this.getAnyNodeValueUsingIndex(index + 1);
            [indexPrevNode.next, indexNextNode.prev] = [indexNextNode, indexPrevNode];
            this.length--;
        }
    }
    deleteFirst() {
        if (this.isEmpty()) {
            return false;
        }
        else if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.length--;
    }
}
//  :::::::::::::::::::::::::::::Testing:::::::::::::::::::::::::::::::
let singlyLinkedList = new singly;
let doublyLinkedList = new doubly;
let singlyCircularLinkedList = new singlyCircular;
let doublyCircularLinkedList = new doublyCircular;
let classList = [
    ['Singly Linked List', singlyLinkedList],
    ['Doubly Linked List', doublyLinkedList],
    ['Singly Circular Linked List', singlyCircularLinkedList],
    ['Doubly Circular Linked List', doublyCircularLinkedList]
];
for (let singleClass in classList) {
    let linkedListname = classList[singleClass][0];
    let linkedListClass = classList[singleClass][1];
    for (j = 0; j <= 10; j++) {
        //
        console.log(`CURRENT VALUE IS ${j}`)
        console.log(`===== ${linkedListname} Console Start =====`);
        for (let i = 1; i <= j; i++) {
            linkedListClass.insertLast(i);
            linkedListClass.insertFirst(i * 10);
        }
        // linkedListClass.insertNodeAnywhereUsingIndex(5, 0);
        // linkedListClass.updateTail(`Last Node Updated`);
        // linkedListClass.updateAnyNodeValueUsingIndex(5, `Updated Using Index`);
        // linkedListClass.updateHead(`First Node Updated`);
        // linkedListClass.deleteLast();
        // linkedListClass.deleteFirst();
        // linkedListClass.deleteAnyNodeValueUsingIndex(4);
        // // linkedListClass.clearAllNodes();
        // console.log(`Is Empty?`, linkedListClass.isEmpty());
        // console.log(`Last Node`, linkedListClass.getLastData());
        // console.log(`Get Data Using Index`, linkedListClass.getAnyNodeValueUsingIndex(5));
        // console.log(`First Node`, linkedListClass.getFirstData());
        // console.log(`Search Using Node Value`, linkedListClass.searchUsingNodeValue(30));
        // console.log(`Swap Two Nodes`, linkedListClass.swapTwoNodes(3, 5));
        console.log(`Full List`, linkedListClass);
        console.log(`List Array`, linkedListClass.showAllData());
        console.log(linkedListClass.totalNode());
        console.log(`===== ${linkedListname} Console End ===== \n\n`);
        //
    }
}

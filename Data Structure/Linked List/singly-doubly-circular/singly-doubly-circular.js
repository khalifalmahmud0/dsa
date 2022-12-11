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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
let sList = new singly;
console.log(`===== Singly Linked List Console Start =====`);
/**
 * 
 * 
 */
// for (let i = 1; i <= 5; i++) {
//     sList.insertLast(i);
//     sList.insertFirst(i);
// }
sList.updateTail(50);
sList.updateAnyNodeValueUsingIndex(1, 40);
sList.updateHead(50);
sList.swapTwoNodes(0, 1);
sList.deleteLast();
sList.deleteFirst();
sList.deleteAnyNodeValueUsingIndex(2);
sList.insertNodeAnywhereUsingIndex(2, 330);
// sList.clearAllNodes();
console.log(`Full List`, sList);
console.log(`List Array`, sList.showAllData())
console.log(`Last Data`, sList.getLastData());
console.log(`get Any Node Value Using Index`, sList.getAnyNodeValueUsingIndex(2));
console.log(`First Data`, sList.getFirstData());
console.log(`Searching Using Node value`, sList.searchUsingNodeValue(50));
/**
 * 
 * 
 */
console.log(`===== Singly Linked List Console End ===== \n\n\n`);
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
let dList = new doubly;
console.log(`===== Doubly Linked List Console Start =====`);
/**
 * 
 * 
 */
// for (let i = 1; i <= 5; i++) {
//     dList.insertLast(i);
//     dList.insertFirst(i);
// }
dList.updateTail(50);
dList.updateAnyNodeValueUsingIndex(1, 40);
dList.updateHead(50);
dList.swapTwoNodes(0, 1);
dList.deleteLast();
dList.deleteFirst();
dList.deleteAnyNodeValueUsingIndex(2);
dList.insertNodeAnywhereUsingIndex(2, 1);
// dList.clearAllNodes();
console.log(`Full List`, dList);
console.log(`List Array`, dList.showAllData());
console.log(`Last Data`, dList.getLastData());
console.log(`get Any Node Value Using Index`, dList.getAnyNodeValueUsingIndex(2));
console.log(`First Data`, dList.getFirstData());
console.log(`Searching Using Node value`, sList.searchUsingNodeValue(50));
/**
 * 
 * 
 */
console.log(`===== Doubly Linked List Console End ===== \n\n\n`);
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
let scList = new singlyCircular;
console.log(`===== Singly Circular Linked List Console Start =====`);
/**
 * 
 * 
 */
// for (let i = 1; i <= 5; i++) {
//     scList.insertLast(i);
//     scList.insertFirst(i);
// }
scList.updateTail(50);
scList.updateAnyNodeValueUsingIndex(1, 40);
scList.updateHead(50);
scList.swapTwoNodes(0, 1);
scList.deleteLast();
scList.deleteFirst();
scList.deleteAnyNodeValueUsingIndex(2);
scList.insertNodeAnywhereUsingIndex(2, 1);
scList.insertNodeAnywhereUsingIndex(2, 2);
scList.insertNodeAnywhereUsingIndex(2, 3);
scList.insertNodeAnywhereUsingIndex(2, 4);
scList.insertNodeAnywhereUsingIndex(2, 5);
scList.insertNodeAnywhereUsingIndex(2, 6);
// scList.clearAllNodes();
console.log(`Full List`, scList);
console.log(`List Array`, scList.showAllData());
console.log(`Last Data`, scList.getLastData());
console.log(`get Any Node Value Using Index`, scList.getAnyNodeValueUsingIndex(4));
console.log(`First Data`, scList.getFirstData());
console.log(`Searching Using Node value`, sList.searchUsingNodeValue(50));
/**
 * 
 * 
 */
console.log(`===== Singly Circular Linked List Console End ===== \n\n\n`);
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
        if (!this.isEmpty()) {
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
let dcList = new doublyCircular;
console.log(`===== Doubly Circular Linked List Console Start =====`);
/**
 * 
 * 
 */
// for (let i = 1; i <= 5; i++) {
//     dcList.insertLast(i);
//     dcList.insertFirst(i);
// }
dcList.updateTail(50);
dcList.updateAnyNodeValueUsingIndex(1, 40);
dcList.updateHead(50);
dcList.swapTwoNodes(0, 1);
dcList.deleteLast();
dcList.deleteFirst();
dcList.deleteAnyNodeValueUsingIndex(2);
dcList.insertNodeAnywhereUsingIndex(2, 1);
dcList.insertNodeAnywhereUsingIndex(2, 2);
dcList.insertNodeAnywhereUsingIndex(2, 3);
dcList.insertNodeAnywhereUsingIndex(2, 4);
dcList.insertNodeAnywhereUsingIndex(2, 5);
dcList.insertNodeAnywhereUsingIndex(2, 6);
dcList.insertNodeAnywhereUsingIndex(2, 7);
// dcList.clearAllNodes();
console.log(`Full List`, dcList);
console.log(`List Array`, dcList.showAllData());
console.log(`Last Data`, dcList.getLastData());
console.log(`get Any Node Value Using Index`, dcList.getAnyNodeValueUsingIndex(7));
console.log(`First Data`, dcList.getFirstData());
console.log(`Searching Using Node value`, sList.searchUsingNodeValue(50));
/**
 * 
 * 
 */
console.log(`===== Doubly Circular Linked List Console End =====`);
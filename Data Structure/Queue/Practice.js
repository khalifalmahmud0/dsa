class bankLineQueue {
    constructor() {
        this.front = null;
        this.last = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(value) {
        let newPerson = {
            pname: value,
            nextperson: null
        }

        if (this.isEmpty()) {
            this.front = newPerson;
            this.last = newPerson;
        } else {
            this.last.nextperson = newPerson;
            this.last = newPerson;
        }
        this.length++;
    }
    dequeue() {
        this.front = this.front.nextperson;
        this.length--;
    }
    show() {
        let arr = [];
        let CurrentFront = this.front;
        while (CurrentFront) {
            arr.push(CurrentFront.pname);
            CurrentFront = CurrentFront.nextperson;
        }
        return arr;
    }
}

let lineList = new bankLineQueue;
lineList.enqueue('Abul');
lineList.enqueue('khalif');
lineList.dequeue();
console.log(lineList.show());
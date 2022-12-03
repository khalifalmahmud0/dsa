class bookStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    newBook(value) {
        return {
            bookname: value,
            nextBook: null
        }
    }
    isEmpty() {
        return this.length === 0;
    }
    stackInputORpush(value) {
        let newBook = this.newBook(value);

        if (this.isEmpty()) {
            this.top = newBook;
            this.bottom = newBook;
        } else {
            let PresentTop = this.top;
            let NewTop = newBook;
            this.top = NewTop;
            this.top.next = PresentTop;
        }
        this.length++;
    }
    stackDeleteORpop() {
        if (this.isEmpty()) {
            return `No Book Available On The Stack`;
        } else {
            this.top = this.top.next;
            this.length--;
        }
    }
    showList() {
        let arr = [];
        let currentTop = this.top;
        while (currentTop) {
            arr.push(currentTop.bookname);
            currentTop = currentTop.next;
        }
        return arr;
    }
}

let bookList = new bookStack;
bookList.stackInputORpush('Book 1');
bookList.stackInputORpush('Book 2');
bookList.stackInputORpush('Book 3');
bookList.stackInputORpush('Book 4');
bookList.stackInputORpush('Book 5');
bookList.stackDeleteORpop();
console.log(bookList.showList());
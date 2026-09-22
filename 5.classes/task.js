class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
            return
        }

        if (this._state == 0) {
            return;
        }

        if (value > 100) {
            this._state = 100;
            return;
        }

        this._state = value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state <= 30) {
            return;
        }

        this.books.push(book);
    }

    findBookBy(type, value) {
        return this.books.find((book) => book[type] == value) ?? null;
    }

    giveBookByName(bookName) {
        let found = this.books.findIndex((book) => book.name == bookName);
        if (found == -1) {
            return null;
        }

        let book = this.books[found];
        this.books.splice(found, 1);
        return book;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    setSubject(subjectName) {
        this.subject = subjectName;
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }

        if (!(subject in this.marks)) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!(subject in this.marks)) {
            return 0;
        }

        if (this.marks[subject].length == 0) {
            return 0;
        }

        return this.marks[subject].reduce((acc, current) => acc += current) / this.marks[subject].length;
    }

    getAverage() {
        let length = Object.keys(this.marks).length;

        if (length == 0) {
            return 0;
        }

        let sum = 0;

        for (const [key, value] of Object.entries(this.marks)) {
            sum += this.getAverageBySubject(key);
        }

        return sum / length;
    }
}

// function Student(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.marks = [];
// }
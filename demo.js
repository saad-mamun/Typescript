"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
class books {
    constructor(n, a, y) {
        this.name = n;
        this.author = a;
        this.year = y;
    }
    bookDetails() {
        console.log(`Book Name ${this.name}, Author: ${this.author}, Year: ${this.year} `);
    }
}
exports.books = books;
;

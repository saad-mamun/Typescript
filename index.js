"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./demo");
const book1 = new demo_1.books("The Alchemist", "Paulo", 1998);
const book2 = new demo_1.books(" Alchemist", "Liton", 2008);
console.log(book1.name);
console.log(book1.author);
console.log(book1.year);

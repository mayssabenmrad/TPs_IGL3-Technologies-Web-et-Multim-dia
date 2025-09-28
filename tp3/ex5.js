"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function greet(name, age) {
    if (age !== undefined) {
        console.log(`${name} : ${age} `);
    }
    else {
        console.log(`hola ${name}`);
    }
}
function power(base, exp = 2) {
    return Math.pow(base, exp);
}
function combine(a, b) {
    return a + b;
}
greet("Mayssa");
greet("alice", 18);
console.log(combine(5, 5));
console.log(combine("a", "b"));
//# sourceMappingURL=ex5.js.map
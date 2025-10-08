"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("hola");
    }
}
class Student extends Person {
    school;
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
class Rectangle extends Shape {
    longueur;
    largeur;
    constructor(longueur, largeur) {
        super();
        this.longueur = longueur;
        this.largeur = largeur;
    }
    area() {
        return this.largeur * this.longueur;
    }
}
class Car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} roule sur la route.`);
    }
}
//# sourceMappingURL=ex6.js.map
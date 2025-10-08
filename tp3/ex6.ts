class Person{
    constructor(public name:string, public age: number){}
    greet():void{
        console.log("hola");
    }
}

class Student extends Person{
    constructor(name: string, age: number, public school: string) {
    super(name, age);
  }
}
abstract class Shape {
  abstract area(): number;
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(public longueur: number, public largeur: number) {
    super();
  }

  area(): number {
    return this.largeur * this.longueur;
  }
}

interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  constructor(public brand: string) {}
  
  drive(): void {
    console.log(`${this.brand} roule sur la route.`);
  }
}




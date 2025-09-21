const a=1;
var b=2;
let c=3;

console.log("avant le bloc")
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

{
    const a=10;
    var b=20;
    let c=30;

    console.log("dans le bloc")
    console.log("a: ", a);
    console.log("b: ", b);
    console.log("c: ", c);


}

console.log("après le bloc")
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

//const et let: redéclaration interdite
//const: réassignation impossible ->TypeError



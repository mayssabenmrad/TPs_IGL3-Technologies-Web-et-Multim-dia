function add(a:number, b:number): number{
    return a+b;
}

function greet(name: string, age?: number): void{
    if(age !== undefined){
        console.log(`${name} : ${age} `);
    }
    else{
        console.log(`hola ${name}`);
    }
}

function power(base: number, exp: number = 2): number{
    return Math.pow(base,exp);
}

function combine(a: number, b: number):number;
function combine(a: string, b: string):string;
function combine(a: any, b: any):any{
    return a+b;
}

greet("Mayssa");
greet("alice", 18);
console.log(combine(5,5));
console.log(combine("a","b"));

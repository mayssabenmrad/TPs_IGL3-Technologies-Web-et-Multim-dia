//variable qui peut être string ou number
let id : number | string;

//intersection de deux types
type A={name: string};
type B={age: number};
type AB=A&B;

//alias
type Status = "pending" | "done" | "canceled";

//création d'une variable unknown
let unknownValue: unknown = "Hello world";
let longueur : number = (unknownValue as string).length;

console.log(longueur);


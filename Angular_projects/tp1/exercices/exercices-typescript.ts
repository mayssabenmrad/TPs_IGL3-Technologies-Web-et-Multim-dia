let nom: string = "Mayssa";
let age :number=20;
let is_student : boolean=true;

function add (a:number,b:number):number{
    return a+b;
}

interface etudiant{
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

class student implements etudiant{
    id: number;
    nom: string;
    prenom: string;
    age: number;
    constructor(id: number, nom: string, prenom: string, age: number) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }

  affichage():void{
    console.log(`Étudiant #${this.id} : ${this.prenom} ${this.nom}, ${this.age} ans`);
  }
}

const etu1 = new student(1, "Ben Mrad", "Mayssa", 20);
etu1.affichage();

function fonctionTableau<T>(tab: T[]): T[] {
  return tab;
}

const tabnombres=fonctionTableau<number>([1,2]);

function fonction_union_opt(union: string | number, opt?: string): void {
  if (opt) {
    console.log(`params : ${union} ${opt}`);
  } else {
    console.log(` params : ${union}`);
  }
}

enum Role {
  STUDENT = "Student",
  TEACHER = "Teacher",
}

function afficherNiveau(role: Role): void {
  console.log(`Niveau sélectionné : ${role}`);
}


class etudiant{
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }

    getMention(){
        if(this.note>=16)
        {console.log("Très Bien")}
        else if(this.note>=14)
        {console.log("Bien")}
        else if(this.note>=10)
        {console.log("Passable")}
        else
        {console.log("echec")}
    }
}
const etd1=new etudiant("Mayssa",20);
const etd2=new etudiant("Bob",15);
const etd3=new etudiant("Alice",12);
etd1.getMention();
etd2.getMention();
etd3.getMention();
 



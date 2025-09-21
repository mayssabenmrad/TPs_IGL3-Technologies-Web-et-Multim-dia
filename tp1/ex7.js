const notes = [12, 5, 17, 9, 20];
const moyenne=notes.reduce((acc,val)=>{acc+val},0)/notes.length;
console.log("Moyenne: ",moyenne);

const notestriées = [...notes].sort((a, b) => b - a);
console.log("Tri décroissant :", notestriées);

const notesfiltrées=notes.filter(note => note >= 10);
console.log("notes supérieures à 10: ", notesfiltrées);


/*syntaxe générale: array.reduce((accumulateur, valeurCourante) => {
  // traitement
  return nouvelleValeurAccumulateur;
}, valeurInitiale);
*/

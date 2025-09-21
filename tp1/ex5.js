const livre={
    titre:"Hunger Games", 
    auteur:"Suzanne Collins",
    année:2012,
      getInfo() {
    return `${this.titre} by ${this.auteur} was written in ${this.année}.`;
  }
    

};

console.log(livre.getInfo());


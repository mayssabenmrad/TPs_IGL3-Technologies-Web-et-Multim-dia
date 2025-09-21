const wait = ms => new Promise(res => setTimeout(res, ms));
async function telechargement() {
  console.log("Début");
  await wait(2000); 
  console.log("Fin");
}

//il faut async pour utiliser wait
telechargement();

var listedetaches=[]; //tableau des taches
console.log("Bienvenue"); //tester si le script fonctionne


function sauvegarderLocalStorage() {
    localStorage.setItem("todolist", JSON.stringify(listedetaches));
    //pour la transformer en chaine json 
    //strcuture du localstorage: key-value pairs avec la valeur une chaine json
}

function chargerLocalStorage() {
    const data = localStorage.getItem("todolist");
    if (data) {
        listedetaches = JSON.parse(data); // transformer la chaîne en tableau
        afficherliste();
    }
}

window.addEventListener("load", () => {
    chargerLocalStorage();
});

function afficherliste() {
    const liste = document.getElementById("todo");
    liste.innerHTML = "";

    const filter = document.getElementById("filter").value;

    let nbtasksdone = 0;
    let nbtasksencours = 0;

    listedetaches.forEach((task, index) => {
        // Compter les tâches
        if (task.status === "done") nbtasksdone++;
        else if (task.status === "en cours") nbtasksencours++;

        // Vérifier le filtre et passer à l'elt suivant si la condition n'est pas vérifiée
        if (filter !== "all" && task.status !== filter) return;

        // Créer les éléments dynamiquement
        const li = document.createElement("li");
        li.setAttribute("data-index", index);

        const span = document.createElement("span");
        span.textContent = task.content;
        if (task.status === "done") span.style.textDecoration = "line-through";

        const terminerbtn = document.createElement("button");
        terminerbtn.textContent = task.status;
        terminerbtn.addEventListener("click", () => terminerTache(li));

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "supprimer";
        deletebtn.addEventListener("click", () => supprimerTache(li));

        li.appendChild(span);
        li.appendChild(deletebtn);
        li.appendChild(terminerbtn);

        liste.appendChild(li);
    });

    // Mettre à jour les compteurs
    const stats = document.getElementById("stats");
    stats.textContent = `done: ${nbtasksdone}, en cours: ${nbtasksencours}`;
}


function ajouterTache()
{
    //récupérer la tache saisie par l'utilisateur
    const input=document.getElementById("saisie");

    //ajouter la tache au tableau
    const task={
    content:input.value,
    status:"en cours"
    }; //objet tache

    listedetaches.push(task);

    afficherliste();
    sauvegarderLocalStorage();

}

//fonction pour supprimer la tache concernée
function supprimerTache(elt)
{

    const index = parseInt(elt.getAttribute("data-index"));
    listedetaches.splice(index, 1);
    afficherliste();
    sauvegarderLocalStorage();

}

//fonction pour indiquer la fin d'une tache
function terminerTache(elt)
{
    const index = parseInt(elt.getAttribute("data-index"));
    listedetaches[index].status = "done";
    elt.lastChild.textContent="done";
    elt.querySelector("span").style.textDecoration = "line-through"; //pour le texte barré
    console.log(listedetaches);
    afficherliste();
    sauvegarderLocalStorage();
}

//fonction pour tout supprimer
function deleteall()
{
    listedetaches=[];
    afficherliste();
    sauvegarderLocalStorage();
    
}



async function getPosts() {

    try{
    const liste=document.getElementById("posts-list");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data); //pour avoir une idée sur le contenu de data
    console.log("5 premiers posts :");
    data.slice(0, 5).forEach(post => {
      console.log(post.title);
      const li=document.createElement("li");
      li.textContent=post.title;
      liste.appendChild(li);

    });

    }
    catch(err)
    {
      console.log(err.message);
    }
  
}

getPosts();

/* syntaxe de forEach : array.forEach((element, index, array) => {
  // traitement de l'élt
});
*/

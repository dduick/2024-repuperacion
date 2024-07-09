import News from "./api.js";

const noticia1 = document.querySelector("#noticias12");

async function rendNews() {
    const data = await News({ category: "business"});
    let template = "";
    
    data.articles.forEach(article => {
        template += `
        <div id="articles">
        <h1>Tittulo<h1>
        <p>${article.title}</p>
        <h2>Descripcion<h2>
        <p>${article.description}</p>
        <h3>Contenido<h3>
        <p>${article.content}}</p>
        </div>
        `        
    });
    noticia1.innerHTML = template
}

rendNews();
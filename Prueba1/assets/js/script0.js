import News from "./api2.js";

const noticia0 = document.querySelector("#noticias123");

async function rendNews0() {
    const data = await News();
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
    noticia0.innerHTML = template
}

rendNews0();
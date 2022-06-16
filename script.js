let json = "https://www.luizpicolo.com.br/api.json";
let XHR = new XMLHttpRequest();
XHR.open("get", json)
XHR.responseType = "json";
XHR.send();
XHR.onload = function() {
  

  class Noticia{
  constructor (author, description, publishedAt, title, urlToImage){
    this.author = author;
    this.description = description;
    this.publishedAt = publishedAt;
    this.title = title;
    this.urlToImage = urlToImage;
  }
  MostrarNoticia(){
    return `<div class="list"><div class="title"> 
    <h1>${this.title}
    ${this.publishedAt}</h1></div>
    <div class="txt"><h3>${this.description}</h3>
    <h3>${this.author}</h3></div>
    <a href="${this.url}"/>
    <img src="${this.urlToImage}"alt=""/></div>`;
  }
}
  

  let noticias = XHR.response;
  const elemento = document.getElementById('list');
   noticias.articles.forEach(noticia => {

  let noticiano = new Noticia (noticia.title, noticia.publishedAt, 
   noticia.description, noticia.author, noticia.urlToImage);
    
 
   elemento.insertAdjacentHTML('beforeend', noticiano.MostrarNoticia());
  });
}
  



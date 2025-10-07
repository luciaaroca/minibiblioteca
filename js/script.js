
//importar el js de books
import books from "./books.js";
console.log(books);

//crear un contenedor para todo con un id

const main= document.createElement("main"); //creamos etiqueta main

const atributo= document.createAttribute("id") // creamos el id 
atributo.value="contenedor" //aqui damos valor al id="contenedor"
main.setAttributeNode(atributo);//aqui le ponemos ese id a main

document.body.appendChild(main);

//crear dentro del main -utilizaremos template strings
//1 tenemos que recorrer el array con un for..of

for(const book of books){ //para cada book de los books
    //creamos una constante tarjeta y con template string (``) (${}) vamos generando los elementos, sus atributos y accediendo a cada valor del objeto del array
    const tarjeta =` 
     <div class="card">
       <h2>AUTHOR: ${book.author}</h2>
       <h3>COUNTRY: ${book.country}</h3>
       <p>Language: ${book.language}</p>
       <img src="${book.imageLink}" alt="${book.title}">
       <a href="${book.link}">Link al libro</a>
       <p>Nº de páginas: ${book.pages}</p>
       <p>Título: ${book.title}</p>
       <p>Year: ${book.year}</p>
     </div>
    `
    ;
    // main.appendChild(tarjeta); -->esto no funciona ya que solo funciona con nodos, es decir hay que hacer los elementos con createElement

    main.innerHTML += tarjeta;
}


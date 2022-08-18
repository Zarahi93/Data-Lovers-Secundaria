//import { example } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/ghibli/ghibli.js';


//*********** 4 se crean los nodos por paquete 

let posters = data.films.map(({poster}) => poster);//Creaun nuevo arreglo con todos los "poster" que se encuentran dentro del objeto "films" de cada pelicula en "posters"
let titles = data.films.map(({title}) => title)
let years = data.films.map(({release_date}) => release_date)
let recap = data.films.map(({description}) => description)
let directors = data.films.map(({director}) => director)
let producers = data.films.map(({producer}) => producer)
const fatherNode=document.querySelector("main");//Se obtiene y asigna la sección main del documento a la variable fatherNode

for (let i = 0; i <posters.length; i++) {
  const posterPicture=document.createElement("img");//Se crea un elemento en el documento de tipo imagen
  const titlePicture=document.createElement("p");
  const yearPicture=document.createElement("p"); 
  const recapPicture=document.createElement("p");
  const directorPicture=document.createElement("p");
  const producerPicture=document.createElement("p");
  const newArt=document.createElement("article");
 // const newSec=document.createElement("section");
  
  const photo = posters[i];//se le asigna a la variable photo el url de cada posters
  posterPicture.setAttribute("src", photo);  //Se agina el atrivuto de tipo src y se le da el link del poster
  posterPicture.setAttribute("class","posterMovie")
  titlePicture.innerHTML=titles[i];//Se muestra el titulo de la pelicula en el documento html
  titlePicture.setAttribute("class", "titleMovie");
  yearPicture.innerHTML=years[i];
  yearPicture.setAttribute("class", "yearMovie");
  newArt.setAttribute("class","box");
  recapPicture.innerHTML=recap[i];
  recapPicture.setAttribute("class", "recapMovie");
  directorPicture.innerHTML=directors[i];
  directorPicture.setAttribute("class", "directorMovie");
  producerPicture.innerHTML=producers[i];
  producerPicture.setAttribute("class", "producerMovie");
  //newSec.setAttribute("class","hidenBox");
  fatherNode.append(newArt);//Se le dice que se ponga el nuevo article despues del anterior.
  newArt.append(posterPicture, titlePicture, yearPicture,recapPicture,directorPicture,producerPicture);//se le dice que dentro del div agregu los poster,titulos y años de las peliculas
  //let  childNode=document.querySelector("article");
  //childNode.append(newSec);
  //newSec.append(recapPicture,directorPicture,producerPicture);
}

//***************MOSTRAR PANTALLA CON FILTROS Y OCULTAR PELÍCULAS NO FILTRADAS

const showAllMovies=document.getElementById('main');  
showAllMovies.addEventListener('click', function(){
    document.getElementById('showAllMovies').style.display = "none"; //falta agregar cual ocultar y cual ver
    document.getElementById('showFilter').style.display = "block";
    filter();

//document.getElementById('diarioCifrado').value = cipher.encode(offsetCifrar, originalText);

});





// *****1********* 1 prueba de crear nodos  y elementos de UN solo dato 


//console.log(data.films);
//console.log(data.films[0].title, data.films[0].release_date, data.films[0].poster);


// const poster=document.querySelector("main"); // crear nodo padre
// const posterOne=document.createElement("img"); // crear nodo elemento

// const photo = data.films[0].poster; // agregar el contenido al nodo elemento
// posterOne.setAttribute("src", photo); // agregar atributo

// // console.log(poster);

// const title=document.querySelector("main");
// const titleOne=document.createElement("p");
// titleOne.innerHTML=data.films[0].title;


// const date=document.querySelector("main");
// const dateOne=document.createElement("p");
// dateOne.innerHTML=data.films[0].release_date;

// poster.append(posterOne);
// title.append(titleOne);
// date.append(dateOne);



//*********** 2 con map obtengo un arreglo con todas las peliclas, otro con todos los títulos ***********************
// let posters = data.films.map(({poster}) => poster);
// console.log(posters);

// let titles = data.films.map(({title}) => title);
// console.log(titles);

// let years = data.films.map(({release_date}) => release_date);
// console.log(years);


//******************** 2 el método forEach me guardo un arrego de objetos ********

// let posters=[];
// data.films.forEach(({poster}) => posters.push({poster}));
// console.log(posters);

// let titles=[];
// data.films.forEach(({title}) => titles.push({title}));
// console.log(titles);

// let years=[];
// data.films.forEach(({release_date}) => years.push({release_date}));
// console.log(years);



//*********** 3 se crean los nodos separado en grupo:

// let posters = data.films.map(({poster}) => poster);
// const fatherNode=document.querySelector("main");

// for (let i = 0; i <posters.length; i++) {
//   const posterOne=document.createElement("img"); 
//   const photo = posters[i];
//   posterOne.setAttribute("src", photo);
//   fatherNode.append(posterOne);
// }


// let titles = data.films.map(({title}) => title);

// for (let i = 0; i < titles.length; i++) {
//   const titleOne=document.createElement("p");
//   titleOne.innerHTML=titles[i];
//   fatherNode.append(titleOne);
// }


// let years = data.films.map(({release_date}) => release_date);

// for (let i = 0; i < years.length; i++) { 
//   const dateOne=document.createElement("p");
//   dateOne.innerHTML=years[i];
//   fatherNode.append(dateOne);
// }






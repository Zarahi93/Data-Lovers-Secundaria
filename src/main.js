//import { example } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/ghibli/ghibli.js';


//*********** 4 se crean los nodos por paquete 

let posters = data.films.map(({poster}) => poster);
let titles = data.films.map(({title}) => title)
let years = data.films.map(({release_date}) => release_date)
const fatherNode=document.querySelector("main");

for (let i = 0; i <posters.length; i++) {
  const posterOne=document.createElement("img");
  const titleOne=document.createElement("p");
  const dateOne=document.createElement("p"); 
  const photo = posters[i];
  posterOne.setAttribute("src", photo);  
  titleOne.innerHTML=titles[i];
  dateOne.innerHTML=years[i];
  fatherNode.append(posterOne, titleOne, dateOne);
}





















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






//import { example } from './data.js';
//import { titles }  from './data.js';

import data from './data/ghibli/ghibli.js';

// import data from './data/rickandmorty/rickandmorty.js';
//ÚNICAMENTE DOM 
//console.log(example, data);

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



//***********se crean los nodos por separado 

let posters = data.films.map(({poster}) => poster);
const fatherNode=document.querySelector("main");

for (let i = 0; i <posters.length; i++) {
  const posterOne=document.createElement("img"); 
  const photo = posters[i];
  posterOne.setAttribute("src", photo);
  fatherNode.append(posterOne);
}


let titles = data.films.map(({title}) => title);

for (let i = 0; i < titles.length; i++) {
  const titleOne=document.createElement("p");
  titleOne.innerHTML=titles[i];
  fatherNode.append(titleOne);
}


let years = data.films.map(({release_date}) => release_date);

for (let i = 0; i < years.length; i++) { 
  const dateOne=document.createElement("p");
  dateOne.innerHTML=years[i];
  fatherNode.append(dateOne);
}





//*********** con map obtengo un arreglo ***********************
// let posters = data.films.map(({poster}) => poster);
// console.log(posters);

// let titles = data.films.map(({title}) => title);
// console.log(titles);

// let years = data.films.map(({release_date}) => release_date);
// console.log(years);





//********************el método forEach me guardo un arrego de objetos ********

// let posters=[];
// data.films.forEach(({poster}) => posters.push({poster}));
// console.log(posters);

// let titles=[];
// data.films.forEach(({title}) => titles.push({title}));
// console.log(titles);

// let years=[];
// data.films.forEach(({release_date}) => years.push({release_date}));
// console.log(years);


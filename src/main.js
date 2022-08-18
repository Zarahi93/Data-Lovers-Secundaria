//import { example } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/ghibli/ghibli.js';
//import {filter} from './data.js';

//*********** 4 se crean los nodos por paquete 
let showData=[];

let posters = data.films.map(({poster}) => poster);//Creaun nuevo arreglo con todos los "poster" que se encuentran dentro del objeto "films" de cada pelicula en "posters"
let titles = data.films.map(({title}) => title)
let years = data.films.map(({release_date}) => release_date)
const fatherNode=document.querySelector("main");//Se obtiene y asigna la sección main del documento a la variable fatherNode

for (let i = 0; i <posters.length; i++) {
  const posterPicture=document.createElement("img");//Se crea un elemento en el documento de tipo imagen
  const titlePicture=document.createElement("p");
  const yearPicture=document.createElement("p"); 
  const newArt=document.createElement("article");
  const photo = posters[i];//se le asigna a la variable photo el url de cada posters
  posterPicture.setAttribute("src", photo);  //Se agina el atrivuto de tipo src y se le da el link del poster
  posterPicture.setAttribute("class","posterMovie")
  titlePicture.innerHTML=titles[i];//Se muestra el titulo de la pelucula en el documento html
  titlePicture.setAttribute("class", "titleMovie");
  yearPicture.innerHTML=years[i];
  yearPicture.setAttribute("class", "yearMovie");
  newArt.setAttribute("id",i)
  newArt.setAttribute("class","box")
  fatherNode.appendChild(newArt);//Se le dice que se ponga el nuevo div despues del anterior.
  newArt.append(posterPicture, titlePicture, yearPicture);//se le dice que dentro del div agregu los poster,titulos y años de las peliculas
    
  showData = fatherNode.appendChild(newArt); //data a enviar a data.js para hacer el filtrado
  console.log(showData);



}



  //   *************AQUI  se leen los filtros seleccionados
  let checks = [];
  
  checks = document.getElementsByTagName("input");
  //console.log(checks);
  
  for (let i = 0; i < checks.length; i++) {
    //console.log(checks[i]);
    checks[i].addEventListener("change", checkOptions, false);
  
  
  }
  
  // let filterSelected=[];
  // function checkOptions (){
  //   console.log("hola");
  //   filterSelected = checks.value;
  //   console.log(filterSelected);
  //     // checks.forEach((e)=>{
  //     //   console.log(e.value);
      
  //   }
  
   

    function checkOptions(event){
      console.log(event);
      console.log(event.target.className);
      // let checked = checks.value;
      // console.log(checked);
      // if(checked){
      //     console.log("checkbox esta seleccionado");
      // }
      }






 // filter(optionSelected filterData);





//***************MOSTRAR PANTALLA CON FILTROS Y OCULTAR PELÍCULAS NO FILTRADAS

// const showAllMovies=document.getElementById('main');  
// showAllMovies.addEventListener('click', function(){
//     document.getElementById('showAllMovies').style.display = "none"; //falta agregar cual ocultar y cual ver, no spe si se haga así o con eliminar nodos
//     document.getElementById('showFilter').style.display = "block";
   // filter();

//document.getElementById('diarioCifrado').value = cipher.encode(offsetCifrar, originalText);

//});















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








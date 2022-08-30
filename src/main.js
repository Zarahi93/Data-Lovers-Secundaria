//import { example } from './data.js';

// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/ghibli/ghibli.js';
import { filter, order, search, stadistics } from './data.js';

//*********** 4 se crean los nodos por paquete 
let datas=data.films;
let selectedData=[];
let posters = [];
let titles = []; 
let years = [];
let recap = [];
let directors = [];
let producers = [];

let posterPicture="";
let titlePicture="";
let yearPicture=""; 
let recapPicture="";
let directorPicture="";
let producerPicture="";
let newArt="";
const fatherNode=document.querySelector("main");//Se obtiene y asigna la sección main del documento a la variable fatherNode

function mapData(){
  const dataOriginal = data.films;
  //console.log(dataOriginal)
  posters = dataOriginal.map(({poster}) => poster);//Creaun nuevo arreglo con todos los "poster" que se encuentran dentro del objeto "films" de cada pelicula en "posters"
  titles = dataOriginal.map(({title}) => title);
  //console.log(titles);
  years = dataOriginal.map(({release_date}) => release_date);
  recap = dataOriginal.map(({description}) => description);
  directors = dataOriginal.map(({director}) => director);
  producers = dataOriginal.map(({producer}) => producer);

}

function showMovies () {
  for (let i = 0; i <posters.length; i++) { 
    posterPicture=document.createElement("img");//Se crea un elemento en el documento de tipo imagen
    titlePicture=document.createElement("p");
    yearPicture=document.createElement("p"); 
    recapPicture=document.createElement("p");
    directorPicture=document.createElement("p");
    producerPicture=document.createElement("p");
    newArt=document.createElement("article");
   // photo = posters[i];//se le asigna a la variable photo el url de cada posters
    posterPicture.setAttribute("src", posters[i]);  //Se agina el atrivuto de tipo src y se le da el link del poster
    posterPicture.setAttribute("class","posterMovie")
    titlePicture.innerHTML=titles[i];//Se muestra el titulo de la pelicula en el documento html
    titlePicture.setAttribute("class", "titleMovie");
    yearPicture.innerHTML=years[i];
    yearPicture.setAttribute("class", "yearMovie");
    newArt.setAttribute("class","box");
    recapPicture.innerHTML=recap[i];
    recapPicture.setAttribute("class", "recapMovie");
    directorPicture.innerHTML="Director: "+ directors[i];
    directorPicture.setAttribute("class", "directorMovie");
    producerPicture.innerHTML="Producer: " + producers[i];
    producerPicture.setAttribute("class", "producerMovie");
    fatherNode.append(newArt);//Se le dice que se ponga el nuevo article despues del anterior.
    newArt.append(posterPicture, titlePicture, yearPicture,recapPicture,directorPicture,producerPicture);//se le dice que dentro del div agregu los poster,titulos y años de las peliculas
    //console.log(newArt);
  
  
  }

}

function showFIlterOrOrderSearch(){
  fatherNode.innerHTML="";
  posters = selectedData.map(({poster}) => poster);//Creaun nuevo arreglo con todos los "poster" que se encuentran dentro del objeto "films" de cada pelicula en "posters"
  titles = selectedData.map(({title}) => title)
  years = selectedData.map(({release_date}) => release_date)
  recap = selectedData.map(({description}) => description)
  directors = selectedData.map(({director}) => director)
  producers = selectedData.map(({producer}) => producer)
  showMovies();
  }


function showStadistic(){
  fatherNode.innerHTML=""; 
  
    // console.log(`El porcentaje de películas relaizadas en esta década es: ${selectedData}%`); 
    let titleStadistic = document.createElement("p");
    titleStadistic.setAttribute("class", "titleStadistic");
    titleStadistic.innerHTML=`Studio Ghibli has made 20 movies. <br><br> The percentage of films made in this decade is:  ${selectedData}%`;
    fatherNode.append(titleStadistic);
    
}

mapData();
showMovies();


//      *************AQUI  se leen los filtros seleccionados

   let checks = [];
   checks = document.getElementsByTagName("input"); 

   for (let i = 0; i < checks.length; i++) {
    checks[i].addEventListener("change", checkOptions);     
  }
  
  let filterName = [];
  let filterClassName = []; 
  let filterSelected = [];
  let orderSelected = [];
  function checkOptions(event){
    //console.log(event);
     filterSelected = (event.target.value);
     orderSelected = (event.target.value);
     //console.log(filterSelected);
     filterClassName = (event.target.className);
     filterName = (event.target.name);
    //console.log(filterClassName);
    if (filterClassName==="order") {
      selectedData = order(orderSelected, datas);
      showFIlterOrOrderSearch();
    }else if (filterName==="filter"){
      selectedData = filter(filterSelected, filterClassName, datas);
      showFIlterOrOrderSearch();  
    } else if (filterName==="stadistic"){ 
      selectedData = stadistics(filterSelected, datas);
      showStadistic();
        
     }else if (filterName==="search"){ 
      const textForSearch = document.getElementById("searchText").value;
      selectedData = search(textForSearch, filterSelected, datas);
      
      //console.log(textForSearch, filterSelected);
      showFIlterOrOrderSearch(); 
     } 
    

  }




let clear=document.getElementById("unselect");
clear.addEventListener("click", unselect);

function unselect(){
  document.querySelectorAll("input").forEach((input) => input.checked=false);
  fatherNode.innerHTML="";
  mapData();
  showMovies(); 
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








import data from './data/ghibli/ghibli.js';//Importa toda la data de Ghibli
import { filter, order, search, stadistics } from './data.js'; //Importa las funciones desde data.js

//******Se declaran las variables a utilizar********
let datas=data.films;
let selectedData=[];  //Se asigna un arreglo vacío a la variable
let posters = [];    //para despues poder reasignarles otro arreglo
let titles = []; 
let years = [];
let recap = [];
let directors = [];
let producers = [];

let posterPicture="";//Se le asigna un string vacio a la variable
let titlePicture="";//para despues poder reasignarles otro string
let yearPicture=""; 
let recapPicture="";
let directorPicture="";
let producerPicture="";
let newArt="";
const fatherNode=document.querySelector("main");//Se obtiene y asigna la sección main del documento a la variable fatherNode

//******Función que crea los arreglos con la informacion de todas las peliculas*******//
function mapData(){
const dataOriginal = data.films;//Se declara una variable y se le asigna un arreglo de donde obtener los datos
posters = dataOriginal.map(({poster}) => poster);            //map crea un nuevo arreglo apartir de los resultados de la
titles = dataOriginal.map(({title}) => title);              //llamada a la función indicada aplicados a cada uno de sus
years = dataOriginal.map(({release_date}) => release_date);//elementos.
recap = dataOriginal.map(({description}) => description); 
directors = dataOriginal.map(({director}) => director);
producers = dataOriginal.map(({producer}) => producer);
}
//*****Función que crea los elementos html donde ira la info de las peliculas*****/
function showMovies () {
  for (let i = 0; i <posters.length; i++) { //El for es para indicar que debe repetir las acciones para cada arreglo
    posterPicture=document.createElement("img");//Se crea un elemento en el documento de tipo imagen
    titlePicture=document.createElement("p");
    yearPicture=document.createElement("p"); 
    recapPicture=document.createElement("p");
    directorPicture=document.createElement("p");
    producerPicture=document.createElement("p");
    newArt=document.createElement("article");
    posterPicture.setAttribute("src", posters[i]);  //Se agina el atributo de tipo src y se le da el link del poster
    posterPicture.setAttribute("class","posterMovie")
    titlePicture.innerHTML=titles[i];//Se muestra el titulo de cada película en el documento html
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
    fatherNode.append(newArt);//Se le dice que se ponga el nuevo article despues del anterior (uno tras otro).
    newArt.append(posterPicture, titlePicture, yearPicture,recapPicture,directorPicture,producerPicture);//se le dice que dentro del article agregue la información las peliculas  
  }

}
//*****Función que muestra el contenido ya filtrado/ordenado y search*****//
function showFIlterOrOrderSearch(){
  fatherNode.innerHTML="";//Se "borran" (string vacio) del html los datos originales
  posters = selectedData.map(({poster}) => poster);//apartir de los datos filtrados/ordenados crea un nuevo arreglo
  titles = selectedData.map(({title}) => title)   
  years = selectedData.map(({release_date}) => release_date)
  recap = selectedData.map(({description}) => description)
  directors = selectedData.map(({director}) => director)
  producers = selectedData.map(({producer}) => producer)
  showMovies();//manda a llamar la función que crea los elementos html donde ira la info de las peliculas
  }

//*****Función que hace el calculo estadistico y lo muestra en la página*****/
function showStadistic(){
  fatherNode.innerHTML=""; 
    let titleStadistic = document.createElement("p");
    titleStadistic.setAttribute("class", "titleStadistic");
    titleStadistic.innerHTML=`Studio Ghibli has released 20 movies. <br><br> The percentage of films released in this decade is:  ${selectedData}%`;
    fatherNode.append(titleStadistic);//Crea el elemento p dentro de la sección main
    
}

mapData();//Manda a llamar la función que crea los arreglos con la informacion de todas las peliculas
showMovies();


//*****AQUI  se leen los filtros seleccionados*****//

   let checks = [];
   checks = document.getElementsByTagName("input");//asigna a la variable todos los elementos input en html

   for (let i = 0; i < checks.length; i++) {//Revisa todos los input por algun cambio
    checks[i].addEventListener("change", checkOptions);// y si lo hay manda a llamar una función  
  }
  
  let filterName = [];
  let filterClassName = []; 
  let filterSelected = [];
  let orderSelected = [];

  //*****Función de filtrado y ordenado*****//
  function checkOptions(event){
     filterSelected = (event.target.value);//Guarda el valor del filtro seleccionado
     orderSelected = (event.target.value);//Guarda el valor del filtro seleccionado
     filterClassName = (event.target.className);//Guarda el class del elemento seleccionado
     filterName = (event.target.name);//Guarda el name del elemento seleccionado para filtrar
    if (filterClassName==="order") {
      selectedData = order(orderSelected, datas);//Asigna el resultado de la función a la variable selectedData
      showFIlterOrOrderSearch();//Manda a llamar a la función que muestra el contenido ya filtrado/ordenado y search
    }else if (filterName==="filter"){
      selectedData = filter(filterSelected, filterClassName, datas);
      showFIlterOrOrderSearch();  
    } else if (filterName==="stadistic"){ 
      selectedData = stadistics(filterSelected, datas);
      showStadistic();//Manda a llamar a la función que hace el calculo estadistico y lo muestra en la página
        
     }else if (filterName==="search"){ 
      const textForSearch = document.getElementById("searchText").value;//Guarda el valor obtenido en la variable 
      selectedData = search(textForSearch, filterSelected, datas);
      showFIlterOrOrderSearch(); 
     } 
  }
//*****Se le da funcionalidad al boton para limpiar campos*****//
let clear=document.getElementById("unselect");
clear.addEventListener("click", unselect);//Al hacer click sobre el boton se manda allamar la función unselect

//*****Función que deselecciona los radio buttons y muestra la data original*****//
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








//import { example } from './data.js';
//import { titles }  from './data.js';

import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
//ÚNICAMENTE DOM 
//console.log(example, data);

console.log(data.films);




let titles = [];
  data.films.forEach(({title}) => {
    titles += title;
   // return title;
    //console.log(titles);
  });
 
document.getElementById("main").innerHTML = titles; 

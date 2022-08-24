// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';


//let titles = data.films.map(({title}) => title);
// console.log(titles);



export const filter = (filterSelected, filterClassName) => {
  //console.log(filterSelected, filterClassName);
  let fail="Debes dar un nombre de director o producer o un año válido";
  let filterData = [];
    if(filterClassName==="director"){
      //console.log("director" + filterSelected);

      filterData = data.films.filter(({director}) => director===filterSelected);
      //console.log(filterData);
      
      return filterData;
        
     
    }else if(filterClassName==="producer"){
      //console.log("producer" + filterSelected);

      filterData = data.films.filter(({producer}) => producer===filterSelected);
    //console.log(filterData);
      
      return filterData;

    }else if(typeof filterSelected === "string" && filterClassName==="year") {
     // console.log(typeof filterSelected);
      filterSelected=filterSelected.split(','); 
      //console.log(filterSelected);
      
      let firstDate=filterSelected[0];
      let lastDate=filterSelected.slice(-1)[0].trim();
      filterData = data.films.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));

     
      //console.log(filterData);
      
      return filterData;
        
    }else {
      return fail;
    }
    
  }



  // export const order = (filterSelected) => {

  // console.log(filterSelected);
  // //let fail="Debes dar un nombre en class = director o producer o year";
  // let filterData = [];
  //   if(filterSelected==="upward"){
      //console.log("director" + filterSelected);

      
      
      // filterData = data.films.title.sort(a-b);
      // console.log(filterData);
      
      // return filterData;
        
     
    // }else if(filterSelected==="falling"){
    //   //console.log("producer" + filterSelected);

    //   filterData = data.films.filter(({producer}) => producer===filterSelected);
    //   //console.log(filterData);
      
    //   return filterData;
   // } 






  //}








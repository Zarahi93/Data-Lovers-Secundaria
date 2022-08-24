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



  export const order = (orderSelected, datas) => {
    
    let orderData = [];

    function upward(x, y){
      if (x.title < y.title) {return -1}
      if (x.title > y.title) {return 1}
      return 0;
    }

    function downward(x, y){
      if (x.title > y.title) {return -1}
      if (x.title < y.title) {return 1}
      return 0;
    }

    if(orderSelected==="upward"){
    //   console.log(orderSelected);
      orderData = datas.sort((x, y) => upward(x, y));
      return orderData;
      
    }else if(orderSelected==="downward"){
      orderData = datas.sort((x, y) => downward(x, y)); 
      return orderData;   
     
     }

    
      






  }








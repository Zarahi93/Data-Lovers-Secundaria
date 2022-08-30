
export const filter = (filterSelected, filterClassName, datas) => {
  //console.log(filterSelected, filterClassName);
    let filterData = [];
    if(filterClassName==="director"){
      //console.log("director" + filterSelected);

      filterData = datas.filter(({director}) => director===filterSelected);
      //console.log(filterData);
     
    }else if(filterClassName==="producer"){
      //console.log("producer" + filterSelected);

      filterData = datas.filter(({producer}) => producer===filterSelected);
    //console.log(filterData);
      

    }else if(typeof filterSelected === "string" && filterClassName==="year") {
     // console.log(typeof filterSelected);
      filterSelected=filterSelected.split(','); 
      //console.log(filterSelected);
      
      let firstDate=filterSelected[0];
      let lastDate=filterSelected.slice(-1)[0].trim();
      filterData = datas.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));
    }
    return filterData;

  }



export const order = (orderSelected, datas) => {
  let orderData = [];

  if(orderSelected==="upward"){
    orderData = [...datas].sort((x, y) => (x.title<y.title ? -1:1)); 
      
  }else if(orderSelected==="downward"){
    orderData = [...datas].sort((x, y) => (x.title>y.title ? -1:1));  
  } 
  return orderData;  

}



export const stadistics = (filterSelected, datas) => {
  // if (filterSelected==="hola" && datas === "hola"){
  //     throw new TypeError ("Debes enviar 2 argumentos");
  // }
  
  let total = datas.length;
  
  filterSelected=filterSelected.split(','); 
  let firstDate=filterSelected[0];
  let lastDate=filterSelected.slice(-1)[0].trim();
  let filterData = datas.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));

  let moviesDecade=filterData.length;
  let average=(moviesDecade/total)*100;
   //console.log(`El porcentaje de películas relaizadas en esta década es: ${average}%`);
     
     return average;
}

  
export const search = (textForSearch, filterSelected, datas) => {
  //console.log(textForSearch, filterSelected, datas);
  let filterData = [];
   if (filterSelected==="directors"){
    //console.log(textForSearch);
    filterData = datas.filter(({director}) => director===textForSearch);
    //console.log(filterData);

   }else if(filterSelected==="producers"){
    
    filterData = datas.filter(({producer}) => producer===textForSearch);
    //console.log(filterData);

   }else if(filterSelected==="titles"){
 
    filterData = datas.filter(({title}) => title===textForSearch);
    //console.log(filterData);

   }else if(filterSelected==="years"){

    filterData = datas.filter(({release_date}) => release_date===textForSearch);
    //console.log(filterData);
  }
  return filterData;
}
  
  






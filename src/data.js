
//*****Funcion para el filtrado*****//
export const filter = (filterSelected, filterClassName, datas) => {//Se exporta y delcara la función
    let filterData = [];
    if(filterClassName==="director"){

      filterData = datas.filter(({director}) => director===filterSelected);//Filtra segun el nombre del director seleccionado
     
    }else if(filterClassName==="producer"){

      filterData = datas.filter(({producer}) => producer===filterSelected);
      

    }else if(typeof filterSelected === "string" && filterClassName==="year") {//la variable debe ser de tipo string y el nombre de la calse debe ser year
      filterSelected=filterSelected.split(','); //Divide el string en substrings usando el separador , y las devuelve como arreglo
      
      let firstDate=filterSelected[0];
      let lastDate=filterSelected.slice(-1)[0].trim();//devuelve una copia de una parte del array dentro de
      // un nuevo array de inicio a fin y elimina los espacios en blanco en ambos extremos del string
      filterData = datas.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));//Los años deben estar dentro de un rango
    }
    return filterData;

  }


//*****Función para ordenar las películas*****//
export const order = (orderSelected, datas) => {//Declara y exporta la función
  let orderData = [];

  if(orderSelected==="upward"){
    orderData = [...datas].sort((x, y) => (x.title<y.title ? -1:1)); //Ordena de la A-Z segun el titulo 
      
  }else if(orderSelected==="downward"){
    orderData = [...datas].sort((x, y) => (x.title>y.title ? -1:1)); //Ordena de la Z-A segun el titulo
  } 
  return orderData;  

}


//*****Función que realiza el calculo estadistico (promedio)*****//
export const stadistics = (filterSelected, datas) => {//Declara y exporta la función
 
  
  let total = datas.length;
  
  filterSelected=filterSelected.split(','); 
  let firstDate=filterSelected[0];
  let lastDate=filterSelected.slice(-1)[0].trim();
  let filterData = datas.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));

  let moviesDecade=filterData.length;
  let average=(moviesDecade/total)*100;//Calcula el porcentaje de peliculas estrenadas por año     
     return average;
}

//*****Función que busca dentro de la data la información ingresada*****//
export const search = (textForSearch, filterSelected, datas) => {
  let filterData = [];
   if (filterSelected==="directors"){
    filterData = datas.filter(({director}) => director===textForSearch);

   }else if(filterSelected==="producers"){
    
    filterData = datas.filter(({producer}) => producer===textForSearch);

   }else if(filterSelected==="titles"){
 
    filterData = datas.filter(({title}) => title===textForSearch);

   }else if(filterSelected==="years"){

    filterData = datas.filter(({release_date}) => release_date===textForSearch);
  }
  return filterData;
}
  
  






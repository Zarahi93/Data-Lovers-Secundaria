// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

/*
export const example = () => {
  return 'example';
};
*/
// export const anotherExample = () => {
//   return 'OMG';
// };
//let titles = data.films.map(({title}) => title);
// console.log(titles);



export const filter = (filterSelected, filterClassName) => {
  //console.log(filterSelected, filterClassName);
 // let showFilter="true";
  let filterData = [];
    if(filterClassName==="director"){
      //console.log("director" + filterSelected);

      filterData = data.films.filter(({director}) => director===filterSelected);
     // console.log(filterData);
      
      return filterData;
        
     
    }else if(filterClassName==="producer"){
      //console.log("producer" + filterSelected);

      filterData = data.films.filter(({producer}) => producer===filterSelected);
    //console.log(filterData);
      
      return filterData;

    }else{
      filterSelected=filterSelected.split(','); 
      //console.log(filterSelected);
      
      let firstDate=filterSelected[0];
      let lastDate=filterSelected.slice(-1)[0].trim();
      filterData = data.films.filter(({release_date}) => (release_date>=firstDate && release_date<=lastDate));

     
      //console.log(filterData);
      
      return filterData;
        
    }
    
  }









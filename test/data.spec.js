//import { example, anotherExample } from '../src/data.js';
import { filter, order } from '../src/data.js';

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('filter to be truthly', () => {
    expect(filter).toBeTruthy();
  });

  // it("filter() 'No pasaste ningún argumento'", () => {
  //   const result = filter('');
  //   expect(result).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  // }); 

  it("filtra el array según el director elegido'", () => {
    const data = [
      {
        director: "Hayao Miyazaki",
      },
      {
        director: "Hiroyuki Morita", 
      },
      {
        director: "Hayao Miyazaki",
      },
    ];  
    expect(filter("Hiroyuki Morita", "director", data)).toStrictEqual([
      {
        director: "Hiroyuki Morita",
      },
    ]);
  }); 

  it("filtra el array según el productor elegido'", () => {
    const data = [
      {
        producer: "Isao Takahata",
      },
      {
        producer: "Toshio Suzuki", 
      },
      {
        producer: "Hayao Miyazaki",
      },
    ]; 
    expect(filter("Toshio Suzuki", "producer", data)).toStrictEqual([
      {
        producer: "Toshio Suzuki",
      },
    ]);
  }); 

  it("filtra el array según el año de lanzamiento elegido'", () => {
    const data = [
      {
        release_date: "1986",
      },
      {
        release_date: "1987", 
      },
      {
        release_date: "1988",
      },
    ]; 
    expect(filter("1988", "year", data)).toStrictEqual([
      {
        release_date: "1988",
      },
    ]);
  }); 

  it("ordena el array respecto al título en forma ascendente", () => {
    const data = [
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "Castle in the Sky", 
      },
      {
        title: "Kiki's Delivery Service",
      },
    ]; 
    expect(order("upward", data)).toStrictEqual([
      {
        title: "Castle in the Sky",
      },
      {
        title: "Kiki's Delivery Service",
      },
      {
        title: "My Neighbor Totoro",
      },
    ]);
  });

  it("ordena el array respecto al título en forma ascendente", () => {
    const data = [
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "Castle in the Sky", 
      },
      {
        title: "Kiki's Delivery Service",
      },
    ]; 
    expect(order("downward", data)).toStrictEqual([
      {
        title: "My Neighbor Totoro",
      },
      {
        title: "Kiki's Delivery Service",
      },
      {
        title: "Castle in the Sky",
      },
    ]);
  });



  // it('se ingresó un número, string o null, debes ingresar el nombre de un Director', () => {
  //   expect(filter(2, "director", datas)).toStrictEqual([]);
  //   expect(filter("f", "director", datas)).toStrictEqual([]);
  //   expect(filter(null, "director", datas)).toStrictEqual([]);
  // });

  // it('se ingresó un número, string o null, debes ingresar el nombre de un Productor', () => {
  //   expect(filter(2, "producer", datas)).toStrictEqual([]);
  //   expect(filter("f", "producer", datas)).toStrictEqual([]);
  //   expect(filter(null, "producer", datas)).toStrictEqual([]);
  // });

  // it('se ingresó un número, string o null, debes ingresar un nombre de class = director o producer o year', () => {
  //   expect(filter("Hayao Miyazaki", 2, datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  //   expect(filter("Hayao Miyazaki", "f", datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  //   expect(filter("Hayao Miyazaki", null, datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  // })

  


  // it('se ingresó un número inválido, string o null, debes ingresar el año de una película', () => {
  //   expect(filter(2, "year", datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  //   expect(filter(1979, "year", datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  //   expect(filter("f", "year", datas)).toStrictEqual([]);
  //   expect(filter(null, "year", datas)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  // });

 



});





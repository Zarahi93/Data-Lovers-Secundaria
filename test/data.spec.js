//import { example, anotherExample } from '../src/data.js';
import { filter } from '../src/data.js';

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('filter to be truthly', () => {
    expect(filter).toBeTruthy();
  });

  it("filter() to be 'No pasaste ningún argumento'", () => {
    const result = filter('');
    expect(result).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  }); 

  it('se ingresó un número, string o null, debes ingresar el nombre de un Director', () => {
    expect(filter(2, "director")).toStrictEqual([]);
    expect(filter("f", "director")).toStrictEqual([]);
    expect(filter(null, "director")).toStrictEqual([]);
  });

  it('se ingresó un número, string o null, debes ingresar el nombre de un Productor', () => {
    expect(filter(2, "producer")).toStrictEqual([]);
    expect(filter("f", "producer")).toStrictEqual([]);
    expect(filter(null, "producer")).toStrictEqual([]);
  });

  it('se ingresó un número, string o null, debes ingresar un nombre de class = director o producer o year', () => {
    expect(filter("Hayao Miyazaki", 2)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
    expect(filter("Hayao Miyazaki", "f")).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
    expect(filter("Hayao Miyazaki", null)).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  })

  


  it('se ingresó un número inválido, string o null, debes ingresar el año de una película', () => {
    expect(filter(2, "year")).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
    expect(filter(1979, "year")).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
    expect(filter("f", "year")).toStrictEqual([]);
    expect(filter(null, "year")).toStrictEqual("Debes dar un nombre de director o producer o un año válido");
  });

 



});





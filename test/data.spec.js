//import { example, anotherExample } from '../src/data.js';
import { filter, order, search, stadistics } from '../src/data.js';

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('filter to be truthly', () => {
    expect(filter).toBeTruthy();
  });

  it("Si no se pasan argumentos a filter(datas) y sólo tiene datas regresa un arreglo vacío", () => {
    const datas = [
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
    expect(filter(datas)).toStrictEqual([]);
  }); 

  it("si se tiene datas vacía retorna un arreglo vacío", () => {
    const datas = [];  
    expect(filter("Hiroyuki Morita", "director", datas)).toStrictEqual([]);
  }); 
  
  it("filtra el array según el director elegido'", () => {
    const datas = [
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
    expect(filter("Hiroyuki Morita", "director", datas)).toStrictEqual([
      {
        director: "Hiroyuki Morita",
      },
    ]);
  }); 

  it("Si no existe el nombre del Director indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter("Delia", "director", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del nombre de un Director retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter(2, "director", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del nombre de un Director retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter(null, "director", datas)).toStrictEqual([]);
  });



  it("filtra el array según el productor elegido'", () => {
    const datas = [
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
    expect(filter("Toshio Suzuki", "producer", datas)).toStrictEqual([
      {
        producer: "Toshio Suzuki",
      },
    ]);
  }); 

  it("Si no existe el nombre de Producer indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter("Delia", "producer", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del nombre de un Producer retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter(2, "producer", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del nombre de un producer retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter(null, "producer", datas)).toStrictEqual([]);
  });



  it("filtra el array según el year de lanzamiento elegido'", () => {
    const datas = [
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
    expect(filter("1988", "year", datas)).toStrictEqual([
      {
        release_date: "1988",
      },
    ]);
  }); 

  it("Si no existe el year indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter("1985", "year", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un string diferente a year indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter("Delia", "year", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar de year retorna un arreglo vacío", () => {
    const datas = [
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
    expect(filter(null, "year", datas)).toStrictEqual([]);
  });
});




describe('order', () => {
    it('is a function', () => {
      expect(typeof order).toBe('function');
    });
  
    it('order to be truthly', () => {
      expect(order).toBeTruthy();
    });
  
    it("Si no se pasan argumentos a order(datas) y sólo tiene datas regresa un arreglo vacío", () => {
      const datas = [
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
      expect(order(datas)).toStrictEqual([]);
    }); 
  
    it("si se tiene datas vacía retorna un arreglo vacío", () => {
      const datas = [];  
      expect(order("upward", datas)).toStrictEqual([]);
    }); 

  it("ordena el array respecto al título en forma ascendente", () => {
    const datas = [
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
    expect(order("upward", datas)).toStrictEqual([
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

  it("Si no existe el método de ordenamiento indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(order("up", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar de ordenamiento ascendente ('upward') retorna un arreglo vacío", () => {
    const datas = [
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
    expect(order(null, datas)).toStrictEqual([]);
  });

  it("ordena el array respecto al título en forma descendente", () => {
    const datas = [
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
    expect(order("downward", datas)).toStrictEqual([
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

  it("Si no existe el método de ordenamiento indicado retorna un arreglo vacío", () => {
    const datas = [
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
    expect(order("down", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar de ordenamiento ascendente ('upward') retorna un arreglo vacío", () => {
    const datas = [
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
    expect(order(null, datas)).toStrictEqual([]);
  });
});




describe('stadistics', () => {
  it('is a function', () => {
    expect(typeof stadistics).toBe('function');
  });

  it('order to be truthly', () => {
    expect(stadistics).toBeTruthy();
  });

  it("Si no se pasan argumentos envía un TypeError", () => {
    expect(() => stadistics()).toThrow(TypeError);
  }); 

  it("si se tiene datas vacía retorna Nan ya que no lo puede calcular", () => {
    const datas = [];  
    expect(stadistics("1988", datas)).toStrictEqual(NaN);
  }); 

  it("obtiene el porcentaje de películas relaizadas por década", () => {
    const datas = [
      {
       release_date: "1988",
      },
      {
       release_date: "1986", 
      },
      {
       release_date: "1989",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1984",
      },
      {
        release_date: "1988",
      },
      {
       release_date: "1985",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1987",
      },
      {
        release_date: "1981",
      },
    ];
    expect(stadistics("1988", datas)).toStrictEqual(40);
  });

  it("Si no existe la década de stadística indicado retorna '0'", () => {
    const datas = [
      {
       release_date: "1988",
      },
      {
       release_date: "1986", 
      },
      {
       release_date: "1989",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1984",
      },
      {
        release_date: "1988",
      },
      {
       release_date: "1985",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1987",
      },
      {
        release_date: "1981",
      },
    ];
    expect(stadistics("1991", datas)).toStrictEqual(0);
  }); 

  it("Si se pasa 'null' en lugar de una década retorna un arreglo vacío", () => {
    const datas = [
      {
       release_date: "1988",
      },
      {
       release_date: "1986", 
      },
      {
       release_date: "1989",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1984",
      },
      {
        release_date: "1988",
      },
      {
       release_date: "1985",
      },
      {
       release_date: "1988",
      },
      {
       release_date: "1987",
      },
      {
        release_date: "1981",
      },
    ];
    expect(order(null, datas)).toStrictEqual([]);
  });
});








describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('search to be truthly', () => {
    expect(search).toBeTruthy();
  });

  it("Si no se pasan argumentos a search(datas) y sólo tiene datas regresa un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(datas)).toStrictEqual([]);
  }); 

  it("si se tiene datas vacía retorna un arreglo vacío", () => {
    const datas = [];  
    expect(search("Isao Takahata", "directors", datas)).toStrictEqual([]);
  }); 
  
  it("Muestra las películas de acuerdo al nombre del director escrito por el usuario", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ];   
    expect(search("Isao Takahata", "directors", datas)).toStrictEqual([
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]);
  }); 

  it("Si no existe el nombre del Director indicado retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search("Delia", "directors", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del nombre de un Director retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(2, "directors", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del nombre de un Director retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(null, "directors", datas)).toStrictEqual([]);
  });

  it("Muestra las películas de acuerdo al nombre del productor escrito por el usuario", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ];   
    expect(search("Hayao Miyazaki", "producers", datas)).toStrictEqual([
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
    ]);
  }); 

  it("Si no existe el nombre del Productor indicado retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search("Delia", "producers", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del nombre de un Productor retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(2, "producers", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del nombre de un productor retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(null, "producers", datas)).toStrictEqual([]);
  });

  it("Muestra las películas de acuerdo al año escrito por el usuario", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ];   
    expect(search("1986", "years", datas)).toStrictEqual([
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
    ]);
  }); 

  it("Si no existe el año indicado retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search("1979", "years", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del año retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(2, "years", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del año retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(null, "years", datas)).toStrictEqual([]);
  });

















  it("Muestra las películas de acuerdo al título escrito por el usuario", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ];   
    expect(search("Kiki's Delivery Service", "titles", datas)).toStrictEqual([
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
    ]);
  }); 

  it("Si no existe el título indicado retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search("Ponyo on the Cliff by the Sea", "titles", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa un número en lugar del Título retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(2, "titles", datas)).toStrictEqual([]);
  }); 

  it("Si se pasa 'null' en lugar del título retorna un arreglo vacío", () => {
    const datas = [
      {
        title:  "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        release_date: "1986",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki", 
        release_date: "1988",
      },
      {
        title: "Kiki's Delivery Service",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        release_date: "1989",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
        release_date: "1988",
      },
    ]; 
    expect(search(null, "titles", datas)).toStrictEqual([]);
  });


});  
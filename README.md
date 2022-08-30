# Data Lovers

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Criterios de aceptación del proyecto](#2-criterios-de-aceptación-del-proyecto)
* [3. Organización del Trabajo](#3-organización-del-trabajo)

***

## 1. Resumen del proyecto

En este proyecto se manipularon un conjunto de datos (_set_ de datos)
para hacerlos accesibles a través de una _página web_ de utilidad para las usuarias.

Esta página web permite **visualizar la data, filtrarla, ordenarla y hacer algún cálculo agregado**. 
Con cálculo agregado nos referimos a mostrar información aún más relevante para los usuarios
(porcentaje de películas estrenadas por década).
  
###Definición del producto

El usuario desea familiarizarce con las películas del estudio japonés Ghibli. De todo este fandom hay un grupo que desea poder
interactuar y ver la información de las animaciones.

Para entender mejor qué información podrían necesitar nuestras usuarias,
hicimos una rápida investigación (research) y estos son algunos de los
hallazgos.

- Studio Ghibli tiene varias animaciones, para nuestras usuarias es importante
  saber cuántas y cuáles son.
- Las animaciones tienen directores y productores. Estas son las mentes detrás
  de una gran animación. En Studio Ghibli hay directores y productores que han
  colaborado en la creación de más de una animación. Por ello, es importante
  para nuestra usuaria poder conocerlos y saber cuántas y cuáles son las
  animaciones a las que dieron "vida".
- Las animaciones tienen información relevante para nuestras usuarias, como
  descripción, fecha de lanzamiento, director y productor.

Por ello nuestra página muestra todas las animaciones y la información de estas (titulo, año de lanzamiento, director, productor y un resumen de cada una de ellas.) Además de ofrecer las opciones de filtrado, ordenado, búsqueda y porcentaje de películas estrenadas por década.

###Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Este borrador tiene en cuanta las tres primeras HU.

![Borrador 1](/imgRM/B1.jpg)

![Borrador 2](/imgRM/B2.jpg)

#### Prototipo de alta fidelidad

El prototipo solo tomo en cuanta la HU1.

![Prototipo de alta fidelidad](/imgRM/DI.png)

## 2. Criterios de aceptación del proyecto

Llamamos "Criterios de aceptación" a todas aquellas características que debe tener
un proyecto para ser "aceptado" como válido. En este caso se consideran las Historias
de Usuario.

Así mismo, cada Historia de Usuario tiene los suyos propios. Los CA deben ser características observables, concretas, jamás generalidades del tipo "amigable con el usuario" (¿qué significa eso exactamente?).


### Historias de usuario

Generalmente, las [Historias de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) son el resultado de un proceso de
investigación o _research_ de las usuarias y de algunas necesidades específicas del
producto/negocio.

Una vez que entiendas las necesidades de tus usuarias, _completa_ las Historias
de Usuario que te proveemos predefinidas para que representen exactamente todo lo
que decidas implementar.

#### [Historia de usuario 1]

Yo como usuario [visitante del sitio] quiero poder VER todas las películas para poder familiarizarme con ellas.

**Criterios de Aceptación.**

>* Todas las películas aparecen en una misma vista, en forma
>de grilla (cuadrícula) sin ningún orden en particular.
>* La vista no tiene paginación, se hace scroll desde el primer elemento hasta el último.
>* Cada cuadrícula contiene:
>
>>* Poster de la película. 
>>* Nombre de la película.
>>* Año de lanzamiento de la película.
>
>* Al pasar el mouse encima aparecerá el resumen de la película
>* La UI es exactamente igual al prototipo de alta fidelidad (colores, tamaños de bloques,tipo de letra, tamaño de letra, imágenes, etc. )
>* La UI tiene un encabezado con los personajes del estudio Ghibli.

**Definición de Terminado.**

>* Todo el código está en la rama principal/main del repositorio.
>
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

![Historia de Usiario 1](/imgRM/H1.png)

#### [Historia de usuario 2]

Yo como usuario [visitante del sitio] quiero poder FILTRAR las películas según lo que me interesa ver en particular.

**Criterios de Aceptación. Edita de acuerdo a tu implementación exactamente**

>*  La UI contiene elementos para filtrar los datos (radio button).
>* Al seleccionar alguno de los elementos para filtrar, en la página aparecera solamente el resultado de ese filtrado.
>* Se tienen tres filtros: 
>>* Decada de lanzamiento.
>>* Director
>>* Productor. 

**Definición de Terminado.**

>* Hay un test unitario para la función de filtrado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

![Historia de Ususario 2](/imgRM/H2.png)

#### [Historia de usuario 3]

Yo como usuario [visitante del sitio] quiero poder ORDENAR las películas por titulo de manera alfabéticamente ascendente (A-Z) y descendente (Z-A).

**Criterios de Aceptación.**

>* La UI contiene elementos para ordenar los datos (radios).
>* Al seleccionar valores de los elementos para ordenar, en la parte inferior de la página aparece solamente el contenido ordenado según el criterio seleccionado.

**Definición de Terminado.**

>* Hay un test unitario para la función de ordenado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

![Historia de Usuario 3](/imgRM/H3.png)

#### [Historia de usuario 4]

Yo como usuario [visitante del sitio] quiero poder BUSCAR las películas según lo que me interesa ver en particular.

**Criterios de Aceptación.**

>* La UI contiene elementos para escribir el nombre del director, productor, titulo de la película o año de lanzamiento (entrada de texto) y poder hacer una búsqueda.
>* La UI contiene elementos para seleccionar si lo escrito en la entrada de texto es el nombre del director, productor, titulo de la película o año de lanzamiento (radio) para hacer una búsqueda.
>* Al escribir y seleccionar el nombre del director, productor, titulo o año de lanzamiento en la página aparecerá solamente el resultado de la búsqueda.

**Definición de Terminado.**

>* Hay un test unitario para la función de búsqueda. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho _code review_ del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

![Historia de Usuario 4](/imgRM/H4.png)

#### [Historia de usuario 5]

Yo como usuario [visitante del sitio] quiero poder ver estadísticas de las películas estrenadas por década.

**Criterios de Aceptación.**

>* La UI contiene elementos para pedir el porcentaje de películas realizadas en una década (radio button).
>* Al seleccionar alguno de los elementos para obtener el porcentaje de películas por década, en la página aparecerá solamente el resultado de esa estadística.
>* Se tienen tres 4 décadas para la estadística: 1980 a 1989, 1990 a 1999, 2000 a 2009, 2010 a 2019.


**Definición de Terminado.**

>* Hay un test unitario para la función de filtrado. Cobertura del 70%.
>* Todo el código está en la rama principal/main del repositorio.
>* La página está publicada en Github Pages y es accesible mediante un enlace/link/liga.
>* Cada estudiante del equipo ha hecho code review del código escrito por la(s) otra persona(s).
>* Se hacen pruebas de usabilidad con al menos 2 usuarias y se incorporan las mejoras identificadas en la versión.

### Pruebas unitarias

Creamos y aplicamos test unitarios a las funciones utilizadas en el proyecto para cerciorarnos de su funcionamiento.

## 3.Organización del Trabajo

* 

# Sets, Maps y Symbols

## Sets y sus caracteristicas

Un set te va a permitir crear una lista de valores sin duplicados, en el mundo laboral se ve pocas veces, muchas personas prefieren crear un arreglo, iterar sobre el arreglo y su un elemento ya existe en el arreglo no lo agregan pero es algo que se puede hacer de forma muy sencilla con un set. Algo muy importante es que un set cuando maneja un volumen grande de datos tiende a ser mas rapido que un objeto o que un arreglo.

Otro dato importante es que algunos metodos que existen en arreglos se pueden utilizar con sets pero no todos, ya que tiene su propia sintaxis igual que un string, un arreglo tiene sus propios metodos, digamos sus setMethods.

- Para agregar un elemento con set se debe escribir el nombre de la variable seguido de **.set()** (ejemplo: linea 3 / 01-app.js).
- En los arreglos tenemos el metodo lenght para saber el tamaño de un arreglo, en los sets tenemos **.size** (ejemplo: linea 8 / 01-app.js).
- Podemos comprobar si existe un elementos en el set con **.has()** (ejemplo: linea 10 / 01-app.js).
- Si queremos eliminar un elemento del carrito utilizamos **.delete()**, si agregamos un consolo log al setMethod nos retorna un true/false si lo elimino nos regresa true pero si no existe el elemento nos muestra false (ejemplo: linea 12 y 14 / 01-app.js).
- Para eliminar todos los elementos del set puedes poner **.claer()** (ejemplo: linea 16 / 01-app.js).

Una caracteristica muy importante de los sets es que son iterables (ejemplo: linea 18 / 01-app.js). También hay que recordad que si iteramos un arreglo podemos agregar al inicio la varible temporal y el index, pero los sets solo almacenan valores por lo tanto la llave o el index te va a regresar exactamente lo mismo (ejemplo: linea 20 / 01-app.js). En los sets también podemos pasarle un tercer parametro que seria al set que pertenece (ejemplo: linea 21 / 01-app.js).


### Ejemplo del uso de un set

Eliminar duplicados en un arreglo como este `const numeros = [10, 20, 30, 40, 50, 10, 20]` normalmente se haria un forEach y se revisaria si existe o no el duplicado y se eliminaria. Con un set solo se ocupa la siguiente sintaxis `const noDoplicados = new Set(numeros)` y asi hacemos un console log nos retorna el arreglo sin los elementos duplicados.

## ¿Qué es un WeakSet y en que se diferencia un Set?

Los sets debiles segun su traduccion son "debiles" y a diferencia de los sets estos no soportan todo tipo de valores como numeros, booleanos, etc. En el weakset solo le puedes agregar o pasar **objetos**, otra diferencia de los weakset es que no existe el metodo .size, y además no es iterable.

``` JAVASCRIPT
    // Unica forma valida
    const weakset = new WeakSet()

    const cliente = {
        nombre: 'Cesar',
        apellido: 'Garcia'
    }

    weakset.add(cliente)
```

## ¿Qué son los maps?

Los maps son listas ordenadas en llave y valor, piensa en ellos como un objeto pero no un objeto con una sola propiedad, es decir, una llave y un valor, y la llave y el valor puede sar cualquier tipo de datos puede ser un arreglo, un numero, etc. A diferencia de un objeto que puede ser solo 'nombre', 'balanca', etc. Mientras que en un map puede ser cualquier tipo de dato.

En cuanto a performance, los maps son mejores que un objeto son especialmente diseñados para agregar o quitar un elemento o también para recorrerlos, también cuando son mucho más grandes tienen mejor performance que un objeto.

- A diferencia de los sets para agregar un nuevo elemento a un map en este se utiliza **.set()** (ejemplo: linea 3 / 03-app.js).
- Se pueden usar los mismos metodos que en los sets.
- Para traer un valor desde el map podemos utilzar **.get()** (ejemplo: linea 13 / 03-app.js) de esa forma podemos traer los valores que existen en un map.
- En los maps también se puede iterar, al ser de llave y valor al escribir `(valor, index)` te retronaria el valor y la llave que hayas agregado.

Podemos agregar elementos desde los parentesis al iniciar el map y utilizar .set() para agregar elementos despues de iniciar el map como en las lineas 19 y 21 del archivo 03-app.js, además si escribirmos .set() de un elemento que ya existe lo que hace es reescribirlo.

## ¿Qué son los WeakMaps?

Los weakmaps son muy poco utilizados, normalmente se ven en las librerias pero hablando de forma interna. Para algo que sirven muy bien es para mantener una serie de datos como privados, pero tampoco se debe cuardar la contraseña de un usuario por ejemplo. A diferencia de set y map al inicializar un Symbol no utilizamos **new**.

- Solo acepta objetos
- No permite **.size**
- No se puede iterar
- No puedes conocer la extensión de un weakmap, por eso es bueno manteniendo una serie de datos como privados (ejemplo: 04-app.js).

## Symbols y sus caracteristicas

Una de las caracteristicas principales de los symbols es que nunca son son iguales (ejemplo: linea 1-9 / 05-app.js) incluso teniendo los mismos valores.

- Para agregar elementos a un simbol se deben de usar corchetes (ejemplo: linea 17 / 05-app.js).
- Igual que al agregar elementos, si queremos saber el contenido de un objeto debemos llamarlo con corchetes (ejemplo: linea 24 / 05-app.js).
- No se pueden iterar
- Se pueden agregar descripciones a cada symbol (ejemplo: linea 27 / 05-app.js).

### Ejemplos de usos

En realidad los symbols no se utilizan mucho pero si tienes valores que a la hora de iterar quieres que no se muestren puedes guardar esas propiedades como symbol
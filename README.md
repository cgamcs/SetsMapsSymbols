# Sets Maps y Symbols

## Sets y sus caracteristicas

Un set te va a permitir crear una lista de valores sin duplicados, en el mundo laboral se ve pocas veces, muchas personas prefieren crear un arreglo, iterar sobre el arreglo y su un elemento ya existe en el arreglo no lo agregan pero es algo que se puede hacer de forma muy sencilla con un set. Algo muy importante es que un set cuando maneja un volumen grande de datos tiende a ser mas rapido que un objeto o que un arreglo.

Otro dato importante es que algunos metodos que existen en arreglos se pueden utilizar con sets pero no todos, ya que tiene su propia sintaxis igual que un string, un arreglo tiene sus propios metodos, digamos sus setMethods.

- Para agregar un elemento con set se debe escribir el nombre de la variable seguido de **.set()** (ejemplo: linea 3 / 01-app.js).
- En los arreglos tenemos el metodo lenght para saber el tamaño de un arreglo, en los sets tenemos **.size** (ejemplo: linea 8 / 01-app.js).
- Podemos comprobar si existe un elementos en el set con **.has()** (ejemplo: linea 10 / 01-app.js).
- Si queremos eliminar un elemento del carrito utilizamos **.delete()**, si agregamos un consolo log al setMethod nos retorna un true/false si lo elimino nos regresa true pero si no existe el elemento nos muestra false (ejemplo: linea 12 y 14 / 01-app.js).
- Para eliminar todos los elementos del set puedes poner **.claer()** (ejemplo: linea 16 / 01-app.js).

Una caracteristica muy importante de los sets es que son iterables (ejemplo: linea 18 / 01-app.js). Tambien hay que recordad que si iteramos un arreglo podemos agregar al inicio la varible temporal y el index, pero los sets solo almacenan valores por lo tanto la llave o el index te va a regresar exactamente lo mismo (ejemplo: linea 20 / 01-app.js). En los sets tambien podemos pasarle un tercer parametro que seria al set que pertenece (ejemplo: linea 21 / 01-app.js).


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
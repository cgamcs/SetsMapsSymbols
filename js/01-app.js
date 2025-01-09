const carrito = new Set()

carrito.add('Camisa 1');
carrito.add('Camisa 2');
carrito.add('Camisa 3');
carrito.add('Camisa 4');

console.log(carrito.size)

console.log(carrito.has('Camisa 1'))

carrito.delete('Camisa 4')

console.log(carrito.delete('Camisa 4'))

// carrito.clear()

carrito.forEach( (producto, index, pertenece) => {
    // console.log(producto)
    // console.log(index)
    console.log(pertenece)
})

console.log(carrito)

// Del siguiente arreglo, eliminar los duplicados
const numeros = [10, 20, 30, 40, 50, 10, 20]

const noDoplicados = new Set(numeros)

console.log(noDoplicados)
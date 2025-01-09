const weakset = new WeakSet()

const cliente = {
    nombre: 'Cesar',
    apellido: 'Garcia'
}

// Valor no valido para un weakset
// const nombre = 'Cesar'

weakset.add(cliente)

console.log(weakset)
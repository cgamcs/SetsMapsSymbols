const sym = Symbol('1')

const sym2 = Symbol('1')

if(sym === sym2) {
    console.log('Son iguales')
} else {
    console.log('Son diferentes')
}

const nombre = Symbol()
const apellido = Symbol()

const persona = {}

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Cesar'
persona[apellido] = 'Garcia'

persona.tipoCliente = 'Premium'
persona.saldo = 300

console.log(persona)
console.log(persona[nombre])

// Definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente')

const cliente = {}

cliente[nombreCliente] = 'Pedro'

console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)
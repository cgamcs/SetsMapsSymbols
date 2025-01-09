const cliente = new Map()

cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)

console.log(cliente)

console.log(cliente.size)

console.log(cliente.has('nombre'))

console.log(cliente.get('nombre'))

cliente.delete('saldo')

console.log(cliente.has('saldo'))

const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'No definido'] ])

paciente.set('dr', 'Dr asignado')

paciente.set('nombre', 'Cesar')

console.log(paciente)

paciente.forEach( (datos, index) => {
    console.log(`${index}:`, datos)
})
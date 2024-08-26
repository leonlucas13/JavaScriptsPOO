const newSet = new Set (['a','b','c'])
console.log(newSet)

const newSetN = new Set()
newSetN.add('Este ')
newSetN.add('texto ')
newSetN.add('texto ') // este valor no lo muestra ni lo cuenta
newSetN.add('viene de un set')

let text ='';

newSetN.forEach(val => {
    text += val
})

document.getElementById('write').innerHTML = text

console.log(newSetN)
console.log(newSetN.size)


const array = ['a','a','b','b','c','d'] //esto es un array

console.log(array)
console.log(array.length)

const sets = new Set(array) //esto es un set
console.log(sets)

const array2 = Array.from(sets)
console.log(array2)

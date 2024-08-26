
//El spread operator se escribe con 3 puntos.
const array1 =[1,2,3]
const array2 = [...array1, 4,5,6]

console.log(array2)

const arrayOriginal = [1,2,3]
const copiaArray =[...arrayOriginal]

console.log(copiaArray === arrayOriginal)

const arraysA = [1,2,3]
const arraysB = [4,5,6]

const arraysCombinado =[...arraysA, ...arraysB]
console.log(arraysCombinado)

const numbers = [5,2,3,4,5]
function sum (a,b,c,d) {
    return a + b +c+ d
}

const result = sum (...numbers)
console.log(result)
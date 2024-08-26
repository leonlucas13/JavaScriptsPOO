const object1 = {
    a: 1,
    b: 2
}

const object2 ={
    ...object1
}

console.log(object2)
console.log(object1 === object2) // es una copia no es el original

const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 3,
    d: 4
}

const combObj = {...obj1, ...obj2}
console.log(combObj)

const orginalObj = {a:1 , b:2}
const modiObj = {...orginalObj, c:3, d:4}

console.log(orginalObj)
console.log(modiObj)
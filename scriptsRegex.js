//patron/modificadores

const text = 'Estudia en DigitalHouse'
const res = text.search('DigitalHouse')
const res1 = text.search(/digitalhouse/i)

console.log(res)
console.log(res1)

//Modificadores disponibles
// i (ignorar mayusculas y minisculas)
// g (busqueda globalmente)
// m (busqueda multilinea))
// d (que coincida  al comienzo y final)

const text2 = 'Estudia en DigitalHouse con Ricardo'
const res3 = text2.replace('Ricardo', 'Sergi Code')
const res4 = text2.replace(/ricardo/i, 'sergi Code')

console.log(res3)
console.log(res4)


const text4= 'HTML, CSS, JavaScript y ReactJs'
const num= '01 02 03 04 5 6 7 8 9'
const res5= text4.match(/[s]/ig)
const res6= num.match(/[037]/ig)
const res7= num.match(/[0-9]/ig)
const res8= text4.match(/[a-z][A-Z]/g)

console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)


const pattern = /[A-Z]/

console.log(pattern.test(text))
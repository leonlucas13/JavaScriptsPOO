import {name, age, Job} from "./person.js"
import message from "./person.js"

console.log(name, age)
console.log(Job)
console.log(message())

document.getElementById('res').innerHTML = message();
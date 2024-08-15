import { assert, report } from "./helpers/assert_report.js";

function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, key) => {
      report("Reading " + key)
      return target[key]
    },
    set: (target, key, value) => {
      report("Writing value " + value + " from " + key)
      target[key] = value
      return true
    }
  })
}

// let ninja =  new Array('Yoshi', 'Hattori', 'Kuma')
// ninja = makeLoggable(ninja)
// ninja.key
// ninja[ninja.length + 1] = 'Soshi'
// console.log(ninja);


// ***********************************************************************
// const ninjas =  new Array('Yoshi', 'Hattori', 'Kuma', 'Sushi')
// const removeNinja = ninjas.splice(1, 2, 'Miki', 'Koto')
// console.log(ninjas)
// console.log(removeNinja)

// ***********************************************************************

const ninjas = [
  {name: 'Yoshi', weapons: 'katana'},
  {name: 'Soshi', weapons: 'sureken'},
  {name: 'Hattori'}
]
const result1 = ninjas.find(ninja => ninja.weapons === 'katana')
console.log(result1)
const result2 = ninjas.filter(ninja => 'weapons' in ninja)
console.log(result2)
const result3 = ninjas.sort((ninja1, ninja2) => {
  if(ninja1.name > ninja2.name) {return 1}
  if(ninja1.name < ninja2.name) {return -1}
  return 0
})
console.log(result3)

const arr = [1, 3, 2, 5, 4]
console.log(arr.sort((a, b) => b - a))


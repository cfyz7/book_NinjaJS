import { assert, report } from "./helpers/assert_report.js";

// const ninjas = new Map();
// const ninja1 = {name: 'Hattori'}
// const ninja2 = {name: 'Soshi'}
// const ninja3 = {name: 'Yoshi'}

// ninjas.set(ninja1, {born: 'Osaka'})
// ninjas.set(ninja2, {born: 'Tokyo'})
// console.log(ninjas)
// console.log(ninjas.get(ninja1))
// console.log(ninjas.has(ninja3))
// console.log(ninjas.clear())

// *******************************************************
const ninjas = new Set(['Kuma', 'Hattori', 'Sushi'])
const samurai = new Set(['Hattori', 'Soshi', 'Tomo']);
// Пересечение
const result = new Set([...ninjas].filter((ninja) => samurai.has(ninja)))
console.log(result)
// Разность
const result2 = new Set([...ninjas].filter((ninja) => !samurai.has(ninja)))
console.log([...result2])
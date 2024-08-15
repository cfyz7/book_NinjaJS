import { assert, report } from "./helpers/assert_report.js";

// function Ninja() {
//   let _skillLevel = 0;
//   Object.defineProperty(this, 'skillLevel', {
//     get: () => {
//       report('Getting skillLevel value')
//       return _skillLevel
//     },
//     set: (value) => {
//       if(!Number.isInteger(value)) {
//         throw new TypeError('Skill level should be a number')
//       }
//       _skillLevel = value
//       report('Modufying skillLevel property')
//     }
//   });
// }
// const ninja = new Ninja()
// assert(typeof ninja._skillLevel === 'undefined', 'We cannot access a private property')
// ninja.skillLevel = 10;
// const skill = ninja.skillLevel
// console.log(skill)
// console.log(ninja)

// *****************************************************************************************************************

// class NinjaCollection {
//   constructor() {
//     this.ninjas = ['Yoshi', 'Hattori']
//   }
  
//   get name() {
//     report('Getting name ninja')
//     return this.ninjas[0]
//   }

//   set name(value) {
//     report('Setting name ninja')
//     this.ninjas[0] = value
//   }
// }
// const ninjaCollection = new NinjaCollection();
// ninjaCollection.name = 'Kostya'
// ninjaCollection.name
// console.log(ninjaCollection)


// ************************************************************************************************************
// const emperor = {name: "Komei"};
// const representative = new Proxy(emperor, {
//   get: (target, key) => {
//     report("Reading " + key + " trough a proxy");
//     return key in target ? target[key] : "Don't bother the emperor"
//   },
//   set: (target, key, value) => {
//     report("Writing " + key + " trough a proxy")
//     target[key] = value;
//     return true;
//   }
// })
// representative.name
// representative.nickname = "Kostya"
// console.log(representative)
// console.log(emperor)

// *************************************************************************************************************

// function makeLoggable(target) {
//   return new Proxy(target, {
//     get: (target, key) => {
//       report("Reading " + key)
//       return target[key]
//     },
//     set: (target, key, value) => {
//       report("Writing value " + value + " from " + key)
//       target[key] = value
//       return true
//     }
//   })
// }

// let ninja = {name: "Yoshi"};
// ninja = makeLoggable(ninja);
// ninja.name
// ninja.weapon = 'sword'
// console.log(ninja)

// *****************************************************************************************************

// function isPrime(number) {
//   if(number < 2) {return false}
//   for(let i = 2; i < number; i++) {
//     if(number % i === 0) {
//       return false
//     }
//   }
//   return true
// }

// isPrime = new Proxy(isPrime, {
//   apply: (target, thisArg, args) => {
//     console.time("isPrime");
//     const result = target.apply(thisArg, args)
//     console.timeEnd("isPrime")
//     return result
//   }
// })

// isPrime(1299837)

// *******************************************************************************************************

function Folder() {
  return new Proxy({}, {
    get: (target, key) => {
      report("Reading " + key);
      if (!(key in target)) {
        target[key] = new Folder
      }
      return target[key]
    }
  })
}

const rootFolder = new Folder()
rootFolder.ninjasDir.firstNinjasDir.ninjaFile = 'yoshi.txt'
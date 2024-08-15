import { assert, report } from "./helpers/assert_report.js";
// report("At code start");

// const ninjaDelayedPromise = new Promise((resolve, reject) => {
//   report('ninjaDelayedPromise executor');
//   setTimeout(() => {
//     report('Resolving ninjaDelayedPromise')
//     resolve('Hattori')
//   }, 1000)
// })

// ninjaDelayedPromise.then((ninja) => {
//   assert(ninja === 'Hattori', 'ninjaDelayedPromise resolve handled with Hattori')
// })

// const ninjaImmediatePromise = new Promise((resolve, reject) => {
//   report('ninjaImmediatePromise executor. Imediate resolve');
//   resolve('Yoshi')
// })

// ninjaImmediatePromise.then((ninja) => {
//   assert(ninja === 'Yoshi', 'ninjaImmediatePromise resolve handled with Yoshi')
// })

// report('At code end')


// ***************************************************************************************************


function getJSON(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      try {
        if(this.status === 200) {
          resolve(JSON.parse(this.response))
        } else {
          reject(this.status + ' ' + this.statusText)
        }
      } catch(e) {
        reject(e.message);
      }
    };
    request.onerror = function() {
      reject(this.status + ' ' + this.statusText)
    }
    request.send();
  });
}

// getJSON('./data/ninjas.json')
//   .then(data => { 
//     assert(data !== null, 'Ninja obtains');
//     assert(data.ninjas[0].Yoshi === "24 years", 'We get Yoshi')
//     report(JSON.stringify(data))
//   })
//   .catch(e => report("Shouldn't be here " + e))


// ***************************************************************************************************

// Promise.all([
//   getJSON('data/ninjas.json'),
//   getJSON('data/plan.json')
// ])
//   .then((results) => {
//     const ninjas = results[0], plans = results[1];
//     assert(ninjas !== undefined && plans !== undefined, 'The plan is ready!')
//   })
//   .catch((err) => report(err, 'Problems'))

//  **************************************************************************************************

// (async function() {
//   try {
//     const data = await getJSON('data/ninjas.json');
//     const result = data.ninjas
//       .reduce((acc, el) => {
//         const name = Object.keys(el)
//         acc += el[name] + ' '
//         return acc
//       },'').trim().split(' ')
//       console.log(Number(result[0]) + Number(result[2]))
//   } catch(e) {
//     console.log("Error: ", e)
//   }
// }) ()

function* Gen(val) {
  val = yield val * 2;
  yield val
}

let gen = Gen(2);
let a1 = gen.next(3).value
let a2 = gen.next(5).value

console.log(a1)
console.log(a2)
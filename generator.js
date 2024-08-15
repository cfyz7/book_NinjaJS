import { assert, report } from "./helpers/assert_report.js";
// function* WeaponGenerator() {
//   yield 'Katana'
//   yield 'Wakidzashi'
//   // yield 'Kusarigama'
// }

// // for (let weapon of WeaponGenerator()) {
// //   assert(weapon !== undefined, weapon)
// // }

// const weaponsIterator = WeaponGenerator()
// console.log(weaponsIterator)
// const result1 = weaponsIterator.next()

// const result2 = weaponsIterator.next()
// assert(typeof result2 === 'object'
//   && result2.value === 'Wakidzashi'
//   && !result2.done,
//   'Wakidzashi received'
// )
// const result3 = weaponsIterator.next()
// assert(typeof result3 === 'object'
//   && result3.value === undefined
//   && result3.done,
//   'There are not more results'
// )

//********************************************************************************************************
// function *IdGenerator() {
//   let id = 0;
//   while(true) {
//     yield ++id
//   }
// }

// const idIterator = IdGenerator();

// const ninja1 = {id: idIterator.next().value}
// const ninja2 = {id: idIterator.next().value}

// assert(ninja1.id === 1, 'First ninja')
// assert(ninja2.id === 2, 'Second ninja')
// ********************************************************************************************************

// function* DomTraversal(element) {
//   yield element;
//   element = element.firstElementChild;
//   while (element) {
//     yield* DomTraversal(element);
//     element = element.nextElementSibling;
//   }
// }

// const subTree = document.getElementById("subTree");
// for(let element of DomTraversal(subTree)) {
//   assert(element !== null, element.nodeName);
// }

// *********************************************************************************************************

function* ninjaGenerator(action) {
  try {
    const imposter = yield ('Hattori ' + action);
    yield (imposter + " " + action)
    fail("the expected exception didn't occur")
  }
  catch(e) {
    assert(e === 'Catch this', 'Aha! We caught an exception')
  }
}
const ninjaIterator = ninjaGenerator('skulk');
console.log(ninjaIterator)

const result1 = ninjaIterator.next()
assert(result1.value === 'Hattori skulk', 'We got Hattori')

const result2 = ninjaIterator.next('Sushi')
assert(result2.value === 'Sushi skulk', 'We got Sushi')

ninjaIterator.throw('Catch this')
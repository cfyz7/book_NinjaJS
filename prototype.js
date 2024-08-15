import { assert, report } from "./helpers/assert_report.js";
// const ninja1 = {skulk: true};
// const ninja2 = {creep: true};
// const ninja3 = {dodge: true};

// Object.setPrototypeOf(ninja1, ninja2)
// Object.setPrototypeOf(ninja2, ninja3)

// console.log(ninja1)


// ******************************************************************************************
// function Ninja() {
//   this.swung = false;
//   this.swingSword = function() {
//     return !this.swung
//   }
// };
// Ninja.prototype.swingSword = function() {
//   return this.swung
// };

// const ninja2 = new Ninja();
// console.log(ninja2)

// ******************************************************************************************

class Person {
  constructor(name) {
    this.name = name
  }

  dance() {
    return true
  }
}

class Ninja extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  swingSword() {
    return true
  }

  static compare(ninja1, ninja2) {
    return ninja1.level - ninja2.level
  }
}

const ninja1 = new Ninja('Yoshi', 4);
const ninja2 = new Ninja('Hattori', 3)
console.log(ninja1)
assert(ninja1 instanceof Ninja, "Our ninja is a Ninja")
assert(ninja1 instanceof Person, "Our ninja is a Person")
assert(ninja1.name = "Yoshi", 'named Yoshi')
assert(Ninja.compare(ninja1,ninja2) > 0, 'Thi Ninja class can do the comparison!')



// **********************************************************************************************
// function Person() {}
// Person.prototype.getName = function(name) {
//   return name
// }
// function Ninja() {}
// Ninja.prototype.getName = function(name) {
//   return name + 'Super!'
// }
// Ninja.prototype = new Person()

// const ninja = new Ninja()
// Object.defineProperty(ninja, "dance", {
//   configurable: false,
//   enumerable: false,
//   value: true
// })
// console.log(ninja.getName('Yoshi'))

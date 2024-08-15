import { assert, report } from "./helpers/assert_report.js";
const expression = /<(\w+)>(.+)<\/\1>/ig
const str = 'consoloe.log(<div>Hello</div>)';
// console.log(expression.test(str))

// function findClassInElements(className, type) {
//   const elems = document.getElementsByTagName(type || "*");
//   //<div class="ninja">Hello</div>
//   console.log(elems)
//   const regex = new RegExp("(^|\\s)" + className + "(\\s|$)")
//   const result = [];
//   for (let i = 0, length = elems.length; i < length; i++) {
//     if(regex.test(elems[i].className)) {
//       result.push(elems[i])
//     }
//   }
//   console.log(result)
//   return result
// }
// assert(findClassInElements('ninja', 'div'), 'find ninja')
// assert(findClassInElements('samurai', 'div'), 'find samurai')

// *************************************************************************************************************************

// function getTranslateY(elem) {
//   const transformValue = elem.style.transform;
//   if(transformValue) {
//     const match = transformValue.match(/translateY\((.+)\)/);
//     return match ? match[1] : ""
//   }
//   return ""
// }
// const samurai = document.getElementById('samurai')
// assert(getTranslateY(samurai) === '15px', 'We have translateY value')

// const html = '<b class="hello">Hello</b> <i>world!</i>';
// const pattern = /<(\w+)([^>]*)>(.*?)<\/\1>/g;
// let match = pattern.exec(html)
// console.log(match)
// match = pattern.exec(html)
// console.log(match)

// *****************************************************************************************************************

function upper(all, letter) {return letter.toUpperCase()}
let string = "border-bottom-width"
console.log(string.replace(/-(\w)/g, upper))
assert("border-bottom-width".replace(/-(\w)/g, upper) === 'borderBottomWidth', "Camel cased")

const text = "\u5FCD\u8006\u30d1\u30FC"
const matchAll = /[\w\u0080-\uFFFF_-]+/
console.log(text.match(matchAll))

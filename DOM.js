import { assert, report } from "./helpers/assert_report.js";

// function fetchComputedStyle(elem, property) {
//   const computedStyles = getComputedStyle(elem);
//   if(computedStyles) {
//     property = property.replace(/([A-Z])/g, '-$1').toLowerCase()
//     return computedStyles.getPropertyValue(property)
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const div = document.getElementById('test');
//   div.setAttribute('class','ninja Hattori')
//   div.style.borderWidth = '4px'
//   console.log(fetchComputedStyle(div, 'font-size'))
// });


// **********************************************************************************************************


// const rowCount = 20000;
// const devideInto = 4;
// const chunkSize = rowCount / devideInto;
// let iteration = 0;

// const table = document.getElementsByTagName('tbody')[0];
// setTimeout(function generateRows() {
//   const base = chunkSize * iteration;
//   for (let i = 0; i < chunkSize; i++) {
//     const tr = document.createElement('tr')
//     for (let t = 0; t < 6; t++) {
//       const td = document.createElement('td');
//       td.appendChild(document.createTextNode((i + base) + ',' + t + ',' + iteration))
//       tr.appendChild(td)
//     }
//     table.appendChild(tr)
//   }
//   iteration++
//   if(iteration < devideInto) 
//     setTimeout(generateRows, 0)
// }, 0)
 
const table = document.getElementsByTagName('tbody')[0];

function makeTable() {
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr')
    for (let t = 0; t < 6; t++) {
      const td = document.createElement('td');
      td.appendChild(document.createTextNode(i + ',' + t))
      td.style.border = "solid 1px black"
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
}
table.addEventListener('click', function(event) {
  if(event.target.tagName.toLowerCase() === 'td') {
    event.target.style.backgroundColor = 'yellow'
    console.log(event.target)
  }
})

// *************************************************************************************
const button = document.getElementById('clickMe');

function triggerEvent(target, eventType, eventDetail) {
  const event = new CustomEvent(eventType, {
    detail: eventDetail
  });
  target.dispatchEvent(event)
}

function performAjaxOperation() {
  triggerEvent(document, 'ajax-start', {url: 'my-url'});
  setTimeout(() => {
    triggerEvent(document, 'ajax-complete')
  }, 5000)
}

button.addEventListener('click', () => {
  button.style.display = 'none'
  performAjaxOperation()
});

document.addEventListener('ajax-start', (e) => {
  document.getElementById('loading').style.display = 'inline-block'
})

document.addEventListener('ajax-complete', (e) => {
  document.getElementById('loading').style.display = 'none'
  makeTable()
})

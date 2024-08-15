import { assert, report } from "./helpers/assert_report.js";


function animateIt(elementId) {
  var elem = document.getElementById(elementId)
  var tick = 0;
  var timer = setInterval(function() {
    if (tick < 100) {
      var position = tick + 'px';
      elem.style.padding = position;
      tick++;
    } else {
      clearInterval(timer)
      assert(tick === 100, "Tick accessed via a closure.")
      assert(elem, "Element also accessed via a closure")
      assert(timer, "Timer reference also obtained via a closure.")
    }
  }, 10);
}
animateIt('box1')

// ****************************************************************************************************************

const MouseCounterModule = function() {
  let numClick = 0;
  const handleClick = () => {
    alert(++numClick)
  };

  return {
    countClick: () => {
      document.addEventListener('click', handleClick)
    }
  };
} ();

(function(module) {
  let numScrolls = 0;
  const handleScroll = () => {
    alert(++numScrolls)
  }
  module.countScroll = () => {
    document.addEventListener("wheel", handleScroll)
  };
}) (MouseCounterModule)

MouseCounterModule.countClick()
MouseCounterModule.countScroll()
console.log(MouseCounterModule)



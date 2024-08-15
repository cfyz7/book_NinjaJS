import { assert, report } from './helpers/assert_report.js'

const store = {
  nextID: 1,
  cache: {},
  add: function(fn) {
    if (!fn.id) {
      fn.id = this.nextID++;
      this.cache[fn.id] = fn;
      return true
    }
  }
}
function ninja() {}
function samurai() {}

window.onload = function() {
  assert(store.add(ninja), 'Function was safelly added.')
  assert(!store.add(ninja), 'But it was only added once.')
  assert(store.add(samurai), 'Function samurai is added.')
  assert(store.add(samurai), 'Function samurai is added.')
}

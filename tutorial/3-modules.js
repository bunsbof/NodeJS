// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minium)
const names = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('cac')
sayHi(names.john)
sayHi(names.peter)

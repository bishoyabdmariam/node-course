const validator = require('validator')
const notes = require('./notes.js')



console.log(validator.isEmail('bosh@.com'))

console.log(validator.isURL('https://chat.openai.com/c/70ffe8a6-7173-40ef-9a7e-e0b70cc851d2'))
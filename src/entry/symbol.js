const test = Symbol.for('test')
const test2 = Symbol.for('test')
console.log(test === test2)

const pd = Symbol('pd')
const pd2 = Symbol.for('pd')
console.log(pd2 === pd)

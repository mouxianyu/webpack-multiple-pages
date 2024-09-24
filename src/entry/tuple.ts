let x: [string, number, boolean]

x = ['dd', 1, true]
x = ['cc', 1, false]

let y: [...any]

y = ['ddd', 2]
console.log(y)

const fun1 = (x: number): void => {}

function fun2(x: number): void {}

const fun3: (x: number) => void = x => {}

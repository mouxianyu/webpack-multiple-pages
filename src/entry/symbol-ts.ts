class PickFun<T extends Record<any, unknown>> {
    getKeys(obj: T): unknown[] {
        return [...Object.getOwnPropertyNames(obj), ...Object.getOwnPropertySymbols(obj)].filter(
            key => typeof obj[key as any] === 'function'
        )
    }
}

const obj = {
    name: 'hhh',
    getName() {
        return this.name
    },
    age: 10,
    [Symbol('getAge')]() {
        return this.age
    }
}

console.log(new PickFun().getKeys(obj))

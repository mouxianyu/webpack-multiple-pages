import '@/scss/index.scss'

class PickFunKey<T extends Record<any, any>> {
    pickFunKeys(obj: T): any[] {
        return Reflect.ownKeys(obj).filter(key => typeof obj[key as any] === 'function')
    }
}

function test(str: string): string {
    let test: any = 1
    test = String(test)
    return test
}

const obj: Record<any, any> = {
    name: 'test',
    age: 20,
    [Symbol('color')]: () => {
        console.log('color')
    },
    test() {
        console.log('test')
    }
}

const keys = new PickFunKey().pickFunKeys(obj)

console.log(keys)
for (const key of keys) {
    console.log(typeof key)
}

const el = document.createElement('p')
el.innerText = 'Typescript'
document.body.append(el)

function test2(a: string | number): void {
    if (typeof a === 'string') {
        console.log('string')
    } else if (typeof a === 'number') {
        console.log('number')
    } else {
        throw new Error()
    }
}

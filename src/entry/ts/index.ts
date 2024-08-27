import '@/scss/test/index.scss'

class PickFunKey<T extends Record<any, any>> {
    pickFunKeys(obj: T): any[] {
        return Reflect.ownKeys(obj).filter(key => typeof obj[key as keyof T] === 'function')
    }
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

const el = document.createElement('p')
el.innerText = 'Typescript'
document.body.append(el)

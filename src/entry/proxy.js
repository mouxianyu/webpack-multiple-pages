const arr = [1, 2, 3]

const proxy = new Proxy(arr, {
    get(target, property, receiver) {
        console.log('读取' + property)
        console.log(this)
        return target[property]
    },
    set(target, property, value, receiver) {
        console.log('设置' + property)
        console.log(this)
        target[property] = value
    }
})

proxy[0] = 10
console.log(proxy[0])
console.log(arr)
console.log(proxy)

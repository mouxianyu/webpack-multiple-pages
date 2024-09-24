const arr = [0]

Object.defineProperty(arr, 1, {
    get() {
        console.log('获取索引0的值')
        return arr[0]
    },
    set(val) {
        console.log('设置索引0的值为' + val)
        arr[0] = val
    }
})

arr[1] = 'test'
console.log(arr[1])

console.log(arr)

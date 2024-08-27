Array.prototype.test = function (index) {
    if (index <= 0) index = this.length + index
    return this[index]
}

const array = [1, 3, 4, 5, 44, 9]

console.log(array.test(1))

const pwd = Symbol('pwd')
const age = Symbol()
class User {
    name: string;
    [pwd]: string
    private password: string;
    [age]: number

    constructor(name: string, password: string, useAge: number) {
        this.name = name
        this.password = password
        this[age] = useAge
        this[pwd] = password
    }
}

const user = new User('xiaoming', '231323fdafsf', 22)
console.log(user[age])

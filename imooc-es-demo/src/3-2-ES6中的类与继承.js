// 类
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
        this._sex = -1
    }
    // gex/set:设置属性，可以实现一些业务逻辑操作，可以对属性的读写进行一些拦截操作
    // 如果只是constructor就做不到
    // eg.0:female 1:male
    get sex() {
        if (this._sex === 1) {
            return 'male'
        } else if (this._sex === 0) {
            return 'female'
        } else {
            return 'error'
        }
    }
    set sex(val) {
        if (val === 0 || val === 1) {
            this._sex = val
        }
    }
    // 普通方法
    showName() {
        console.log(this.name)
    }
    // 静态方法
    static getCount() {
        return 5
    }
}
// 静态属性
People.count = 9

let p1 = new People('mys', 18)
console.log(p1)
p1.sex = 1
console.log(p1.sex)
console.log(People.getCount()) // 静态方法只能用类来调用
console.log(People.count)


// 继承
class Coder extends People {
    constructor(name, age, company) {
        super(name, age); // 调用父类构造函数
        this.company = company // 子类自身的属性
    }
    showCompany() {
        console.log('company:' + this.company)
    }
}
let c1 = new Coder('mys', 18, 'imooc')
console.log(c1)
c1.showName() // 子类调用父类的方法
c1.showCompany() // 子类自身的方法
c1.sex = 0 // 子类调用父类的set get设置的属性
console.log(c1.sex)
console.log(Coder.getCount()) // 子类也可以调用父类的静态方法
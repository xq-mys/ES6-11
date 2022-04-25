// 1.类
// 构造函数
function People(name, age) {
    // console.log(this) // this指向当前实例化的对象
    // 实例属性
    this.name = name
    this.age = age
    People.count++
}

// 静态属性
People.count = 0
//静态方法
People.getCount = function () {
    console.log(this) // this指向当前构造函数
    console.log('当前人数：' + People.count)
}

// 方法不定义在构造函数中，而是定义在类的原型中
// 实例方法
People.prototype.showName = function () {
    console.log('名字：' + this.name)
}
let p1 = new People('mys', 18)
console.log(p1)
p1.showName()
console.log(People.count)
console.log(People.getCount())

// 静态属性通过类来获取
// 静态属性定义在类中，实例属性定义在构造函数中


//静态方法
console.log(Math.max(4, 5))

console.log('------------------')

// 2.类的继承 (组合继承)
//父类
function Animal(name) {
    this.name = name
}
Animal.prototype.showName = function () {
    console.log('名字:' + this.name)
}

//子类
function Dog(name, color) {
    Animal.call(this, name) // 继承属性
    this.color = color
}
// 继承方法
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog

let d1 = new Dog('wangcai', 'white')
console.log(d1)
d1.showName()

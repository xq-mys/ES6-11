// Symbol 独一无二
// 1. 声明方式
// 1) 直接声明
// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1) // Symbol()
// console.log(s1 === s2) // false

// 2) 可以传递一个字符串作为参数，用来描述
// let s1 = Symbol('foo')
// console.log(s1) // Symbol(foo)

// 3) 如果传递一个对象，会调用对象的toString()方法，将其转成字符串，再生成Symbol
// const obj = {
//     name: 'mys',
//     toString() {
//         return this.name
//     }
// }
// let s = Symbol(obj)
// console.log(s) // Symbol(mys)

// 1.description
// let s = Symbol('foo')
// console.log(s.description) // foo

// 2.for
// 通过Symbol.for()声明的是全局的
// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2) // true
//
// function foo() {
//     return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y) // true

// 3.kekFor
// 返回一个已经登记的Symbol的key
// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1)) // undefined
// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2)) // foo

// const grade = {
//     张三: {address: 'xxx', tel: '111'},
//     李四: {address: 'yyy', tel: '222'},
//     李四: {address: 'zzz', tel: '333'}
// }
// console.log(grade)
// // 张三: {address: 'xxx', tel: '111'}
// // 李四: {address: 'zzz', tel: '333'} 会覆盖上一个李四

// 对象的key也可以是一个变量
// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//     [stu1]: {address: 'yyy', tel: '222'},
//     [stu2]: {address: 'zzz', tel: '333'}
// }
// console.log(grade) // 李四: {address: 'zzz', tel: '333'} 还是被覆盖

// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//     [stu1]: {address: 'yyy', tel: '222'},
//     [stu2]: {address: 'zzz', tel: '333'}
// }
// console.log(grade)
// // Symbol(李四): {address: 'yyy', tel: '222'}
// // Symbol(李四): {address: 'zzz', tel: '333'}
// 利用Symbol声明不会被覆盖
// 利用Symbol声明变量，作为对象的key，保证key不重复

// const sym = Symbol('imooc')
// class User {
//     constructor(name) {
//         this.name = name
//         this[sym] = ' imooc.com'
//     }
//     getName() {
//         return this.name + this[sym]
//     }
// }
// const user = new User('mys')
// console.log(user.getName()) // mys imooc.com
//
// for (let key in user) {
//     console.log(key) // name 无法遍历Symbol声明的变量，即可以用Symbol声明来隐藏变量
// }

// for (let key in Object.keys(user)) {
//     console.log(key) // 0
// }

// for (let key of Object.getOwnPropertySymbols(user)) {
//     console.log(key) // Symbol(imooc) 只能获取Symbol
// }
//
// for (let key of Reflect.ownKeys(user)) {
//     console.log(key) // name  Symbol(imooc) 能够获取普通属性和Symbol属性
// }

// function getArea(shape) {
//     let area = 0
//      switch (shape) {
//          case 'Triangle':
//              area = 1
//              break
//          case 'Circle':
//              area = 2
//              break
//      }
//      return area
// }
// console.log(getArea('Triangle')) // Triangle耦合，魔术字符串

//应用场景：消除魔术字符串
const shapeType = {
    triangle: Symbol(),
    circle: Symbol
}
function getArea(shape) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = 1
            break
        case shape.circle:
            area = 2
            break
    }
    return area
}
console.log(getArea(shapeType.triangle))


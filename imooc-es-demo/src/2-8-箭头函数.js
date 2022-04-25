// es5
// 函数声明:会有函数的预定义
// function sum(x, y) {
//     return x + y
// }
// console.log(sum(4, 5))

// 函数表达式
// let sum = function (x, y) {
//     return x +y
// }
// console.log(sum(4, 5))

// es6
// 箭头函数：左边参数，右边函数体
// let sum = (x, y) => {
//     return x + y
// }
// 简写
// let sum = (x, y) => x + y
// console.log(sum(4, 5))

// let x = x => x
// //等价于下面：
// let x = function (x) {
//     return x
// }

let oBtn = document.getElementById('#btn');
// oBtn.addEventListener('click', function () {
//     setTimeout(function () {
//         console.log(this) // window 当前对象
//     }, 1000)
// })

// 三个方法可以改变this指向：call apply bind
// oBtn.addEventListener('click', function () {
//     console.log(this) // button
//     setTimeout(function () {
//         console.log(this) // button
//     }.bind(this), 1000)
// })

// 使用箭头函数
// 1. 在箭头函数中，this指向的是定义时的对象
// 箭头函数中本质上没有this，而是继承了其上层的this
// oBtn.addEventListener('click', function () {
//     setTimeout (() => {
//         console.log(this) // 此处外层就是oBtn
//     })
// })

// 2. 箭头函数不可以当做构造函数
// 类
// function People(name, age) {
//     // this.name:属性名称 name:传递的参数
//     this.name = name
//     this.age = age
// }
// let People = (name, age) => {
//         this.name = name
//         this.age = age
//     }
// let p1 = new People('mys', 18)
// console.log(p1) // People {} 空的，在浏览器中运行会报错：People is not a constructor

//eval函数：

// 3. 箭头函数中不可以使用arguments对象
// let foo = () => {
//     console.log(arguments) // 浏览器中运行报错：arguments is not defined
// }
// foo(1, 2, 3)
//箭头函数可以使用...args去代替arguments参数来使用
let foo = (...args) => {
    console.log(args) // [1, 2, 3]
}
foo(1, 2, 3)
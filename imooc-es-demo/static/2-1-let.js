// delete 删除对象的属性，并不能删除变量
// var a = 5//变量
// b = 6//隐藏的对象
// //早期，js将顶层对象属性和全局变量挂钩，污染了全局变量
// console.log(window.a)
// console.log(window.b)
// delete a //删除失败
// delete b //删除成功
// console.log(a)
// console.log(b) //报错undefined

//1.不属于顶层对象window
// let a = 5
// console.log(a)
// console.log(window.a) //undefined

//2.不能重复声明
// let a = 5
// let a = 6 //报错：Uncaught SyntaxError: Identifier 'a' has already been declared

//3.不能变量提升
// console.log(a) //2-1-let.js:22 Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 5

//4.暂时性死区：防止在变量声明之前使用变量，使代码更加安全
// var a = 5
// if (true) {
//     a = 6 //报错,在{}作用域内，没有声明就使用
//     let a
// }
//较隐蔽的暂时性死区
// function foo(a = b, b = 2) {
//     console.log(a, b) //报错：b在没有声明的情况下就使用了
// }
// foo()

//5.块级作用域
// for (let i = 0; i < 3; i++) {
//     console.log('循环内：' + i)
// }
// console.log('循环内：' + i) //报错，let有块级作用域，此处i没有声明

// if (true) let a = 5 //Lexical declaration cannot appear in a single-statement context
// let有块级作用域，必须写在{}内

//6.面试题
// for (var i = 0; i < 3; i ++) {
//     setTimeout(function () {
//         console.log(i) //3个3
//     }, 100)
// }
//setTimeout异步执行，js有事件循环机制，会等到主线程执行完成，异步操作才开始执行
// for循环是同步操作，setTimeout会等for循环执行完毕才开始执行，此时i=3

// for (var i = 0; i < 3; i ++) {
//     //闭包
//     (function (j) {
//         setTimeout(function () {
//             console.log(j) //0 1 2
//         }, 100)
//     })(i)
// }
//闭包特点：有一个外部函数，一个内部函数，内部函数会调用外部函数传来的变量，使得外部函数的变量不被释放

for (let i = 0; i < 3; i ++) {
    setTimeout(function () {
        console.log(i) //0 1 2
    }, 100)
}
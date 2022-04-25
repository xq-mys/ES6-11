// 1.扩展运算符
// function foo(a, b, c) {
//     console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(...arr)
// console.log(...arr) //1 2 3
// ...将数组或类数组展开成用,隔开的值

//合并数组
// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// //es5
// // Array.prototype.push.apply(arr1, arr2)
// // console.log(arr1)
// //es6
// arr1.push(...arr2)
// console.log(arr1)

// let str = 'imooc'
// var arr = [...str]
// console.log(arr) // ['i', 'm', 'o', 'o', 'c']

// 2.rest参数
//求和
// function foo(x, y, z) {
//     // console.log(arguments) // arguments:不是真正的数组
//     let sum = 0
//     //es5
//     // Array.prototype.forEach.call(arguments, function (item) {
//     //     sum += item
//     // })
//     //es6
//     Array.from(arguments).forEach(function (item) {
//         sum += item
//     })
//     return sum
// }
// console.log(foo(1, 2))
// console.log(foo(1, 2, 3))

// 1)...args:将当前参数变成数组
// function foo(...args) {
//     // console.log(args) // [1, 2] 将以,隔开的数转换成数组
//     let sum = 0
//     args.forEach(function (item) {
//         sum += item
//     })
//     return sum
// }
// console.log(foo(1, 2))  // 3
// console.log(foo(1, 2, 3)) // 6

// 2)接收剩余参数
// function foo(x, ...args) {
//     console.log(x) // 1
//     console.log(args) // [2, 3]
// }
// foo(1, 2, 3)

// 3)数组解构
// let [x, ...y] = [1, 2, 3]
// console.log(x) // 1
// console.log(y) // [2, 3]

//总：
// 1)...放在=的左边或者形参上，就是rest参数 (合并成数组)
// 2)...放在=的右边或者实参上，就是扩展运算符 (展开单个值)


//1.数组解构赋值
// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d) // 1 2 3 4

// let [a, b, [c]] = [1, 2, [3, 4]]
// console.log(a, b, c) // 1 2 3

// let [a, b, c] = [1, 2, [3, 4]]
// console.log(a, b, c) // 1 2 [3, 4]

// let [a, b, c, d] = [1, 2, [3, 4]]
// console.log(a, b, c, d) // 1 2 [3, 4] undefined
//数组是通过下标去对应的，是惰性的

//2.对象解构赋值 (常用)
// let user = {
//     name: 'mys',
//     age: 18
// }
// let {age: uage, name: uname} = user
// console.log(uname, uage) // mys 18
//对象是通过key名称去对应的，不是顺序

//3. 字符串解构赋值(类似于数组解构赋值)
// let str = 'imooc'
// let [a, b, c, d, e] = str
// console.log(a, b, c, d, e)

//4.默认值
//1)数组
// let [a, b, c = 8] = [4, 5]
// console.log(a, b, c) // 4 5 8
//2)对象
// let {name, age = 18} = {
//     name: 'mys',
//     // age: 20
// }
// console.log(name, age)
//3)函数
// function foo() {
//     console.log(123)
// }
// // let [a = foo()] = [1]
// // console.log(a) //1
// let [a = foo()] = []
// console.log(a) //123 undefined

//5.应用
// 1)函数参数解构赋值
// function foo([a, b, c]) {
//     console.log(a, b, c) //1 2 3
// }
// let arr = [1, 2, 3]
// foo(arr)

//2)函数参数是对象
// function foo({name, age, school = 'imooc'}) {
//     console.log(name, age, school) //mys 18 xxx
// }
// let obj = {
//     name: 'mys',
//     age: 18,
//     school: 'xxx'
// }
// foo(obj)

//3)返回值解构
// function foo() {
//     let obj = {
//         name: 'mys',
//         age: 18,
//         school: 'xxx'
//     }
//     return obj
// }
//
// let {name, age} = foo()
// console.log(name, age)

//4)提取json数据
let json = '{"a": "hello", "b": "world"}'
let {a, b} = JSON.parse(json)
console.log(a, b)
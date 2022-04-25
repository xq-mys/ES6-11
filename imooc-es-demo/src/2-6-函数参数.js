//1.函数默认参数
// function foo(x, y = 'world') {
//     console.log(x, y)
// }
// foo('hello', 0)

// function foo(x = 5) {
//     //都报错，因为函数参数是默认声明的
//     // let x = 1
//     // let const = 1
// }
//注意：
//1.函数参数默认声明
//2.参数不能重复
//3.参数默认值一定要放在最后

//2.与解构赋值结合
// function foo({x, y = 5}) {
//     console.log(x, y)
// }
// foo({
//     x: 1
// })
//解构赋值两边的结构需要匹配
//应用：
// function ajax(url, {
//     body = '',
//     method =  'GET',
//     headers = {}
// } = {}) { //默认参数为{}空对象
//     console.log(method)
// }
// //解构赋值匹配
// ajax('http://www.imooc.com', {
//     method: 'POST'
// })

//3. length属性
// function foo(x = 1, y) {
//     console.log(x, y)
// }
// console.log(foo.length) //foo.length：返回函数没有指定默认值的参数个数

//4.作用域
//题目1：
// let x = 1
// function foo(x, y = x) {
//     console.log(y) //2
// }
// foo(2)
//当函数执行时，传入一个参数2，赋值给x，在函数参数作用域中，再将x的值赋给y，此时x的值为2，所以y=2

//题目2：
// let x = 1
// function foo(y = x) {
//     let x = 2
//     console.log(y) //1
// }
// foo()
//函数执行时，参数y=x形成一个单独的作用域，当前作用域没有x，沿着作用域链网上找，此时找到的x是全局变量，所以y=x=1

//题目3：
// function foo(y = x) {
//     let x = 2
//     console.log(y) //报错，x未定义
// }
// foo()

//5.函数的name属性
// function foo() {}
// console.log(foo.name) //foo
// console.log((new Function).name) //anonymous

function foo(x, y) {
    //this指向bind参数对象
    console.log(this, x, y)  //{name: 'mys'} 1 2
}
foo.bind({name: 'mys'})(1, 2)
console.log(foo.bind({}).name) // bound foo(函数名)
console.log((function () {}).bind({}).name) // bound (没有函数名就不输出)
//bind()方法主要就是将函数绑定到某个对象，
//bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值

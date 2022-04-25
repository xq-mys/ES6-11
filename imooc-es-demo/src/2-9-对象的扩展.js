// let name = 'mys'
// let age = 18
// let s = 'school'
// let obj = {
//     // name: name,
//     // age: age
//     // 对象中key和value一样，可以简写
//     // 1.属性简写表达式
//     name,
//     age,
//     // 2.属性名表达式
//     [s]: 'imooc',
//     //对象里的方法不要用箭头函数，箭头函数的this是定义时的对象
//     // study: function () {
//     //     console.log(this.name + ' is learn')
//     // }
//     //3. 对象中方法的简写
//     study() {
//         console.log(this.name + ' is learn')
//     }
// }
// console.log(obj) // {name: 'mys', age: 18, school: 'imooc', study: ƒ}
// obj.study() // mys is learn

// 4.Object.is()判断两个值是否相等
// console.log(Object.is(2, '2')) // false
// console.log(Object.is(NaN, NaN)) // true
// console.log(Object.is(+0, -0)) // false

// let obj1 = { // new Object 在堆中开辟新空间
//     name: 'mys',
//     age: 18
// }
// let obj2 = {
//     name: 'mys',
//     age: 18
// }
// console.log(Object.is(obj1, obj2)) // false 对象比较的是地址
// let obj3 = obj1 //指向同一个地址
// console.log(Object.is(obj1, obj3)) // true

// 5.扩展运算符 & Object.assign()
// let x = {
//     a: 3,
//     b: 4
// }
// let y = {...x}
// console.log(y) // {a: 3, b: 4}
// let z = {}
// Object.assign(z, x) // 合并对象
// console.log(z) // {a: 3, b: 4}
// let x1 = {
//     a: 5,
//     b: 6
// }
// Object.assign(x, x1) // 用后面的去合并前面的，如果变量相同会覆盖
// console.log(x) //{a: 5, b: 6}

//6.in
// let x = {
//     a: 3,
//     b: 4
// }
// console.log('aa' in x) // false

// let arr = [1, 2, 3]
// console.log(3 in arr) // false
// console.log(2 in arr) // true  2是位置

// 7.对象的遍历
let obj = {
    name: 'mys',
    age: 18
}
// 1) for in
for (let key in obj) {
    console.log(key, obj[key]) // name mys  age 18
}
// 2) forEach Object.keys
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]) // name mys  age 18
})
// 3) forEach Object.getOwnPropertyNames
Object.getOwnPropertyNames(obj).forEach(key => {
    console.log(key, obj[key])
})
//4) forEach Reflect.ownKeys
Reflect.ownKeys(obj).forEach(key => {
    console.log(key, obj[key])
})

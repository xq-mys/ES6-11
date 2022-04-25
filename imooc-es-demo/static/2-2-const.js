//es5定义一个常量
// Object.defineProperty(window, 'PI', {
//     value: 3.14,
//     writable: false // 当前变量是否可写
// })
// console.log(PI)
// PI = 5
// console.log(PI) //3.14  变量值不可修改

//es6
//1.const修饰的变量不能被修改
// const a = 5
// a = 6 //报错

//2.const变量只能在定义的时候赋值
// const a
// a = 5 //报错

//3.const作用域：块级作用域
//4.const存在暂时性死区

const obj = {
    name: 'mys',
    age: 18,
    skill: {
        name: 'code',
        year: 4
    }
}
console.log(obj)
obj.school = 'imooc' //成功 const变量指向地址的不变，内容如果是数组或对象可以改变，常量不能改变
console.log(obj)

Object.freeze(obj) //冻结，freeze只能传递对象，不能传数组
obj.skill.year = 5 //修改成功，因为只是浅层的冻结
console.log(obj)
// 如果需要深层的冻结，需要:Object.freeze(obj.skill)

//如果变量在后续的业务逻辑中不会被改变，即可以用const，否则用let定义

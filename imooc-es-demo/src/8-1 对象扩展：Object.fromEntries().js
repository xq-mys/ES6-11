// const obj = {
//     name: 'mys',
//     age: 18
// }
// const entries = Object.entries(obj) // 将对象转换成数组形式
// console.log(entries) // ['name', 'mys']  ['age', 18]
//
// // es10
// const fromEntries = Object.fromEntries(entries)
// console.log(fromEntries) // {name: 'mys', age: 18} 返回成对象的形式
// // Object.entries和Object.fromEntries作用相反

// 应用场景1：将map结构转成对象结构
// const map = new Map()
// map.set('name', 'mys')
// map.set('age', 18)
// console.log(map) // {'name' => 'mys', 'age' => 18}
// const fromEntries = Object.fromEntries(map)
// console.log(fromEntries) // {name: 'mys', age: 18}

// 应用场景2：数组方法多，可以先转成数组，调用一些方法实现了功能之后，再转回原来的类型
const course = {
    math: 90,
    english: 85,
    chinese: 80
}
// Object.entries(course):转成数组，调用数组的相关方法
const res = Object.entries(course).filter(([key, val]) => val > 80);
console.log(res) // ['math', 90]  ['english', 85]
// 数组转对象
console.log(Object.fromEntries(res)) // {math: 90, english: 85}
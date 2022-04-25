// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3) // [1, 2, 3, 4, 5, 6]

// const obj1 = {
//     name: 'mys',
//     age: 18
// }
// const obj2 = {
//     school: 'imooc'
// }
// // 克隆对象
// const obj3 = {
//     ...obj1
// }
// obj1.age = 20
// console.log(obj3) // {name: 'mys', age: 18}  ...克隆对象是一个新的对象
//
// // 合并对象
// const obj4 = {...obj1, ...obj2}
// console.log(obj4) // {name: 'mys', age: 20, school: 'imooc'} 后面的会覆盖前面的

// 剩余属性
const obj1 = {
    name: 'mys',
    age: 18,
    school: 'imooc',
    course: 'es'
}
const {name, age, ...rest} = obj1 // ...rest表示剩余元素，要放在最后
console.log(name) // mys
console.log(age) // 18
console.log(rest) // {school: 'imooc', course: 'es'}
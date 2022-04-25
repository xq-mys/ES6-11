let arr = [1, 2, 3]

//1.for
// for (let i = 0; i < arr.length; i ++) {
//     console.log(i)
// }

//2.forEach
// arr.forEach(function (elem, index, array) {
//     console.log(elem, index)
// })
//forEach不支持break continue

//3.map
// let res = arr.map(function (value) {
//     value += 1
//     return value
// })
// console.log('res:', res) // [2, 3, 4]
// console.log('array:', arr) // [1, 2, 3]
// //map不会改变原有数组

//4.filter
// let res = arr.filter(function (value) {
//     return value === 2
// })
// console.log(arr)
// console.log(res)

//5.some
//遍历数组中是否有符合条件的值，返回结果是Boolean类型的
// let res = arr.some(function (value) {
//     return value === 2
// })
// console.log(arr)
// console.log(res)

//6.ever:每一个都符合，返回true
// let res = arr.every(function (value) {
//     return value === 2
// })
// console.log(arr)
// console.log(res)

//7.reduce
//1)求数组每项的和
// let sum = arr.reduce(function (prev, cur, index, arr) {
//     return prev + cur
// }, 0) //第二个参数：初始值
// console.log(sum) //6

//2)求数组中最大值
// let max = arr.reduce(function (prev, cur) {
//     return Math.max(prev, cur)
// })
// console.log(max)

//3)去重
// arr1 = [1, 2, 2, 3, 3]
// let res = arr1.reduce(function (prev, cur) {
//     //prev.indexOf(cur):上一个数组中是否包含当前值
//     //prev.push(cur):如果不包含就放入当前元素
//     prev.indexOf(cur) === -1 && prev.push(cur)
//     return prev
// }, []) //初始值为一个新的数组
// console.log(res) //1 2 3

//8.for in (不使用)
//如果给原型定义了函数，遍历数组时函数也会输出
// Array.prototype.foo = function () {
//     console.log('foo')
// }
// for (let index in arr) {
//     console.log(index, arr[index])
// }

//9.find:返回第一个通过测试的值
// arr1 = [1, 2, 2, 3, 3]
// let res = arr1.find(function (value) {
//     return value === 2
// })
// console.log('res', res) // 2
// console.log('arr', arr1) // [1, 2, 2, 3, 3]

//10.findIndex:返回第一个通过测试的值的下标(从0开始)
// let res = arr1.findIndex(function (value) {
//     return value === 2
// })
// console.log('res', res)
// console.log('arr', arr)

// 11.for of(常用)
//1)获取值 arr/arr.values()
// // for (let item of arr.values()) 效果一样
// for (let item of arr) {
//     console.log(item)
// }

//2)获取当前的下标：arr.keys()
// for (let item of arr.keys()) {
//     console.log(item) // 0 1 2
// }

//3)获取下标和值：arr.entries()  [index, item]
// for (let [index, item] of arr.entries()) {
//     console.log(index, item)
// }


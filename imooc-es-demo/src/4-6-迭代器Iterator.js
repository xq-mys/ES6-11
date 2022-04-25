// function makeIterator(arr) {
//     let nextIndex = 0
//     return {
//         next() {
//             return nextIndex < arr.length ? {
//                 value: arr[nextIndex ++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }
// let it = makeIterator(['a', 'b', 'c'])
// console.log(it.next()) // {value: 'a', done: false}
// console.log(it.next()) // {value: 'b', done: false}
// console.log(it.next()) // {value: 'c', done: false}
// console.log(it.next()) // {value: undefined, done: true}

// 可迭代： 当前对象中有Symbol.iterator
// 1)Array
// let arr = ['a', 'b', 'c']
// let it = arr[Symbol.iterator]()
// console.log(it.next())
// 2)Map
// let map = new Map()
// map.set('name', 'es')
// map.set('age', '6')
// // console.log(map)
// let it = map[Symbol.iterator]()
// console.log(it.next()) // {value: Array(2), done: false}
// console.log(it.next()) // {value: Array(2), done: false}
// console.log(it.next()) // {value: undefined, done: true}

// 原生具备Iterator
// Array Map Set String TypedArray 函数的arguments对象  NodeList对象

// 需求：将course变成可迭代的
let courses = {
    allCourse: {
        frontend: ['ES', '小程序', 'Vue', 'React'],
        backend: ['Java', 'Python', 'SpringBoot'],
        webapp: ['Android', 'IOS']
    }
}
// 可迭代协议：当前对象中是否含有Symbol.iterator属性
// 迭代器协议：return { next() { return {value, done}}}
// courses[Symbol.iterator] = function () {
//     let allCourse = this.allCourse
//     let keys = Reflect.ownKeys(allCourse) // 获取allCourse中的key 返回：['frontend', 'backend', 'webapp']
//     let values = [] // 保存通过key获取到的值
//     // 返回的结构固定
//     return {
//         next() {
//             if (!values.length) { // 每次只取一个值，当values为空的时候进入开始取值
//                 if (keys.length) { // 没取完
//                     values = allCourse[keys[0]]
//                     keys.shift() // 取完一个之后删除 shift()删除数组的第一个元素，并返回删除的结果
//                 }
//             }
//             return {
//                 done: !values.length, // 当取完是values长度为0 !0就是true
//                 value: values.shift()
//                 // 注意：此处需要先求done再求values，因为如果先求values会进行删除操作，此时获取到的done信息就不准确l
//             }
//         }
//     }
// }
//
// for (let c of courses) {
//     console.log(c)
// }

// generator实现
courses[Symbol.iterator] = function* () {
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    while (1) {
        if (!values.length) {
            if (keys.length) {
                values = allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            } else {
                return false
            }
        }else{
            yield values.shift()
        }
    }
}
for (let c of courses) {
    console.log(c)
}
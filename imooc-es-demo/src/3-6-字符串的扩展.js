// 1.字符的unicode表示
// es6 \uxxxx 码点 0000~ffff
// \u20BB7 -> \u20BB+7  ===> 超出码点范围用{}表示：\u{20BB7}

// 表示字符
// console.log('\z' === 'z') // true  \z是非制表符，反斜杠\什么也不表示
// 浏览器中运行：console.log('\172' === 'z')  //true

/**
 * 6中表示字符的方式
 * (0)z
 * (1)\z
 * (2)\172
 * (3)\x7A
 * (4)\u007A
 * (5)\u{7A}
 */

// 2. 字符串的遍历器接口
// for (let item of 'imooc') {
//     console.log(item)
// }

// 3.模板字符串 *****
// ``
// 1)多行字符串可以直接换行
// const str = `
// <ul>
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>
// `
// console.log(str)
// // <ul>
// //     <li></li>
// //     <li></li>
// //     <li></li>
// // </ul>
//
// // 2)使用${表达式}直接运算
// const a = 2, b = 3
// const str1 = `a+b=${a + b}`
// console.log(str1) // a+b=5
//
// // 3)嵌套模板
// // 需求: icon icon-big
// const isLargeScreen = () => {
//     return true
// }
// // es5
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big' : ' icon-small'
// console.log(class1)
// // es6
// const class2 = `icon icon-${isLargeScreen() ? 'big' : 'small'}`
// console.log(class2)
//
// // 3) 带标签的模板字符串
// const foo = (a, b, c, d) => {
//     console.log(a) // ['姓名：', ',年龄：', ',', '', raw: Array(4)]
//     console.log(b) // mys
//     console.log(c) // 18
//     console.log(d) // 123
// }
// const name = 'mys'
// const age = 18
// foo`姓名：${name},年龄：${age},${123}`

// 4.方法
// 1)静态方法 fromCodePoint
console.log(String.fromCharCode(0x20BB7)) // ஷ es5 不能识别码点超过范围：0000~ffff
console.log(String.fromCodePoint(0x20BB7)) // 𠮷 es6 范围外也能识别
// 2) indexOf includes startsWith endsWith repeat
const str = 'imooc'
console.log(str.indexOf('mo')) // 1
console.log(str.includes('mo')) // true
console.log(str.startsWith('im')) // true
console.log(str.endsWith('oc')) // true
const newStr = str.repeat(4)
console.log(newStr) // imoocimoocimoocimooc

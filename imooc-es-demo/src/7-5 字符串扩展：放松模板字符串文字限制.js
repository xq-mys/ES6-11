// 带标签的模板字符串
// const foo = (a, b, c, d) => {
//     console.log(a) // ['这是', ',年龄是', '岁', raw: Array(3)]
//     console.log(b) // mys
//     console.log(c) // 18
//     console.log(d) // undefined
// }
// const name = 'mys'
// const age = 18
// foo`这是${name},年龄是${age}岁`

const foo = arg => {
    console.log(arg)
}
foo`\u{61} and \u{62}` // ['a and b', raw: Array(1)]
foo`\u{61} and \uunicode` // [undefined, raw: Array(1)]
// let str = `\u{61} and \uunicode` //报错 只能在标签中使用
// es5 i:忽略大小写 m:多行匹配 g:全局匹配
//es6
// y修饰符 粘连(sticky)修饰符
// const str = 'aaa_aa_a'
// const reg1 = /a+/g
// const reg2 = /a+/y
// // g 每次匹配剩余的
// console.log(reg1.exec(str)) // ['aaa', index: 0, input: 'aaa_aa_a', groups: undefined]
// console.log(reg1.exec(str)) // ['aa', index: 4, input: 'aaa_aa_a', groups: undefined]
// console.log(reg1.exec(str)) // ['a', index: 7, input: 'aaa_aa_a', groups: undefined]
// // y 每次匹配会在剩余的第一个进行匹配
// console.log(reg2.exec(str)) // ['aaa', index: 0, input: 'aaa_aa_a', groups: undefined]
// console.log(reg2.exec(str)) // null 剩余:_aa_a 第一个为_，匹配不上
// // 上次没匹配上，现在有从头开始匹配
// console.log(reg2.exec(str)) // ['aaa', index: 0, input: 'aaa_aa_a', groups: undefined]

// u修饰符 unicode  \u以unicode模式匹配
const str = '\uD842\uDFB7' // 表示一个字符
console.log(/^\uD842/.test(str)) // es5 true 错误的
console.log(/^\uD842/u.test(str)) // es6 false

// . 除换行意外的任意单个字符
console.log(/^.$/.test(str)) // false
console.log(/^.$/u.test(str)) // true

console.log(/\u{61}/.test('a')) // false
console.log(/\u{61}/u.test('a')) // true

console.log(/𠮷{2}/.test('𠮷𠮷')) // false
console.log(/𠮷{2}/u.test('𠮷𠮷')) // true


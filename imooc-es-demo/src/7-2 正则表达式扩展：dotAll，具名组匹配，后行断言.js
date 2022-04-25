// dot 点 匹配任意单个字符，不能匹配多字节的Unicode和行终结符，eg:\n \r
// const reg = /./
// console.log(reg.test('5')) // true
// console.log(reg.test('\n')) // false
// console.log(reg.test('\u{2028}')) // false

// 1. dotAll
// const reg = /./s
// console.log(reg.test('5')) // true
// console.log(reg.test('\n')) // true
// console.log(reg.test('\u{2028}')) // true

// 修饰符：g全局  i：不区分大小写  m：跨行匹配  y：粘性  u：unicode s：让.能够匹配任意单个字符

// 2. 具名组匹配
// const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2022-04-21')
// console.log(date[1]) // 2022
// console.log(date[2]) // 04
// console.log(date[3]) // 21
// console.log(date) // ['2022-04-21', '2022', '04', '21', index: 0, input: '2022-04-21', groups: undefined]
//
// const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// console.log(reg.exec('2022-02-01')) // ['2022-02-01', '2022', '02', '01', index: 0, input: '2022-02-01', groups: {…}]
// //  groups: {year: '2022', month: '02', day: '01'}
// const groups = reg.exec('2022-02-01').groups
// // const year = groups.year
// // const month = groups.month
// // const day = groups.day
// const {year, month, day} = groups
// console.log(year, month, day) // 2022 02 01

// 3.后行断言 先行断言
// 先行断言：匹配后面跟着script的ecma
const str = 'ecmascript'
console.log(str.match(/ecma(?=script)/)) // ['ecma', index: 0, input: 'ecmascript', groups: undefined]
// 后行断言:匹配前面是ecma的script
console.log(str.match(/(?<=ecma)script/)) // ['script', index: 4, input: 'ecmascript', groups: undefined]


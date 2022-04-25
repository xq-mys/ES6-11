const str = 'imooc'
// padStart从开始填充：第一个参数：填充之后目标参数的长度；第二个参数：用什么填充(可选，默认空格填充)
console.log(str.padStart(8, 'x')) // xxximooc
// padEnd从结尾填充
console.log(str.padEnd(8, 'x')) // imoocxxx

// 应用场景1：输出当前日期 yyyy-mm-dd
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = now.getDate().toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`) // 2022-04-21

// 应用场景2:手机号加密，只显示后四位
const tel = '13012345678'
const newTel = tel.slice(-4).padStart(11, '*')
console.log(newTel) // *******5678

// 应用场景3：时间戳  伪代码
// console.log(new Date().getTime()) // 13位 ms
// timestamp.padEnd(12, '0')

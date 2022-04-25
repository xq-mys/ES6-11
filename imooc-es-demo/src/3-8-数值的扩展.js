// es5
// // 十进制 => 二进制
// const a = 5
// console.log(a.toString(2)) // 101
// // 二进制 => 十进制
// const b = 101
// console.log(parseInt(b, 2)) // 5

/**
 * Number方法
 * Number.parseInt()
 * Number.parseFloat()
 * Number.isFinite()
 * Number.isNaN()
 * Number.isInteger()
 * Number.MAX_SAFE_INTEGER
 * Number.isSafeInteger()
 */

// es6 0B二进制 0O八进制
// const a = 0B0101
// console.log(a) // 5
// const b = 0O77
// console.log(b) // 63

// Number.isFinite() 判断当前数是否是有限的(只判断Number类型，其他都为false)
// console.log(Number.isFinite(5)) // true
// console.log(Number.isFinite()) // false
// console.log(Number.isFinite('imooc')) // false
// console.log(Number.isFinite(true)) // false

// Number.isNaN()
// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(15)) // false

// console.log(Number.isInteger(5.5)) // false

//精度缺失问题
// 数字在计算机中是以二进制存储的，IEEE 754 双精度标准存储
// console.log(0.1000000000000001) // 0.1000000000000001
// console.log(0.10000000000000001) // 0.1
// console.log(0.10000000000000001 === 0.1) // true 精度缺失

// 整数范围 (-2^53, 2^53)
// const max = Math.pow(2, 53)
// console.log(Number.MAX_SAFE_INTEGER === max - 1) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER +1)) // false

/**
 * Math新增方法
 * Math.trunc()
 * Math.sign()
 * Math.cbrt()
 *
 */
// console.log(Math.trunc(5.5)) // 5
// console.log(Math.trunc(- 5.5)) // -5
// console.log(Math.trunc(true)) // 1
// console.log(Math.trunc(false)) // 0
// console.log(Math.trunc(NaN)) // NaN
// console.log(Math.trunc(undefined)) // NaN
// console.log(Math.trunc()) // NaN
//
// console.log(Number.parseInt(5.5)) // 5
// console.log(Number.parseInt(- 5.5)) // -5
// console.log(Number.parseInt(true)) // NaN

// console.log(Math.sign(5)) // 1
// console.log(Math.sign(- 5)) // -1
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(true)) // 1
// console.log(Math.sign(false)) // 0
// console.log(Math.sign(NaN)) // NaN

console.log(Math.cbrt(8)) // 2 立方根

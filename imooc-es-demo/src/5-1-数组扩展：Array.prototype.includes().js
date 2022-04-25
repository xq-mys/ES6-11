// includes:检查数组里面是否包含某个值
// const arr = ['es5', 'es6', 'es7']
// /**
//  * 参数：
//  * 第一个参数：要搜索的值
//  * 第二个参数：搜索开始的索引 负数：从倒数第index开始往后找
//  */
// console.log(arr.includes('es7'))  // true
// console.log(arr.includes('es8')) // false
// console.log(arr.includes('es6', 2)) // false
// console.log(arr.includes('es6', - 2)) // true
//
// console.log(arr.indexOf('es7')) // 2
// console.log(arr.indexOf('es7') > -1) // true

// 1. indexOf和includes只能判断基本类型的值，不能判断引用类型的值
// const arr = ['es5', ['es6', 'es7'], 'es8']
// console.log(arr.includes(['es6', 'es7'])) // false
// console.log(arr.indexOf(['es6', 'es7'])) // -1

const arr = ['es5', 'es6', NaN, 'es7', 2]
// 2. indexOf不能检查NaN
console.log(arr.includes(NaN)) // true
console.log(arr.indexOf(NaN)) // -1
// 3. includes和indexOf内部判断是严格相等，即 ===
console.log(arr.includes('2')) // false
console.log(arr.indexOf('2')) // -1
// 4.使用
// NaN => includes
// 只关心值是都存在，不关心其存在的位置 => includes
// 判断值出现的索引下标 => indexOf

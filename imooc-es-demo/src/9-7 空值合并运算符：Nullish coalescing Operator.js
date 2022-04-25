// 需求：null undefined时取默认值
// 以前：
// const b = ''
// const a = b || 5
// console.log(a) // 5  b不是null
// // 或undefined也是默认值5

// es2020
const b = ''
const a = b ?? 5
console.log(a) // ''
// 只有传递null和undefined时才是默认值5
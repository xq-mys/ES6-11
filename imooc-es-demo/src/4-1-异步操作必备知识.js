// const a = 2
// const b = 3
// console.log(a + b) // 同步
// setTimeout(() => {
//     console.log(a + b) // 异步
// }, 1000)

// 前后端数据分离  前端<->后端  ajax

// 输出顺序？
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0) // 注意：虽然写的是0，但是在底层最小时间是4ms
console.log(3)
// 1 3 2

// 异步任务
setTimeout(() => {
    task() // 表示一个任务
}, 1000)
sleep() // 表示一个很复杂的同步任务
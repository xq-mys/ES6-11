// 1. 使用
// export const a = 5
// export const b = 'imooc'
// export const sum = (x, y) => x + y
// const obj = {
//     name: 'es'
// }
// export {obj}

// 统一导出
// const a = 5
// const b = 'imooc'
// const sum = (x, y) => x + y
// const obj = {
//     name: 'es'
// }
//
// class People {
//     constructor(name) {
//         this.name = name
//     }
//     showName() {
//         console.log(this.name)
//     }
// }
//
// export {
//     a,
//     b,
//     sum,
//     obj,
//     People
// }

// 2. default 注意：每个模块中只能有一个default
// const a = 5 // 先定义在导出
// export default a

// 3. 结合
// const add = (x, y) => x + y
// export default add
// export const str = 'imooc'

// 4.将所有内容放入default对象
const a = 5
const b = 'imooc'
const sum = (x, y) => x + y
const obj = {
    name: 'es'
}

class People {
    constructor(name) {
        this.name = name
    }

    showName() {
        console.log(this.name)
    }
}

export default {
    a,
    b,
    sum,
    obj,
    People
}
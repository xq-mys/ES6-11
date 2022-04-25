// 1.用法
// 导入，注意导入模块和导出模块名称相同，多个可用,隔开
// import {
//     a as aa, // as起别名
//     b,
//     sum,
//     obj,
//     People
// } from './module'
// console.log(aa)
// console.log(b)
// console.log(sum(1, 2))
// console.log(obj)
// let p1 = new People('mys')
// p1.showName()

// 2.default
// import aa from './module'
// console.log(aa)

// 3.结合使用
// import add, {str} from './module'
// console.log(add(1, 2), str) // 3 imooc

// 4.将所有内容放入default对象
// 1)
// import mod from './module'
// console.log(mod.a) // 5
// console.log(mod.b) // imooc
//2)
import * as mod from './module'
console.log(mod)
console.log(mod.default.a) // 5
console.log(mod.default.b) // imooc
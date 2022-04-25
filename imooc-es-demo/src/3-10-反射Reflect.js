// Object => Reflect
// es5中，很多方法会设置到Object下面
// 1. 将Object属于语言内部的方法放到Reflect上
// let obj = {}
// let newVal = ''
// Reflect.defineProperty(obj, 'name', {
//     get() {
//         return newVal
//     },
//     set(val) {
//         console.log('set')
//         newVal = val
//     }
// })
// obj.name = 'es'
// console.log(obj.name)

// 2. 修改Object某些方法的返回结果，使其更加合理
// // es5
// try {
//     Object.defineProperty()
// } catch (e) {
//
// }
// // es6
// if (Reflect.defineProperty()) { // 返回boolean
//
// }

// 3. 让Object操作变成函数行为
// console.log('assign' in Object) // true 命令式操作
// console.log(Reflect.has(Object, 'assign')) // true 函数式操作

// 4.Reflect对象的方法和Proxy对象的方法一一对应
// let user = {
//     name: 'mys',
//     age: 18,
//     _password: 'xxx' // 私有属性
// }
// user = new Proxy(user, {
//     get(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             // return target[prop]
//             return Reflect.get(target, prop)
//         }
//     },
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             // target[prop] = val
//             Reflect.set(target, prop, val)
//             return true
//         }
//     },
//     deleteProperty(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             // delete target[prop]
//             Reflect.deleteProperty(target, prop)
//             return true
//         }
//     },
//     ownKeys(target) {
//         // return Object.keys(target).filter(key => !key.startsWith('_'))
//         return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
//     }
// })
// try {
//     // console.log(user._password)
//     // user._password = 'vv'
//     delete user._password
// } catch (e) {
//     console.log(e.message) // 不可访问
// }
// for (let key in user) {
//     console.log(key)
// }


let sum = (...args) => {
    let num = 0
    args.forEach(item => {
        num += item
    })
    return num
}
sum = new Proxy(sum, {
    // 函数调用时会被拦截，执行apply方法
    apply(target, ctx, args) {
        // return target(...args) * 2
        return Reflect.apply(target, target, [...args])  * 2
    }
})
console.log(sum(1, 2)) // 6
console.log(sum.call(null, 1, 2, 3)) // 12
console.log(sum.apply(null, [1, 2, 3])) // 12
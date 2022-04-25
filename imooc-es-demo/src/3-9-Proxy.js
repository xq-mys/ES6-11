// es5
// let obj = {}
// let newVal = ''
// Object.defineProperty(obj, 'name', {
//     get(){
//         return newVal
//     },
//     set(val){
//         console.log('set')
//         newVal = val
//     }
// })
// obj.name = 'es'
// console.log(obj.name)

// es6 proxy
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'imooc'
// console.log(obj.name)
// for (let key in obj) {
//     console.log(key)
// }


// 1.get
// 需求：通过下标访问数组，如果能访问到直接返回值，访问不到返回error
// let arr = [7, 8, 9]
// // Proxy参数：1.包装的对象 2.代理的相关配置
// arr = new Proxy(arr, {
//     get(target, prop) {
//         console.log(target, prop)
//         return prop in target ? target[prop] : 'error'
//     }
// })
// console.log(arr[1]) // 8
// console.log(arr[10]) // error

// let dict = {
//     'hello': '你好',
//     'world': '世界'
// }
// dict = new Proxy(dict, {
//     get(target, prop) {
//         return prop in target ? target[prop] : prop
//     }
// })
// console.log(dict['hello']) // 你好
// console.log(dict['imooc']) // imooc

// 2. set
// let arr = []
// arr = new Proxy(arr, {
//     set(target, prop, val) {
//         if (typeof val === 'number') {
//             target[prop] = val
//             return true
//         } else{
//             return false
//         }
//     }
// })
// arr.push(5)
// arr.push(6)
// // arr.push('aa') // 报错
// console.log(arr[0], arr[1], arr.length)

// 3. has
// let range = {
//     start: 1,
//     end: 5
// }
// range = new Proxy(range, {
//     has(target, prop) {
//         return prop >= target.start && prop <= target.end
//     }
// })
// console.log(2 in range) // true
// console.log(9 in range) // false

// 4.ownKeys
// let obj = {
//     name: 'imooc',
//     [Symbol('es')]: 'es' // []表示变量
// }
// console.log(Object.getOwnPropertyNames(obj)) // ['name']
// console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(es)]
// console.log(Object.keys(obj)) // // ['name']
// for (let key in obj) {
//     console.log(key) // name
// }

// 保护属性，拦截_开头的属性
// let userinfo = {
//     username: 'mys',
//     age: 18,
//     _password: 'xxx'
// }
// userinfo = new Proxy(userinfo, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => ! key.startsWith('_'))
//     }
// })
// for (let key in userinfo) {
//     console.log(key) // username  age
// }
// console.log(Object.keys(userinfo)) // ['username', 'age']

// get set deleteProperty ownKeys应用
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
//             return target[prop]
//         }
//     },
//     set(target, prop, val) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             target[prop] = val
//             return true
//         }
//     },
//     deleteProperty(target, prop) {
//         if (prop.startsWith('_')) {
//             throw new Error('不可访问')
//         } else {
//             delete target[prop]
//             return true
//         }
//     },
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })
// try {
//     delete user._password
// } catch (e) {
//     console.log(e.message) // 不可访问
// }
// for (let key in user) {
//     console.log(key)
// }


// 5.apply
// let sum = (...args) => {
//     let num = 0
//     args.forEach(item => {
//         num += item
//     })
//     return num
// }
// sum = new Proxy(sum, {
//     // 函数调用时会被拦截，执行apply方法
//     apply(target, ctx, args) {
//         return target(...args) * 2
//     }
// })
// console.log(sum(1, 2)) // 6
// console.log(sum.call(null, 1, 2, 3)) // 12
// console.log(sum.apply(null, [1, 2, 3])) // 12

// 6. construct  new
// let User = class {
//     constructor(name) {
//         this.name = name
//     }
// }
// User = new Proxy(User, {
//     construct(target, args, newTarget) {
//         console.log('construct')
//         return new target(...args)
//     }
// })
// console.log(new User('imooc')) // construct  {name: 'imooc'}
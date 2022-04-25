// Map(key, value)
// 对于Array的key：字符串；Symbol
// 对于Map的key：各类型都可以作为key

// 1.常用方法
// let m = new Map()
// // 对象可以作为key
// let obj = {
//     name: 'imooc'
// }
// m.set(obj) // 设置
// console.log(m)
// console.log(m.get(obj)) // 获取
// // m.delete(obj) // 删除
// console.log(m.has(obj)) // true

// let map = new Map([
//     ['name', 'mys'],
//     ['age', 18]
// ])
// console.log(map) // {'name' => 'mys', 'age' => 18}
// console.log(map.size) // 2
// console.log(map.get('age')) // 18
// console.log(map.has('name')) // true
// map.set('name', 'zhangsan')
// console.log(map) // {'name' => 'zhangsan', 'age' => 18}
// map.delete('name')
// console.log(map) // {'age' => 18}

// 2. 遍历
let map = new Map([
    ['name', 'mys'],
    ['age', 18]
])
//1)
// map.forEach((value, key) => console.log(key, value)) // name mys   age 18
// 2)
// for (let [key, value] of map) {
//     console.log(key, value) // // name mys   age 18
// }
// 3)
// for (let key of map.keys()) {
//     console.log(key) // name age
// }
// 4)
// for (let value of map.values()) {
//     console.log(value) // mys 18
// }
// 5)
// for (let [key, value] of map.entries()) {
//     console.log(key, value) // // name mys   age 18
// }

// map object 应用场景一样
// map比object更加灵活，key也各种各样
// 频繁增删map性能更好

// 3. WeakMap
// let wm = new WeakMap()
// wm.set([1], 2)
// wm.set({
//     name: 'mys'
// }, 'es')
// console.log(wm)
// WeakMap不支持clear，也不支持遍历，没有size方法
// WeakMap也是弱引用，有助于防止内存泄漏，当没有对象引用时，自动消失

let wm = new WeakMap()
let elem = document.getElementsByTagName('h1')
wm.set(elem, 'info')
console.log(wm.get(elem))


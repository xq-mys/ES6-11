// Set里面的值不重复
// 1. Set常用方法
// let s = new Set([1, 2, 2, 3])
// console.log(s) // {1, 2, 3}
// s.add('imooc').add('es') // 链式添加
// console.log(s) // {1, 2, 3, 'imooc', 'es'}
// s.delete(2) // 删除
// s.has('imooc') // 判断是否含有某个值 true
// s.size // 长度
// // s.clear() // 清空
//
// 2.遍历
// 1) forEach
// s.forEach(item => console.log(item))
//
// //Set中的key和value值相同, keys\values\entries结果相同
// 2) for of  s.keys()
// for (let item of s.keys()) {
//     console.log(item)
// }
// 3)for of  s.values()
// for (let item of s.values()) {
//     console.log(item)
// }
// 4) for of  s.entries()
// for (let item of s.entries()) {
//     console.log(item)
// }

// 3.应用场景
// 1)数组去重
// let arr = [1, 2, 3, 3, 2, 1]
// let s = new Set(arr)
// console.log(s) // {1, 2, 3}

// 2)合并去重
// let arr1 = [1, 2, 3, 4]
// let arr2 = [1, 2, 3, 5, 6]
// let s = new Set([...arr1, ...arr2])
// console.log(s)
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5
// 5: 6
// 3)Set转为数组Array
// console.log([...s]) // [1, 2, 3, 4, 5, 6]
// console.log(Array.from(s)) // [1, 2, 3, 4, 5, 6]

// 4)交集
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let res = new Set(arr1.filter(item => s2.has(item)))
// console.log(res) // {1, 2, 3}

// 5)差集
// let arr3 = new Set(arr1.filter(item => ! s2.has(item)))
// let arr4 = new Set(arr2.filter(item => ! s1.has(item)))
// console.log([...arr3, ...arr4]) // [4, 5, 6]

// 4.WeakSet
// 添加和删除必须是同一个对象
let ws = new WeakSet()
// 添加
ws.add({
    name: 'mys'
})
const obj = {
    age: 18
}
ws.add(obj)
// 删除  不成功，因为此处删除的是另一个对象，虽然与上面添加的对象长的一样，但这两个不是同一个对象
ws.delete({
    name: 'mys'
})
ws.delete(obj) // 删除成功
console.log(ws)

// WeakSet不能遍历

// 垃圾回收机制 GC
// WeakSet中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
// 如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
// 应用：创建临时对象；利用对象绑定相关信息

// WeakSet与Set区别
// 1. WeakSet只能存储对象，Set各数据类型都可以
// 2.WeakSet不可以循环遍历，Set可以
// 3.WeakSet是弱引用，不会被垃圾回收机制考虑

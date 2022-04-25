// const obj = {
//     name: 'mys',
//     age: 18
// }
// const desc = Object.getOwnPropertyDescriptors(obj)
// console.log(desc)
// 输出：
// age: {value: 18, writable: true, enumerable: true, configurable: true}
// name: {value: 'mys', writable: true, enumerable: true, configurable: true}
/**
 * value:当前对象属性的默认值
 * writable:是否可修改
 * enumerable:当前属性是否可以通过for in遍历
 * configurable:当前对象属性能否用delete进行删除
 */

const obj = {}
Reflect.defineProperty(obj, 'name', {
    value: 'mys',
    writable: true,
    enumerable: true,
    configurable: true

})
console.log(obj)
delete obj.name
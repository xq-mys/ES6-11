//1. Object.assign()浅拷贝，不安全
// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         d: 2,
//         e: 5
//     }
// }
// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         d: 4
//     }
// }
// Object.assign(target, source)
// console.log(target)
//输出：
// a:
//     b: {c: 1}
// d: 4
// e不见了，Object.assign()拷贝有问题，对于基本数据类型的拷贝没问题，
// 但是对于引用类型的数据，拷贝的是地址，如果拷贝的内容结构复杂，有些属性可能会被丢掉

//2.深拷贝
//深拷贝:两变量的值变化互不影响
// let a = 5
// let b = a
// a = 6
// console.log(a, b) // 6 5
//浅拷贝：两个的值变化时会相互影响，此处两个对象指向的是同一个内存地址
// let obj1 = {
//     name: 'mys',
//     age: 18
// }
// let obj2 = obj1
// obj1.age = 20
// console.log(obj1) // {name: 'mys', age: 20}
// console.log(obj2) // {name: 'mys', age: 20}

// // json:'{"a": "hello", "b": "world"}' json的本质是字符串
// let obj = JSON.parse('{"a": "hello", "b": "world"}') // 将json格式的数据转换成对象
// console.log(obj) // {a: 'hello', b: 'world'}
// let str = JSON.stringify(obj) // 将对象转换成json格式
// console.log(str) // {"a":"hello","b":"world"}

//1) 利用JSON的方法实现深拷贝
// let obj1 = {
//     name: 'mys',
//     age: 18
// }
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 20 // obj1改变，obj2不会改变，obj1 obj2是两个独立的对象
// console.log(obj2) // {name: 'mys', age: 18}

//typeof只能判断基本类型数据，不能判断引用类型数据

//2) 可以通过toString()方法判断类型
// 检查类型
let checkType = data => {
    //slice(8, -1)：直接获取的类型有[]{},需要去除
    //[object String]:从第8位开始截取，-1代表截取到倒数第一位(不包含)，正好截取到需要的String
    return Object.prototype.toString.call(data).slice(8, -1)
}
//深拷贝
let deepClone = target => {
    let targetType = checkType(target) // 当前数据的类型
    let res // 返回值
    if (targetType === 'Object') {
        //当前数据是Object类型，返回空对象
        res = {}
    } else if (targetType === 'Array') {
        //当前数据是Array类型，返回空数组
        res = []
    } else {
        //当前数据既不是对象，也不是数组，就是基本数据类型
        return target
    }

    for(let i in target) {
        let value = target[i]
        let valueType = checkType(value)
        // 如果获取到的value也是对象或数组类型，需要递归进行拷贝
        if (valueType === 'Object' || valueType === 'Array') {
            res[i] = deepClone(value)
        } else {
            // 如果是基本数据类型，直接赋值即可
            res[i] = value
        }
    }
    return res
}

let obj1 = {
    name: 'mys',
    hobby: ['coding', 'eating']
}
let obj2 = deepClone(obj1)
obj2.hobby[0] = 'sleeping'
console.log(obj1) // hobby: ['coding', 'eating']
console.log(obj2) // hobby: ['sleeping', 'eating']


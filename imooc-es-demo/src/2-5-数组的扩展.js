//1. DOM
// let divs = document.getElementsByTagName('div');
// console.log(divs) //HTMLCollection
//
// let divs2 = document.getElementsByClassName('xxx');
// console.log(divs2) //HTMLCollection

// let divs3 = document.querySelectorAll('.xxx');
// console.log(divs3) //NodeList
// console.log(divs3 instanceof Array) //false

//类数组 伪数组：具有length属性；按照索引方式存储数据；不具有数组的方法，比如push() pop()

//2.类数组、伪数组 =>数组
//1)slice es5 : Array.prototype.slice.call()
// let arr = Array.prototype.slice.call(divs3);
// console.log(arr) //[]
// arr.push(123)
// console.log(arr) // [123]

// function foo() {
//     console.log(arguments instanceof Array) //false 说明arguments也不是一个真正的数组
// }
// foo(1, 'imooc', true)

//2)es6 Array.from()
// let arrayLike = {
//     0: 'es6',
//     1: 'es7',
//     2: 'es8',
//     length: 3
// }
// let arr = Array.from(arrayLike)
// arr.push('es9')
// console.log(arr) //['es6', 'es7', 'es8', 'es9']

//3.构造数组
//1)通过new Array()构造数组时,参数数量不同，表现得结果不同
// 如果只传一个参数，表示的是数组的长度；如果传多个参数，表述的是数组的内容
// let arr = new Array(1, 2)
// let arr2 = new Array(3)
// console.log(arr, arr2)

//2)Array.of()构造数组，参数都是数组的值
// let arr = Array.of(3)
// console.log(arr)
//Array.of()可以将不同类型的数据拼装成一个数组
// let arr = Array.of(1, true, 'imooc', [1, 2, 3], {name: 'mys'})
// console.log(arr) //[1, true, 'imooc', Array(3), {…}]

// 4. copyWithin() 应用：替换元素
//从数组的指定位置拷贝元素到数组的另一个指定位置
let arr = [1, 2, 3, 4, 5]
console.log(arr.copyWithin(1, 3)) // [1, 4, 5, 4, 5]
// 第一个参数:复制到指定目标的索引位置
// 第二个参数:元素复制的起始位置
// 第三个参数:停止复制的索引位置 (默认为 *array*.length) 如果为负值，表示倒数

//5.fill
// let arr = new Array(3).fill(7) //填充一个长度为3的全为7的数组
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// arr.fill('imooc', 1, 3)
// console.log(arr) // [1, 'imooc', 'imooc', 4, 5]

//6.includes:检查数组中是否包含目标元素，包含返回true,否则返回false
// let arr = [1, 2, 3, NaN]
// //indexOf：检查数组中是否包含目标元素，包含返回1，否则返回-1；不能检查NaN
// console.log(arr.indexOf(NaN)) //-1
// console.log(arr.includes(NaN)) //true
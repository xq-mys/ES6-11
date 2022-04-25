// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
// // 扁平化输出 arr.flat() 默认参数为1，数字表示深度
// console.log(arr.flat()) // [1, 2, 3, 4, 5, 6, Array(4)]
// console.log(arr.flat(3)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// // Infinity直接输出一维数组(但是不推荐)
// console.log(arr.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

arr = [1, 2, 3, 4, 5]
// const res = arr.map(x => x + 1) // [2, 3, 4, 5, 6]
// const res = arr.map(x => [x + 1]).flat() // [2, 3, 4, 5, 6]
// flat和map的结合
const res = arr.flatMap(x => [x + 1]) // [2, 3, 4, 5, 6]
console.log(res)

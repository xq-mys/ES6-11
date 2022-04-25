const obj = {
    name: 'mys',
    age:'18'
}
// 以前得到key
// console.log(Object.keys(obj)) // ['name', 'age']
// const res = Object.keys(obj).map(key => obj[key])
// console.log(res) // ['mys', '18']

console.log(Object.values(obj)) // ['mys', '18']
console.log(Object.entries(obj))
// 输出：
// [Array(2), Array(2)]
// 0: (2) ['name', 'mys']
// 1: (2) ['age', '18']
for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}:${value}`) // name mys    age 18
}
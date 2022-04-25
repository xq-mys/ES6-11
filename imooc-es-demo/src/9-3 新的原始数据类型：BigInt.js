const max = 2 ** 53
console.log(max) // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

const bigInt = 9007199254740993n
console.log(bigInt) // 9007199254740993n
console.log(typeof bigInt) // bigInt

console.log(1n == 1) // true
console.log(1n === 1) // false

const bigInt2 = BigInt(9007199254740993n)
console.log(bigInt2) // 9007199254740993n
const num = bigInt + bigInt2
console.log(num.toString()) // 18014398509481986
// Symbol
const s = Symbol('imooc')
console.log(s) // Symbol(imooc)
s.description = 'es'
console.log(s.description) // imooc 只读

const s2 = Symbol()
console.log(s2.description) // undefined
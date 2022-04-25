// node:global
// web: window self

// self.setTimeout
self.setTimeout(() => {
    console.log('2022')
}, 1000)

const getGlobal = () => {
    if (typeof self !== 'undefined') {
        return self
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global
    }
    throw new Error('无法找到全局对象')
}
const global = getGlobal()
console.log(global) // window

// 与上面函数的作用相同
console.log(globalThis) // window
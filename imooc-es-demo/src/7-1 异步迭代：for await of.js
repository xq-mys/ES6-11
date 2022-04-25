// 迭代需要遵循：可迭代协议；迭代器协议

// 以前的同步迭代
// const arr = ['es6', 'es7', 'es8']
// arr[Symbol.iterator] = function () {
//     let nextIndex = 0
//     return {
//         next() {
//             return nextIndex < arr.length ? {
//                 value: arr[nextIndex ++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }
// for (let item of arr) {
//     console.log(item)
// }

// 异步迭代
function getPromise(time) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value: time,
                done: false
            })
        }, time)
    }))
}

const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]
arr[Symbol.asyncIterator] = function () {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? arr[nextIndex++] :
                Promise.resolve({
                    value: undefined,
                    done: true
                })
        }
    }
}
async function test() {
    for await (let item of arr) {
        console.log(item)
    }
}
test() // 1000  2000  3000


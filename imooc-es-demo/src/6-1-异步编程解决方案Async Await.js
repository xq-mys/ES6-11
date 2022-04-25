// function foo() {
//     return 'imooc'
// }
// console.log(foo()) // imooc

// 1. async返回的是Promise对象
// async function foo() {
//     return 'imooc'
// }
// console.log(foo()) // Promise{<fulfilled>: 'imooc'}

// 2. async/wait
// 需求：异步操作1执行完成之后再输出2
// function timeout() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // console.log(1)
//             resolve(1)
//         }, 2000)
//     })
// }
// async function foo() {
//     const res = await timeout() // resolve的参数就是timeout()的返回值，await需要等其语句执行完毕才执行后面的内容
//     console.log(res)
//     console.log(2)
// }
// foo() // 1 2

// function timeout() {
//     return new Promise((resolve, reject) => {
//         // resolve('success')
//         reject('fail')
//     }, 2000)
// }
// async function foo() {
//     return await timeout()
// }
// foo().then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// 伪代码 应用
// async function request() {
//     const data = await axios.get('http://www.xxx.com')
//     console.log(
//         data
//     )
// }

//async wait实现ajax请求依次访问a.json b.json c.json
import ajax from './ajax'
function request(url) {
    return new Promise(resolve => {
        ajax(url, res => {
            resolve(res)
        })
    })
}
async function getData() {
    const res1 = await request('static/a.json')
    console.log(res1) // {a: 'A' }
    const res2 = await request('static/b.json')
    console.log(res2) // {b: 'B'}
    const res3 = await request('static/c.json')
    console.log(res3) // {c: 'C'}
}
getData()
// 异步操作：
// 回调 Promise Generator async(最常用)
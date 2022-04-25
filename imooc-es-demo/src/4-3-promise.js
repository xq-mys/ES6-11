// 1.Promise精髓：状态管理
// resolve:异步操作执行成功时的回调函数，reject:失败
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('imooc')
//         // // 使用场景
//         // if () {
//         //     resolve()
//         // } else {
//         //     reject()
//         // }
//
//         // resolve('成功')
//         reject('失败')
//     }, 1000)
// }).then(res => { // then的第一个参数必写，第二个参数可选
//     // 第一个参数：运行成功进入
//     console.log(res)
// }, res => {
//     // 第二个参数：运行失败进入
//     console.log(res)
// })

// 输出顺序？
// let p = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve()
// })
// console.log(2)
// // 1 2
// // Promise会立即执行
// p.then(res => {
//     console.log(3)
// })
// // 1 2 3
// // Promise的状态是不可逆的

// 2.Promise的状态
// let p1 = new Promise((resolve, reject) => {
//     resolve(1)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 1000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(3)
//     }, 1000)
// })
// console.log(p1) // fulfilled
// console.log(p2) // pending
// console.log(p3) // pending
// setTimeout(() => {
//     console.log(p2) // fulfilled
// }, 2000)
// setTimeout(() => {
//     console.log(p3) // rejected
// }, 2000)
//
// p1.then(res => {
//     console.log(res) // 1
// })
// p2.then(res => {
//     console.log(res) // 2
// })
// p3.catch(err => { // catch和then的第二个参数作用相同，表示失败
//     console.log(err) // 3
// })

// 3. Promise状态不可逆
// let p = new Promise((resolve, reject) => {
//     resolve(1)
//     reject(2)
// })
// p.then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })
// // 只输出1，因为Promise调用resolve(1)后，状态由pending变为fulfilled后，
// // 即使再调用reject(2)状态也不会再改变了

// 4. Promise调用Ajax异步操作
function ajax(url, successCallback, failCallback) {
    // 1)创建对象
    var xmlhttp // 此处使用var是为了兼容老版本浏览器
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else { // 兼容早期浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2)发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3)服务器响应
    xmlhttp.onreadystatechange = function () {
        // 4:响应完成 200:成功
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            // 如果没有传递obj参数，直接 successCallback
            successCallback && successCallback(obj)
        } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
            failCallback && failCallback(obj)
        }
    }
}

// 层层嵌套 => 复杂
// new Promise((resolve, reject) => {
//     ajax('static/a.json', res => {
//         console.log(res)
//         resolve()
//     })
// }).then(res => {
//     console.log('a成功')
//     // 此处需要return，表示把此处先创建的Promise返回出去，
//     // 使得下面输出b成功的then()是此处新建的Promise，而不是一个空的Promise
//     return new Promise((resolve, reject) => {
//         ajax('static/b.json', res => {
//             console.log(res)
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('b成功')
//     return new Promise((resolve, reject) => {
//         ajax('static/c.json', res => {
//             console.log(res)
//             resolve()
//         })
//     })
// }).then(res => {
//     console.log('c成功')
// })

// 优化
function getPromise(url) {
    return new Promise((resolve, reject) => {
        ajax(url, res => {
            resolve(res)
        }, err => {
            reject(err)
        })
    })
}

// 1) 三种都成功
// getPromise('static/a.json')
//     .then(res => {
//         console.log(res) // {a: 'A'}
//         return getPromise('static/b.json')
//     }).then(res => {
//     console.log(res) // {b: 'B'}
//     return getPromise('static/c.json')
// }).then(res => {
//     console.log(res) // {c: 'C'}
// })

// 2)a失败
// getPromise('static/aa.json')
//     .then(res => {
//         console.log(res) // Not Found
//         return getPromise('static/b.json')
//     }, err => {
//         console.log(err) // undefined
//         // 注意：a即使是失败了，也要return getPromise，因为这里创建了b的Promise，
//         // 否则后边b将输出undefined，因为如果没有return，b的Promise就是空
//         return getPromise('static/b.json')
//     }).then(res => {
//     console.log(res) // {b: 'B'}
//     return getPromise('static/c.json')
// }).then(res => {
//     console.log(res) // {c: 'C'}
// })

// 3) 统一管理失败状态
getPromise('static/a.json')
    .then(res => {
        console.log(res) // {a: 'A'}
        return getPromise('static/bb.json')
    }).then(res => {
    console.log(res) // Not Found
    return getPromise('static/c.json')
}).then(res => {
    console.log(res) // 无
}).catch(err => { // 统一管理失败的状态，如果a成功，b不成功
    // a:正常, b:Not Found, c:无
    console.log(err) // undefined
})
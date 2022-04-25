// 1. Promise.resolve()
// let p1 = Promise.resolve('success')
// p1.then(res => {
//     console.log(res) // success
// })

// 2. Promise.reject()
// let p2 = Promise.reject('fail')
// p2.catch(err => {
//     console.log(err) // fail
// })

//  应用场景：利用Promise的静态方法，包装需要返回的字符串
// function foo(flag) {
//     if (flag) {
//         return new Promise(resolve => {
//             resolve('success')
//         })
//     } else {
//         // return 'fail'
//         return Promise.reject('fail') // 利用Promise的静态方法，包装需要返回的字符串
//     }
// }
// foo(false).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

// 3. Promise.all():全部成功才成功，有一个失败则都失败
// 需求：三个异步操作都执行完成之后再做其他事
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(1) // 1
//         resolve('1成功')
//     }, 1000)
// })
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(2) // 2
//         resolve('2成功')
//     }, 2000)
// })
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(3) // 3
//         resolve('3成功')
//     }, 3000)
// })
// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res) // ['1成功', '2成功', '3成功']
// })
// // 输出顺序： 1 2 3 ['1成功', '2成功', '3成功']
// // 实现了需求，当三个异步操作执行完成，再执行其他的操作(then中)

// let p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(4) // 4
//         reject('4失败')
//     }, 1000)
// })
// Promise.all([p1, p2, p3, p4]).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err) // 4失败
// })

// 4.Promise.race() 只要有一个完成，则全部都完成
// Promise.race([p1, p2, p3]).then(res => {
//     console.log(res) // 1成功
// }, err => {
//     console.log(err)
// })

// 应用场:1:上传图片
// const imgArr = ['1.jpg', '2.jpg', '3.jpg']
// let promiseArr = []
// imgArr.forEach(item => {
//     promiseArr.push(new Promise((resolve, reject) => {
//         // 图片上传操作
//         // resolve()
//         reject()
//     }))
// })
// Promise.all(promiseArr).then(res => {
//     // 插入数据库操作
//     console.log('图片全部上传完成')
// }, err => {
//     console.log('图片上传失败')
// })

// 应用场景2：图片加载
function getImg() {
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.onload = function () {
            resolve(img)
        }
        img.src = 'https://www.imooc.com/static/img/index/logo2020.png'
        // img.src = 'http://www.xxx.com'
    })
}
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('图片请求超时')
        }, 2000)
    })
}
// race:因为图片要么加载成功，要么加载失败
Promise.race([getImg(), timeout()]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
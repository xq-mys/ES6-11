// generator 生成器函数
// function* foo() {
//     for (let i = 0; i < 3; i ++) {
//         yield i
//     }
// }
//
// console.log(foo()) // Generator{_invoke: ƒ}
// let f = foo()
// console.log(f.next()) // {value: 0, done: false}  value:当前的值，done:执行的情况
// console.log(f.next()) // // {value: 1, done: false}
// console.log(f.next()) // // {value: 2, done: false}
// console.log(f.next()) // // {value: undefined, done: true} done:true说明函数执行完成
// 生成器函数不会立即执行，而是返回生成器的迭代器对象。每次执行直到yield后面的语句为止
// 注意：
// 1.不能作为构造函数使用
// 2.关键字yield只能在生成器函数中使用，不能在其他地方使用

// function* gen(args) {
//     args.forEach(item => {
//         // yield item + 1 // 报错
//     })
// }

// next generator是如何执行的？
// function* gen(x) {
//     let y = 2 * (yield(x + 1))
//     let z = yield(y / 3)
//     return x + y + z
// }
// next的参数，上一个yield的返回值

// 1)next不传递参数的情况
// let g = gen(5)
// console.log(g.next()) // 6
// // 此处没有返回值，则yield(x + 1)为undefined,所以y=2*undefined => NaN
// console.log(g.next())  // NaN
// console.log(g.next()) // NaN
// 2)给next传递参数
// let g = gen(5)
// console.log(g.next()) // 6
// console.log(g.next(12))  // 此时y=24，返回8
// console.log(g.next(13)) // 此时z=13, x=5,y=24,返回42

// 应用：每次输出7的倍数
// function* count(x = 1) {
//     while (true) {
//         if (x % 7 === 0) {
//             yield  x // 利用yield使得当前循环不是死循环
//         }
//         x ++
//     }
// }
// let n = count()
// console.log(n.next().value) // 7
// console.log(n.next().value) // 14
// console.log(n.next().value) // 21
// console.log(n.next().value) // 28
// console.log(n.next().value) // 35

// 应用：generator管理异步状态
// 案例：利用Ajax请求a/b/c.json
function ajax(url, callback) {
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
            callback(obj)
        }
    }
}

function request(url) {
    ajax(url, res => {
        getData.next(res)
    })
}

function* gen() {
    let res1 = yield request('static/a.json')
    console.log(res1)
    let res2 = yield request('static/b.json')
    console.log(res2)
    let res3 = yield request('static/c.json')
    console.log(res3)
}

let getData = gen()
getData.next()
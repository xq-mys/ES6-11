// 场景：现在页面上有三个请求，分别请求不同的数据，如果一个接口服务异常，整个都是失败的，都无法渲染出数据
// Promise.all() 一个失败，全部失败
// Promise.all([
//     Promise.resolve({
//         code: 200,
//         data: [1, 2, 3]
//     }),
//     Promise.reject({
//         code: 500,
//         data: []
//     }),
//     Promise.resolve({
//         code: 200,
//         data: [7, 8, 9]
//     }),
// ]).then(res => {
//     console.log(res)
//     console.log('成功')
// }).catch(err => {
//     console.log(err)
//     console.log('失败')
// })

// Promise.allSettled()
// 在并发任务中，无论一个任务正常或者异常，都会返回对应的的状态
Promise.allSettled([
    Promise.resolve({
        code: 200,
        data: [1, 2, 3]
    }),
    Promise.reject({
        code: 500,
        data: []
    }),
    Promise.resolve({
        code: 200,
        data: [7, 8, 9]
    }),
]).then(res => {
    // console.log(res)
    // console.log('成功')
    const data = res.filter(item => item.status === 'fulfilled')
    console.log(data)
}).catch(err => {
    console.log(err)
    console.log('失败')
})
// 输出
// 0: {status: 'fulfilled', value: {…}}
// 1: {status: 'fulfilled', value: {…}}
// 即使有一个失败，也能得到其他成功的状态
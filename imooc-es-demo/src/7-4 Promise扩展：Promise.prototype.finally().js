new Promise(((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally') // 成功失败都很进入
})

// 应用场景1：用户加载数据时的等待框消失操作可以写在finally中，因为不管加载成功还是失败，都会去除等待框
// 应用场景2:关闭数据库的连接
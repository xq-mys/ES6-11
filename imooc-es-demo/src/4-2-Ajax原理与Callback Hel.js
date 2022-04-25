// 1. Ajax原理
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

// var url = 'http://jsonplaceholder.typicode.com/users'
// ajax(url, res => {
//     console.log(res)
// })

// 2.Callback Hell
// 请求1 -> 2 -> 3 顺序执行
// 1) 在static文件夹下创建三个json文件 a.json b.json c.json,内容如下：
// {               {               {
//     "a": "A"        "b": "B"        "c": "C"
// }               }               }
// 2) 调用ajax函数
ajax('static/a.json', res => {
    console.log(res)
    // b在a的回调函数中执行
    ajax('static/b.json', res => {
        console.log(res)
        ajax('static/c.json', res => {
            console.log(res)
        })
    })
})
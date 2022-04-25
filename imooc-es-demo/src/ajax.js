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

export default ajax
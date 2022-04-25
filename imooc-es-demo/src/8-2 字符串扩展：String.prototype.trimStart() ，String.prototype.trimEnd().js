const str = '   imooc   '
// 正则
// 去掉前面的空格
console.log(str.replace(/^\s+/g, '')) // 'imooc   '
// 去掉后面的空格
console.log(str.replace(/\s+$/g, '')) // '   imooc'

// es10
// 去掉前面的空格
console.log(str.trimStart())
console.log(str.trimLeft())
// 去掉后面的空格
console.log(str.trimEnd())
console.log(str.trimRight())
// 去掉前后所有空格
console.log(str.trim())
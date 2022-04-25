// JSON 超集
// \u2029段分隔符 \u2028行分隔符 不会报错，以前会报错
// eval('var str = "imooc";\u2029 function foo(){return str}')
// console.log(foo())

// 0xD800 ~ 0xDfff
console.log(JSON.stringify('\uD83D\uDE0E')) // emoji
console.log(JSON.stringify('\uD83D')) // "\ud83d" 不是一个字符原样输出
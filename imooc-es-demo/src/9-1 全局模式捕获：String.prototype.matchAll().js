// 需求：获取div中的内容
const str = `
    <html>
        <body>
            <div>第一个div</div>
            <p>这是p</p>
            <div>第二个div</div>
            <span>这是span</span>
        </body>
    </html>
`
// 1. exec g
// function selectDiv(regExp, str) {
//     let matches = []
//     while (true) {
//         // console.log(regExp.lastIndex)
//         const match = regExp.exec(str);
//         if (match === null) {
//             break
//         }
//         matches.push(match[1]) // 可以选择子结果
//     }
//     return matches
// }
// const regExp = /<div>(.*)<\/div>/g
// const res = selectDiv(regExp, str);
// console.log(res) // ['第一个div', '第二个div']

// 2. match 匹配所有包含的结果 (不满足需求)
// console.log(str.match(regExp)) // ['<div>第一个div</div>', '<div>第二个div</div>']

// 3. replace
// function selectDiv(regExp, str) {
//     let matches = []
//     str.replace(regExp, (all, first) => {
//         matches.push(first)
//     })
//     return matches
// }
// const regExp = /<div>(.*)<\/div>/g
// const res = selectDiv(regExp, str)
// console.log(res) // ['第一个div', '第二个div']

// 4.matchAll
function selectDiv(regExp, str) {
    let matches = []
    for (let match of str.matchAll(regExp)) {
        matches.push(match[1])
    }
    return matches
}
const regExp = /<div>(.*)<\/div>/g
const res = selectDiv(regExp, str)
console.log(res) // ['第一个div', '第二个div']
const validJSON = json => {
    try {
        JSON.parse(json)
        return true
    } catch{ // 参数e可以不写
        return false
    }
}
const json = '{"name": "mys", "age":"18"}'
console.log(validJSON(json)) // true
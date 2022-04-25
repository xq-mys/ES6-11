// 动态导入的按需加载
const oBtn = document.getElementById('#btn')
oBtn.addEventListener('click', () => {
    import('./ajax').then(mod => {
        // console.log(mod) // Module{__esModule: true, Symbol(Symbol.toStringTag): 'Module', default: ƒ}
        mod.default('static/a.json', res => {
            console.log(res) // {a: 'A'}
        })
    })
})
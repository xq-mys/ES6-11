function foo(
    a,
    b,
    c, // ES8 允许函数的最后一个参数有尾逗号，方便修改参数
) {
    console.log(a, b, c)
}
foo(1, 2, 3)
const user = {
    address: {
        street: 'xxx街道',
        getNum() {
            return '80号'
        }
    }
}
// 以前的判断：先是否存在，再获取需要的值
const street = user && user.address && user.address.street
console.log(street)
const num = user && user.address && user.address.getNum && user.address.getNum()
console.log(num)

// 可选链  ?.不能分开
const street2 = user?.address?.street
console.log(street2)
const num2 = user?.address?.getNum?.()
console.log(num2)
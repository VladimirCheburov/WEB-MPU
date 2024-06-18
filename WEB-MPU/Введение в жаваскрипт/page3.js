



// Напишите функцию minDigit(x), которая возвращает
//  наименьшую цифру целого неотрицательного числа x .


function minDigit(x) {
    let ostatok = null
    let delitel = 10
    let result = 9
    while (ostatok !== 0 && x >= 1) {
        ostatok = x % delitel
        if (result >= (ostatok / delitel * 10)) {
            result = ostatok / delitel * 10
        }
        x = x - ostatok
        delitel = delitel * 10
    }
    return result
}
console.log(minDigit(2234))
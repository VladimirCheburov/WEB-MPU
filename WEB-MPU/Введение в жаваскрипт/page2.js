

// Напишите функцию gcd(a,b), которая возвращает x --
//  наибольший общий делитель двух неотрицательных чисел  a и  b .


function dcg(a, b) {
    let result = null;
    if (a % b == 0) {
        return b
    } else if (b % a == 0) {
        return a
    } else {
        for (let i = 0; i < min(a, b); i++) {
            if (a % i == 0 && b % i == 0) {
                result = i
            }
        }
        return result
    }
}
function min(a, b) {
    if (a > b) {
        return b
    } else {
        return a
    }
}
console.log(dcg(3344, 4564))
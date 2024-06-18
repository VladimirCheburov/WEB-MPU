
// // Напишите функцию pow(x,n), которая возвращает x в степени n.
//  Иначе говоря, умножает x на себя n раз и возвращает результат.
//   Функция обязана поддерживать только натуральные значения n. 
//   Встроенную операцию возведения в степень использовать нельзя.


function pow(x, n) {
    let result = 1
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}
console.log(pow(20, 22)); 
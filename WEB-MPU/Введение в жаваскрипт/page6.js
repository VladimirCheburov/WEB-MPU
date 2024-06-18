


// Реализуйте функцию fibb(n), которая для любого целого неотрицательного 
// числа n <= 1000 вернёт n-ое число из последовательности Фибоначчи.




function fibb(n) {
	let fibs = [0, 1];
	while (fibs.length <= n) {
		let oldVal = fibs[fibs.length - 2];
		fibs.push(fibs[fibs.length - 1] + oldVal);
	}
	return fibs;
}
let n = 4
let fibonacciArray = fibb(n);
console.log(n + '-й элемент из последовательности Фибоначчи = ' + fibonacciArray[n]);

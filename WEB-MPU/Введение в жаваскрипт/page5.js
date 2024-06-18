



// Напишите функцию cesar(str, shift, action), которая производит шифрование и дешифровку строки
//  str с использованием шифра Цезаря. В качестве алфавита необходимо использовать русский алфавит. 
//  Символы, не входящие в алфавит, оставлять неизменными. Параметр shift отвечает за сдвиг алфавита.
//   Если action == 'encode', функция должна производить шифрование, а если action == 'decode' --
//    дешифровку. Расшифруйте сообщение "эзтыхз фзъзъз", ответ приведите в комментарии в файле с
//     кодом программы.




function cesar(str, shift, action) {
    let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let pos = alphabet.indexOf(char);

        if (pos !== -1) {
            if (action == 'encode') {
                result += alphabet[(pos + shift) % 33];
            } else if (action == 'decode') {
                result += alphabet[(pos - shift + 33) % 33];
            }
        } else {
            result += char;
        }
    }

    return result;
}
console.log(cesar('я', 1, 'encode'))
console.log(cesar('эзтыхз фзъзъз', 8, 'decode'))
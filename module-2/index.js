'use strict';
let userInput;
let input;
const numbers = [];
const NOT_NAN = 'Было введено не число, попробуйте еще раз';

input = Number(prompt('Введите число'));
if (Number.isNaN(input)) {
  alert(NOT_NAN);
} else {
  numbers.unshift(input);
}

do {
  userInput = prompt('Введите число');
  if (userInput !== null) {
    numbers.push(Number(userInput));
  }
} while (userInput !== null);

console.log(numbers);

let total = 0;
for (let value of numbers) {
  total += value;
}
const ARRAY_SUM = `Общая сумма чисел равна ${total}`;
if (total !== 0) {
  alert(ARRAY_SUM);
}

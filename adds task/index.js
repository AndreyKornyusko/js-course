'use strict';


/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
function findLargestNumber(numbers) {
  for (let i = 0, max = numbers.length; i <= max; i += 1) {
    if (numbers[0] < numbers[i]) {
      numbers[0] === numbers[i];
      // numbers.shift();
    }
  }
  return numbers[0];
}
// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // вернет 3

console.log(findLargestNumber([27, 12, 18, 5])); // вернет 27

console.log(findLargestNumber([31, 128, 14, 74])); // вернет 128

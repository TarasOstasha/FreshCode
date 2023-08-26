// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
const randomNumberArray = new Array(23).fill().map(() => Math.round(Math.random() * 40))
//console.log(randomNumberArray);
// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
randomNumberArray.push(222); // add to the end
randomNumberArray.unshift(222); // add to the start
randomNumberArray.pop(); // remove from the end
randomNumberArray.shift(); // remove from the start
//console.log(randomNumberArray);
// 2 Вивести розмір масиву.
randomNumberArray.length
//console.log(randomNumberArray.length);
// 3 Зробити копію масиву.
const copyOfRandomNumbers = [...randomNumberArray]; // i'm gonna use this array
//console.log(copyOfRandomNumbers);
// // Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли
// 4 Вивести елементи з парними індексами.
const isEvenIndexes = [];
for(let i = 0; i < copyOfRandomNumbers.length; i++) {
    if(!(copyOfRandomNumbers[i]%2)) {
        isEvenIndexes.push(copyOfRandomNumbers[i]); // even index
    }
}
//console.log(isEvenIndexes);
// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
const even = [];
for (const num of copyOfRandomNumbers) {
  if (num % 2 !== 1) {
    even.push(num);
  }
}
//console.log(even); // [19, 5, 9, 13]
// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).
copyOfRandomNumbers.push(0);
copyOfRandomNumbers.unshift(0);
const zeroIndexArray = [];
for(let i = 0; i < copyOfRandomNumbers.length; i++) {
    if(copyOfRandomNumbers[i] == 0) {
        zeroIndexArray.push(i)
    }
}
//console.log(zeroIndexArray); 
// 7 Підрахувати кількість нульових елементів (елемент дорівнює нулю).
const zeroIndexArray2 = [];
for(let i = 0; i < copyOfRandomNumbers.length; i++) {
    if(copyOfRandomNumbers[i] == 0) {
        zeroIndexArray2.push(i)
    }
}
//console.log(zeroIndexArray2.length) // just checked the length of new created array with 0 values
// // Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
const myArray = [-1, 5, 0, 9, -10].filter(item => item > 0);
//console.log(myArray);
// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
const myNewArr = [99, 5, 0, 9, 30].map(item => item/100);
//console.log(myNewArr);
// 10 Вивести елементи масиву, зведені у куб. // forEach
const myItemArray = [99, 5, 0, 9, 30];
let cubeArray = [];
myItemArray.forEach(item => {
    cubeArray.push(item*item*item);
});
//console.log(cubeArray);
// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, 
//або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex
const myTestArr = [34,10,60,-8];
const squareIndex = myTestArr.findIndex(item => item*item === 100);
myTestArr.splice(squareIndex,1);
//console.log(myTestArr);
// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
const isEven = [2,4,6,12,20].every(item => item%2 === 0);
//console.log(isEven);
// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some
const isNegative = [-1, 5, 0, 9, -10, 10].some(item => item < 0);
//console.log(isNegative);
//1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.
const a = 5;
const b = 2;
console.log(a*b);
//2) Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.
const c = 5;
const d = 2;
console.log(a/b);
//3) Створіть дві змінні e та f. Виведіть у консоль результат додавання.
const e = 5;
const f = 2;
console.log(e + f);
// Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль
const myNumber = 11;
const isChecked = true;
const myString = "java script";
const myNumberString = "100";
console.log(myNumber,isChecked,myString,myNumberString);
//5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1; // or num++
num -= 1; // or num--
/************************************************* *****************/
//Таски на prompt (вводити з допомогою prompt, виводити з допомогою alert):
//1) Запитати число у користувача, піднести його до квадрату і вивести результат.
const receivdeNumber = +prompt('PLease enter a number');
const result = Math.pow(receivdeNumber, 2);
//2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
const receivdeNumber1 = +prompt('PLease enter a first number');
const receivdeNumber2 = +prompt('PLease enter a second number');
const result2 = Math.round((parseFloat(receivdeNumber1)+parseFloat(receivdeNumber2))/2);
console.log(result2);
//3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.
const userMinutes = +prompt('PLease enter any number of minutes');
const result3 = Math.round(userMinutes * 60);
console.log(result3)
//4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. 
//Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, 
//наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)
const greeting = 'Hello';
let userName = prompt('PLease enter your name');
alert(greeting + ' ' + userName);
// тут ще варіант я зробив щоб завжди iмя починалось з великої лiтери
alert(greeting + ' ' + userName.charAt(0).toUpperCase() + userName.slice(1));


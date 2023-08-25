// ***************************************************************************
//1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
const receivedVal = +prompt("PLease enter a number");
if(receivedVal === 10) console.log("You paste correct nummer, Congrats!!!");
else console.log("Wrong Number! PLease enter again!");
// method 2
let receivedVal2 = 0;
do {
    receivedVal2 = +prompt("PLease enter a number");
} while (receivedVal2 !== 10)


// 2) Напишіть дві перевірки.
// Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
const test = true;
if(test) console.log("True");
else console.log("False");
//Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
if(!test) console.log("True");
else console.log("False");305

// 3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн.,
//  а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.
const orderAmount = +prompt("Enter order amount $");
if(orderAmount < 300) {
    alert("No Discount, your final price is " + orderAmount);
} else if(orderAmount > 300 && orderAmount < 800) {
    alert('Your order amount is higher then 300$ and you are receiving a discount of 3%  \n Your final price is ' + orderAmount * 0.97);
} else if(orderAmount > 800) {
    alert('Your order amount is higher then 800$ and you are receiving a discount of 5%  \n Your final price is ' + orderAmount * 0.95);
} 

/************************************************* *****************/
// Таски на цикли.
// Кожне завдання вирішити циклами while, do..while.
// 1) Виведення чисел від 25 до 0 (порядок зменшення).
let myNumber = 25;
do {
    myNumber--
    console.log(myNumber);
} while (myNumber !== 0)
// 2) Виведення чисел від 10 до 50, які кратні 5.
let i = 0;
while(i < 50) {
    if(i%5 === 0 && i > 9) {
        console.log(i);
    }
    i++;
}
// 3) *Знайти суму чисел в межах від 1 до 100.
// method DO WHILE
let j = 1;
let sum = 0;
do {
    j++;
    sum += j;
} while(j < 101) 
console.log(sum);

// But I prefer to use this method ***
let sum1 = 0;
let myArr = [];
for(let i = 1; i <= 100; i++) {
    myArr.push(i)
    sum1 = myArr.reduce((acc, item) => {
        return acc + item
    },0)
    console.log(sum1)
}

// /************************************************* *****************/
// Як відповідь на завдання прикріпити посилання на гіт-репозиторій.

// GITHUB - https://github.com/TarasOstasha/FreshCode/blob/js-conditions-and-loops/js-conditions-and-loops.js
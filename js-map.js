// Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
// Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
let myCol = new Map([[1,"first"], [3,"third"]]);
// Отримайте кількість елементів.
//console.log(myCol.size);
// Додати та видалити елемент.
myCol.set(2, 'two');
//myCol.delete(1)
//console.log(myCol);
// Здійсніть пошук за ключом.
for(let [key, value] of myCol) {
  // Отримайте список ключів та значень окремо.
  //console.log(...myCol.keys());
  //console.log(...myCol.values());

  // Перевірити, чи є в мапі числівник для числа 2.
  if(value === 'two') {
    //console.log(value); // тут я просто перевірив чи існує two як числівник
  }
}
// чи можливо було просто зробити от таку от перевірку?
console.log(myCol.has(2));


// *Написати функцію, яка перероблятиме текст з числами
function transformSentense(text) {
  for(let [key, value] of myCol) {
    text = text.replace(key.toString(), value);
  }
  return text;
}
// "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
//  на текст з порядковими числівниками за допомогою мапи вище:
// "This year I will enter the first grade. I have two brothers. I am the third child of my parents."
console.log(transformSentense('This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.'));
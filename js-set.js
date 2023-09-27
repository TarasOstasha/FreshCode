// Створіть колекцію Set із початковими значеннями 1, 2, 3.
const newCollection = new Set([1,2,3]);
// За допомогою методу has перевірте наявність елемента зі значенням 3, а потім елемента зі значенням 4.
newCollection.has(3);
newCollection.has(4);
// Додати ще кілька елементів.
newCollection.add(45);
newCollection.add(17);
newCollection.add('test');
// За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
// Знайдіть суму цих значень.
// Видаліть елемент 2.
// Очистіть усю колекцію.
for(let item of newCollection) {
    //console.log(item);
}
// З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
Array.from(new Set([1,6,9,4,9,1,5,6]))
// З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const array1 = [1,6,9,4,9,1,5,6];
const array2 = [5, 10, 11];
Array.from(new Set([...array1,...array2]));
// * З масиву
const messages = [
  { id: 1, name: 'Ivo', message: 'hello', date: new Date() },
  { id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
  { id: 3, name: 'Wally', message: 'hi)', date: new Date() },
  { id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];
// створити: 
// 1) масив імен користувачів (унікальних)
const names = [];
for(let val of messages) {
    names.push(val.name)
}
const uniqueNames = Array.from(new Set(names));

// 2) мапу вигляду
let myMap = new Map([[1,"first"], [3,"third"]])
// Map (2) {
//   Ivo => [{message, date}, {message, date}],
//   Wally => [{message, date}, {message, date}]
// }
// тобто в мапі імені користувача має співставлятися масив його повідомлень, 
// де кожне повідомлення представлене об'єктом з текстом повідомлення і його датою.
let userMsgs = new Map();
messages.forEach(item => {
    if(userMsgs.has(item.name)) {
        userMsgs.get(item.name).push(item);
    } else {
        userMsgs.set(item.name, [item]);
    }
});
console.log(userMsgs);

//console.log(Array.from(Array.from(new Set([...array1,...array2]))));

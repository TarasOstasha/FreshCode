// 1.
// Створити об'єкт customer, що містить такі властивості:
// ім'я, 
// прізвище, 
// електронна адреса, 
// password,
// номер телефона,
// адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
// методи: 
// виведення адреси, 
// зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
const customer = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'test@gmail.com',
    password: '123qwer',
    cellphone: '345678901',
    address: {
        street: '123 standor rd',
        apartment: 21,
        city: 'Toronto'
    },
    getFullAddress() {
        return `My address is ${this.address.street} street, apartment ${this.address.apartment}, city of ${this.address.city}`;
    },
    changeCellphoneNumber(number) {
        return this.cellphone = number;
    }
}
// Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
customer.isMale = true;
// Видалити у об'єкта властивість адреса.
delete customer.address;
// Зробити копії об'єкту customer двома різними способами.
const customerCopy1 = {...customer};
const customerCopy2 = Object.assign({},customer);
//console.log(customer.changeCellphoneNumber('23213213213213213'));
//console.log(customerCopy2, 'customerCopy2');


// ********** 2 ***********
// 2. Перебрати і вивести властивості об'єкту cat
// {   
//     name: 'Murka',
//     color: 'black',
//     isMale: false,
//     isFurnitureDemage: true,

// }
// циклом for..in.
const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true
}

for (let key in cat) {
    console.log(key);
}

// *********** 3 **********
// Створити функцію-конструктор для створення об'єктів книг з властивостями:
// автор, 
// назва, 
// рік видання, 
// видавництво (рядок або *об'єкт з властивостями місто, назва), 
// ціна.
//    Передбачити методи:
// для обчислення віку книги (у роках),
// для зміни ціни книги.
/**
 * 
 * @param {string} bookAuthor 
 * @param {string} bookName 
 * @param {string} bookAge 
 * @param {string} bookPublishHouse 
 * @param {number} bookPrice 
 */
function Book(bookAuthor, bookName, bookAge, bookPublishHouse, bookPrice) {
    this._bookAuthor = bookAuthor;
    this._bookName = bookName;
    this._bookAge = bookAge;
    this._bookPublishHouse = bookPublishHouse;
    this._bookPrice = bookPrice;

    this.bookAge = function() {
        return this._bookAge;
    },
    this.changeBookName = function(newName) {
        return this._bookName = newName;
    }
    this.changeBookPrice = function(newPrice) {
        return this._bookPrice = newPrice;
    }
}

const myBook = new Book('J.K. Rowling', 'Harry Potter and Philosophers Stone', '11', 'Bloomsbury', 30);
myBook.changeBookName('Harry Potter and the Prisoner of Azkaban');
myBook.changeBookPrice(56);
console.log(myBook);
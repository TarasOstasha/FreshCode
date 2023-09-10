// function User(name, surname, age, isMale, email, isSubscribed) {
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
//   }
  

//   User.prototype.getFullName = function() {
//       return this.firstName + ' ' + this.lastName;
//   }

//   User.isUser = function(obj) {
//     return obj instanceof User
//   }

//   const user1 = new User('jack', 'wilsher', 23, 'male', 'test@SpeechGrammarList.com', true);
//   //console.log(user1);



//   class User1 {
//     constructor(name, surname, age, isMale, email, isSubscribed) {
//         this._firstName = name;
//         this._lastName = surname;
//         this._age = age;
//         this._isMale = isMale;
//         this._email = email;
//         this._isSubscribed = isSubscribed;
//     }

//     getFullName = function() {
//         return `${this._firstName}  ${this._lastName}`;
//     }

//     static isUser(obj) {
//         return obj instanceof User1;
//     }

//     set age(value) {
//         if(typeof value !== 'number') {
//             throw new Error('age must be a number');
//         }
//         if(value < 0 || value > 150) {
//             throw new Error('ager must be between 0 and 50');
//         } 
//         this._age = value;
//     }
//     get age() {
//         return this.age
//     }

//   }

//   try {
//     const user2 = new User1('jack', 'wilsher', 23, 'male', 'test@SpeechGrammarList.com', true);
//     console.log(User1.isUser(user2));
//   } catch (error) {
//     console.log(error);
//   }


//   class CellPhone {
//     constructor(brand, model, color) {
//         this._brand = brand;
//         this._model = model;
//         this._color = color;
//     }

//     get brand() {
//         return this._brand;
//     }
//   }

//   try {
//     const newCellPhone = new CellPhone('iPhone', '11', 'red');

//     console.log(newCellPhone.brand);

//   } catch(err) {
//     console.log(err);
//   }


// 1. Реалізувати клас Phone (таска з заняття).
// Властивості: марка, модель, колір, ціна, рік випуску, можна використати додаткові властивості за бажанням.
// Метод: розрахунок віку телефона.
class Phone {
    constructor(brand, model, color, price, manufacturedYear, ) {
        this._brand = brand;
        this._model = model;
        this._color = color;
        this._price = price;
        this._manufacturedYear = manufacturedYear;
    }
    get phoneYear() {
        if( typeof this._manufacturedYear !== 'number') {
            throw new Error('Error with date manufactuere year, you should always use number!')
        }
        return new Date().getFullYear() - this._manufacturedYear
    }
    
    // Реалізувати сеттер для року виробництва з валідацією та відповідний геттер. Перевірити, чи належить рік виробництва певному діапазону, можна використати клас нижче.
    set manufactuedYear(year) {
        this._manufacturedYear = year;
    }
    get manufactuedYear() {
        if(this._manufacturedYear > 2005 && this._manufacturedYear < 2020) {
            return this._manufacturedYear;
        } else {
            throw new Error('Year range is not valid')
        }
       
    }

}
// Створити екземпляр класу, викликати для нього метод.
try {
    const newCellpone = new Phone('iPhone', '10', 'Silver', 1000, 2016);
    newCellpone.phoneYear;
    newCellpone.manufactuedYear = 2019;
    //console.log(newCellpone.manufactuedYear);
} catch(err) {
    console.log(err);
}

// 2. *Реалізувати клас RangeValidator.
// Клас призначений для валідації потрапляння числового значення в діапазон. 
// Границі діапазона є властивостями:
// ■ from (типу number);
// ■ to (типу number);
// (from <= to)
// Реалізувати getter'и та setter'и для обох властивостей.

// *** NOTES
// Не впевнений чи до кінця зрозумів умову задачі тому буду писати коменти а Ви потім мене поправите 

class RangeValidator {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }
    // тут сеттери і геттери для заданого діапазону чисел
    set from(number) {
        this._from = number;
    }
    set to(number) {
        this._to = number;
    }
    get from() {
        return this._from;
    }
    get to() {
        return this._to;
    }

    // *Реалізувати getter range, який повертатиме масив із двома числами діапазону (тобто геттер повертає не властивість, а масив із двома елементами, які є властивостями)

    // тут не зрозумів як ми будемо дальше це використовувати 
    get range() {
        return [this._from, this._to]
    }

    // Реалізувати метод isValid, який прийматиме число і перевірятиме, чи входить число у вказаний діапазон (повертає boolean).
    isValid(number) {
        if(number >= this.from && number <= this._to) { // хіба що тут заюзати геттер зверху - range.range[0] і range.range[1] ???
            return true
        }
        throw new Error(false);
    }
}

try {
    const range = new RangeValidator(2,5);
    range.from = 7;
    range.to = 14;
    range.range
    //console.log(range.isValid(15)); 
} catch (error) {
    console.log(error);
}



// Приклади роботи:

// // Конструктор (+сеттери)
// const range1 = new RangeValidator(1, 5.5) // Відпрацьовує
// const range1 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)

// // Робота сетерів
// range1.from = 5; // Відпрацьовує
// range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)

// range1.to = 80; // Відпрацьовує
// range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from

// // Робота гетерів
// console.log(range1.from) // => 5
// console.log(range1.to) // => 80

// // Робота геттера range
// console.log(range1.range) // => [5, 80]

// // Робота validate
// console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
// console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])
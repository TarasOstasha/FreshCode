// Для базового класу Vehicle реалізувати:
// - властивості:
// --- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
// --- brand - марка,
// --- model - модель,
// --- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).
// - методи:
// --- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
// --- getAge() - повертає кількість років із дня виробництва (буде плюсом реалізувати геттером).

class Vehicle {
    constructor(dimensions, brand, model, manufactureDate) {
        this._width = dimensions.width;
        this._height = dimensions.height;
        this._length = dimensions.length;
        this._brand = brand;
        this._model = model;
        this._manufactureDate = manufactureDate;
    }

    getFullInfo() {
        return `Your car is ${this._brand}, model - ${this._model}, ${this.getAge()} years old`
    }

    getAge() {
        return new Date().getFullYear() - this._manufactureDate;
    }
}

const testVehicle = new Vehicle({ width: 20, height: 20, length: 30 },'Man', 'x45', 2016);


class PassengerTransport extends Vehicle {
    constructor(dimensions, brand, model, manufactureDate, passengerLimit, passengerCount) {
        super(dimensions, brand, model, manufactureDate);
        this._passengerLimit = passengerLimit;
        this._passengerCount = passengerCount;
    }
    addPassenger() {
        if(this._passengerCount < this._passengerLimit) {
            this._passengerCount += 1;
            return true;
        } else {
            throw new Error('You are out of the maximum passenger limit');
        }
    }

    getFullInfo() {
        return `Your car is ${this._brand}, model - ${this._model}, ${this.getAge()} years old with ${this._passengerLimit} maximum passangers` 
    }
}

const myTransport = new PassengerTransport({ width: 20, height: 20, length: 30 },'Man', 'x45', 2020, 6, 4);
// інструкція1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову 
// назву (наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). 
// Передбачити обробку помилкового введення номера дня тижня (в гілка default, 
//     з повідомленням "дня з таким номером не існує").

const weekDay = prompt('Please enter a name of day of the week');
switch(weekDay.toLocaleLowerCase()) {
    case 'monday': alert('today is Monday')
    break;
    case 'tuesday': alert('today is Tuesday')
    break;
    case 'wednesday': alert('today is Wednesday')
    break;
    case 'thursday': alert('today is Thursday')
    break;
    case 'friday': alert('today is Friday')
    break;
    case 'saturday': alert('today is Saturday')
    break;
    case 'sunday': alertg('today is Sunday')
    break;
    default: alert('There is no day exist. Please enter correct value!'); 

}

// 2. У змінній day лежить якесь число з інтервалу від 1 до 31. 
// Визначте, до якої декади місяця потрапляє це число (до першої, другої чи третьої). 
// Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.

const day = Math.floor(Math.random() * 32);
switch(true) {
    case (day < 20): alert(day + ' this is 1 decade')
    break;
    case (day >= 20 && day < 25): alert(day + ' this is 2 decade')
    break;
    case (day >= 25): alert(day + ' this is 3 decade')
    break;
    default: alert('none')
}

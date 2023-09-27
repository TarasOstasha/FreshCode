// 1. Напишіть функцію printNumbers(from, to, interval), яка послідовно виводить у консоль цілі числа, починаючи з from і закінчуючи to, з інтервалом між виведенням сусідніх чисел у interval мс.
// Реалізуйте перший або обидва варіанти рішення:
function printNumbers(from,to, interval) {
    // - Використовуючи setInterval.
    const counter = setInterval(() => {
        console.log(from);
        from++;
        if(from > to) {
            console.log('the end');
            clearInterval(counter);
        }
    }, interval)
   // - *Використовуючи рекурсивний setTimeout
   let counter1 = setTimeout(function increasedCounter() {
    console.log(from);
    from++;
    counter1 = setTimeout(increasedCounter, interval);
    if(from > to) {
        console.log('the end');
        clearTimeout(counter1);
    }
   });
}
//printNumbers(1,10,1000)

// 2. *Виводити посилання через певний час після завантаження сторінки. Поки повідомлення не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".
function delayAlert() {
    let waitingTime = 7;
    console.log(`Your Approximate Waiting Time is ${waitingTime} seconds. Please wait! Page Loading ...`);
    const delay = setInterval(() => {
        waitingTime -= 1;
        console.log(waitingTime + ' sec');
        if(waitingTime === 0) {
            console.log('Your Successfully entered! Welcome!');
            clearInterval(delay);
        }
    },1000) 
}
delayAlert();
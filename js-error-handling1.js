
// Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються, і генерацію помилок відповідних типів.
// Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

// Для спрощення замість рекурсивного алгоритму можна реалізувати повернення значення base**exponent, основу вважайте цілим числом, показник -- додатнім, реалізувати тільки те, що стосується роботи з помилками.


// Підскажіть чи правильна думка. Оскільки це в нас піднесення до степення, то логічно що це буде працювати тільки з числами, тому я вирішив вмкористати вбудовану функцію Number.isInteger()

function pow(base, exponent) {
    if(!Number.isInteger(base) || !Number.isInteger(exponent)) {   
        throw new TypeError('Function parameter is not valid. Please use an integer value!');
    } 

    if(exponent === 0) {
        return 1
    }

    let finalRes = base;
    finalRes *= pow(base, exponent - 1);
    return finalRes;

}

try {
    console.log(pow(4,'2'));
} catch (error) {
    console.log(error);
}


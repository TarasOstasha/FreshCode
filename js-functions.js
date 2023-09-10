// 0) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (від 16 до 65).
// Функція приймає в якості параметра вік людини і повертає значення булевського типу.
/**
 * 
 * @param {number} age 
 */
function isWorkingAgePerson(age) {
    return age >= 16 && age <= 65 ? true : false;
  }
  //console.log(isWorkingAgePerson(66));
  
  //1) *Реалізувати функцію, яка приймає число і повертає булевське значення,
  // чи воно просте (просте число ділитися без залишку тільки на себе і на одиницю).
  /**
   * 
   * @param {number} num 
   */
  function isPrimeNumber(num) {
    if(num <= 1) return false;
    for(let i = 2; i < num; i++) {
        if(num%i === 0) {
            return false
        }
    }
    return true;
  }
  //console.log(isPrimeNumber(11));
  
  //2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, 
  // чи ділиться перше на друге націло (без залишку):
  const checkMultiplicity = function(a, b) {
      return a%b === 0 ? true : false;
  }
  //console.log(checkMultiplicity(20, 5));
  
  //3) Перевірка можливості існування трикутника. 
  //Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, 
  //якщо треугольник можливий, і false, якщо ні (див. умови існування трикутника).
  function isTriangle(a,b,c) {
  // a + b> c, a + c> b, b + c> a
      // check condition
      if (a + b <= c || a + c <= b || b + c <= a) {
          return false;
      } else {
          return true;
      }
  }
  //console.log(isTriangle(1,10,12));
  
  // 4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника, 
  // прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури. 
  // Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.
  const areaOfSquare = (a,b) => Math.round(a*b); // на скільки актульно таке от скорочення? не про стрілочну функцію а про запис return без дужок
  //console.log(areaOfSquare(2,3)); 
  const areaOfTriangle = function(a,b,c) {
      // the semi-perimeter
      const s = (a+b+c)/2;
      // triangle are = √ s * (s – a) * (s – b) * (s – c), де a, b, c – sides, s – semi-perimeter
      const area = Math.round(Math.sqrt(s * ((s-a) * (s-b) * (s-c))));
      return area
  }
  //console.log(areaOfTriangle(3,4,5));
  /**
   * 
   * @param {number} l 
   * @param {number} w 
   * @param {number} h 
   * @returns {number}
   */
  const areaOfParallelepiped = function(l,w,h) {
      // S=2(ab+bc+ac)
      return 2*(l * w + w * h + l * h);
  }
  //console.log(areaOfParallelepiped(4,3,2));
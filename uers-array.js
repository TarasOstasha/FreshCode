//* прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.
function User(name, surname, age, isMale, email, isSubscribed) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
  }
  
  const userProto = {};
  userProto.getFullName = function() {
      return this.firstName + ' ' + this.lastName;
  }
  User.prototype = userProto;
  const user1 = new User('jack', 'wilsher', 23, 'male', 'test@SpeechGrammarList.com', true)
  //console.log(user1.getFullName());
  
  const users = [];
  
  for (let i = 0; i < 100; i++) {
    const user = new User(
      `Username${i}`,
      `Usersurname${i}`,
      Math.floor(Math.random() * 90),
      Math.random() > 0.5,
      `useremail${i}@gmail.com`,
      Math.random() > 0.5
    );
    users.push(user);
  }
  //console.log(users);
  
  // Отримати масив користувачів, які не підписані (not subscribed)
  const notSubscribed = users.filter(item => !item.isSubscribed);
  
  // Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
  const schoolAge = users.filter(item => !item.isMale && item.age >= 6 && item.age <= 18);
  
  // Видалити з масиву користувача з email useremail5@gmail.com
  //users.splice(users.findIndex(item => item.email === 'useremail5@gmail.com'), 1)
  
  // Перевірити, чи є серед користувачів користувач з email`ом useremail99@gmail.com
  const isEmailExist = users.some(item => item.email === 'useremail99@gmail.com');
  
  // Перевірити, чи всі користувачі підписані (subscribed).
  const isSubscribed = users.every(item => item.isSubscribed)
  
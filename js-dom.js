// 1) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити текст цієї кнопки (див. textContent).
let btn = document.createElement('button');
btn.innerHTML = 'Click';
const div = document.createElement('div');
const img = document.createElement('img')//.src = 'https://www.w3schools.com/images/picture.jpg';
img.src = 'https://www.w3schools.com/images/picture.jpg';
img.width = '200';
img.height = '250';
div.appendChild(img);
const body = document.getElementsByTagName("body")[0];
body.appendChild(div);
body.appendChild(btn);

btn.addEventListener('click', function() {
    btn.textContent = btn.textContent === "Click" ? "Clicked" : "Click";
});

// 2) HTML: є кнопка.
//     JS: При натисканні на кнопку змінити її колір.
btn.addEventListener('click', function() {
    btn.style.backgroundColor = 'red';
});

// 3) HTML: є зображення.
//     JS: Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.
// 4) Додати слайду опис (description).
img.addEventListener("mouseover", func, false);
img.addEventListener("mouseout", func1, false);

function func() {  
   img.src = 'https://www.jquery-az.com/html/images/banana.jpg';
   img.alt = 'image 1';
}

function func1() {  
    img.src = 'https://www.w3schools.com/images/picture.jpg';
    img.alt = 'image 2';
}


// *Advanced:
// Доробити анімацію появи наступного кадру в слайдері або додати з боків від основної картинки попередню та наступну за схемою.
// Приклад розташування 3-х картинок у слайдері у прикріпленому файлі.
// custom slider 

// *** якось так реалізував щоб пошвидше догнати упущене, знаю що дані будуть приходити з сервера і толі краще тут створити захардкоджений масив але суть та сама впринципі

const slides = document.querySelectorAll(".slider > .slider__item");
const currentSlide = 0;
const slideInterval = setInterval(nextSlide, 50000);

function nextSlide() {
  goToSlide(currentSlide+1);
}
function prevSlide(){
  goToSlide(currentSlide-1);
}
function goToSlide(n){
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slider__item slider__item--current';
}
const prev = document.querySelector('.controls__btn--prev'),
      next = document.querySelector('.controls__btn--next');

next.onclick = function(){
  nextSlide();
}
prev.onclick = function(){
  prevSlide();
}




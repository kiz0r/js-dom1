const [changeContentBtn, changeColorBtn] =
  document.querySelectorAll('button.btn');
const colors = ['yellow', 'green', 'orange', 'purple', 'red', 'pink'];
window.onload = firstImage;

// 1) Після натискання кнопки змінити текст самої кнопки (див. textContent).
changeContentBtn.addEventListener('click', () => {
  changeContentBtn.textContent = 'Happy New 2023 Year!';
  changeContentBtn.style.background = 'purple';
  changeContentBtn.style.color = 'white';
});

// 2) При натисканні на кнопку змінюйте її колір.
let currentIndex = 0;

changeColorBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % colors.length;
  changeColorBtn.style.background = colors[currentIndex];
});

// 3) Відобразити картинку. Зробити так, щоб при появі сторінки відображалася одна картинка, а при наведенні миші на неї відображалася інша.
const bgImage = document.querySelector('.imageField');

bgImage.onmouseover = secondImage;
bgImage.onmouseleave = firstImage;

function firstImage() {
  bgImage.style.backgroundImage =
    'url(https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg)';
}

function secondImage() {
  bgImage.style.backgroundImage =
    'url(https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_960_720.jpg)';
}

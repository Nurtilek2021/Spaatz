let popupBg = document.querySelector('.popup__bg'); // фон попап окна
let popup = document.querySelector('.popup'); // само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // кнопка для поаза окна
let closePopupButton = document.querySelector('.close-popup'); // кнопка ждя скрытия окна

openPopupButtons.forEach((button) => { //перебираем все кнопки
    button.addEventListener('click', (e) => { // для каждой кнопки вешаем событий на клик
        e.preventDefault(); //предотвращаем дефолтное повеение браузера
        popupBg.classList.add('active');//добавляем класс 'active' для фона
        popup.classList.remove('active');//  и для самого окна
    })

});

closePopupButton.addEventListener( 'click', () => {
    popupBg.classList.remove('active'); // убираем активный класс с фона
    popup.classList.remove('active'); //  и с окна
});

document.addEventListener('click',(e) => { //вешаеь обработчик на весь документ
    if(e.target === popupBg){ // если цель клика - фот, то:
        popupBg.classList.remove('active'); // убираем активный класс с фона
        popup.classList.remove('active'); //  и с окна
    }

});
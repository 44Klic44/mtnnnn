const navBtn = document.querySelector('.nav-button');/*нашли элемент*/
const mobileNav = document.querySelector('.mobile-nav');
navBtn.addEventListener('click', function() /*отслеиваем событие клик и второй аргумент функция*/
{
mobileNav.classList.toggle('mobile-nav-active'); /*classlist для работы с классами удалить добавить toggle метод*/
navBtn.classList.toggle('nav-button-close');
})
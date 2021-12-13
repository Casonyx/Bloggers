window.onload = function () {
  const menu = document.querySelector('.header__burger-menu');
  const dropDown = document.querySelector('.header__navbar_hidden')

  menu.addEventListener('click', function() {
    console.log('clicked')
    dropDown.classList.toggle('active-flex')
  });
}
const elMenu= document.querySelector('.menu');
const showNavbar= document.querySelector('.wrapper-show');


elMenu.addEventListener('click', function(){
    showNavbar.classList.toggle('active');
})
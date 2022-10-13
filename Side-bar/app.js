const close= document.querySelector('.close');
const elMenu= document.querySelector('.menu');
const showNav= document.querySelector('.nav');


elMenu.addEventListener('click', function(){
    showNav.classList.toggle('active');
})
close.addEventListener('click', function(){
    showNav.classList.toggle('active');
})
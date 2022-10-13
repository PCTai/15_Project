


const btnOpen= document.querySelector(".modal-button");
const layer= document.querySelector('.modal-layer');
const wrapper= document.querySelector('.wrapper');
const content= document.querySelector('.modal-content');
const btnClose= document.querySelector('.close');


btnOpen.addEventListener('click', function(){
    layer.style= 'display: block';
});
btnClose.addEventListener('click', function(){
    layer.style= 'display: none';
});
wrapper.addEventListener('click', function(){
    layer.style= 'display: none';
});
content.onclick= function(e){
    e.stopPropagation();
}
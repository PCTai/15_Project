const loader= document.querySelector('.loader');
const btnPlay= document.querySelector('#play');
const btnPause= document.querySelector('#pause');
const btnSwitch= document.querySelector('.switch-btn');
const video= document.querySelector('video');

window.addEventListener('load', function(){
    loader.classList.add('show-loader');
})

btnPlay.onclick= function(){
    console.log('123')
    btnSwitch.classList.remove('slide');
    video.play();
}
btnPause.onclick= function(){
    btnSwitch.classList.add('slide');
    video.pause();
    console.log('123')
}

const nextBtn= document.querySelector('.next-btn');
const prevBtn= document.querySelector('.prev-btn');
const items= document.querySelectorAll('.item');

nextBtn.addEventListener('click', function(){
    console.log('next')
    document.querySelector('.slider').appendChild(document.querySelectorAll('.item')[0]);
   
    
})
prevBtn.addEventListener('click', function(){
    console.log('prev')

    document.querySelector('.slider').prepend(document.querySelectorAll('.item')[items.length-1]);
})
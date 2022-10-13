
const slide= document.querySelector('.slides');
const slides= document.querySelectorAll('.slide');
const btnPrev= document.querySelector('.prevBtn');
const btnNext= document.querySelector('.nextBtn');
let index= 0;
btnPrev.style= "display: none";


const handleSlide = function(dir){
    if(dir=='prev'){
        index--;

        if(index <0){
            index=0;
        }
        if(index ==0){
            btnPrev.style= "display: none";
        }
        else{
            btnPrev.style= "display: block";

        }
        if(index==slides.length-1){
            btnNext.style= "display: none";
        }else{
            btnNext.style= "display: block";
        }
        slide.style= `transform: translate(-${index*100}%);`
    }else{
        index++;
        if(index >slides.length-1){
            index=slides.length-1;
            
        }
        if(index ==0){
            btnPrev.style= "display: none";
        }
        else{
            btnPrev.style= "display: block";

        }
        if(index==slides.length-1){
            btnNext.style= "display: none";
        }else{
            btnNext.style= "display: block";
        }
        slide.style= `transform: translate(-${index*100}%);`
    }
}

btnNext.addEventListener('click', function(){
    handleSlide('next');
})
btnPrev.addEventListener('click', function(){
    handleSlide('prev');
    
})
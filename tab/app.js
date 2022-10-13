
const btns= document.querySelectorAll('.btn');
const content= document.querySelectorAll('.content');

function removeActive(index){
    for(let i=0; i<btns.length; i++){
        if(index!=i){
            btns[i].classList.remove('active');
            content[i].classList.remove('active');
        }
    }
}

for(let i =0; i< btns.length;i++){
    btns[i].addEventListener('click', function(){
        removeActive(i);
        btns[i].classList.add('active');
        content[i].classList.add('active');
    })
}
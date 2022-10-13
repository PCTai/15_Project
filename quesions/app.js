

const listItem = document.querySelectorAll('.item');
const listBtn = document.querySelectorAll('.btn');

function removeActive(index){
    for(let i=0;i<listItem.length;i++){
        if (i!=index) {
            
            listItem[i].classList.remove('active')
        }
    }
}
for(let i=0; i<listBtn.length; i++){
    listBtn[i].addEventListener('click', function(){
        removeActive(i);
        listItem[i].classList.toggle('active');
    })
}

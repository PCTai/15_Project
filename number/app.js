
const listNumber= document.querySelectorAll('.item');
console.log(listNumber);



function updateCount(element){
    const elValue= element.querySelector('span');
    console.log(elValue.dataset.number);
    const value= parseInt(elValue.dataset.number);
    const initCount= Math.ceil(value/1000);
    let counter=0;
    const countInterval = setInterval(()=>{
        counter= counter + initCount;
        if(counter>= value){
            elValue.textContent= value +"+";
            clearInterval(countInterval);
            return;
        }
        else{
            elValue.textContent= counter+"+";
        }
    },1)
}

listNumber.forEach(number =>{
    if(number){
        // console.log(number)
        updateCount(number)
    }
})


const btnDecrease= document.getElementById("decrease");
const btnReser= document.getElementById("reset");
const btnIncrease= document.getElementById("increase");
const counter= document.querySelector(".count");
let count=0;

const renderCount= ()=>{
    counter.innerHTML= count;
}
const handleCounter =(type)=>{
    
    if(type=="increase"){
        count +=1;
    }
    else if(type=="decrease"){
        count--;
        
    }
    else count=0;
   
    
    
    if(count<0){
        counter.style= "color: red;";
    }else if(count>0) counter.style= "color: green;";
    else counter.style= "color: black;";
    renderCount();
}

btnDecrease.addEventListener('click',function(){
    handleCounter('decrease')
});
btnIncrease.addEventListener('click',function(){
    handleCounter('increase')
});
btnReser.addEventListener('click',function(){
    handleCounter('reset')
});
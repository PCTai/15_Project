


class Counter{
    
    constructor(element, value){
        
        this.value= value;
        this.counter= element;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueShow = element.querySelector('.value');
    
        this.valueShow.textContent = this.value;
        const increase = this.increase.bind(this);
        const decrease = this.decrease.bind(this);
        const reset = this.reset.bind(this);

        this.decreaseBtn.addEventListener('click', decrease);
        this.resetBtn.addEventListener('click', reset);
        this.increaseBtn.addEventListener('click', increase);
    }
    increase(){
        this.value++;
        this.valueShow.textContent= this.value;
    }
    decrease(){
        this.value--;
        this.valueShow.textContent= this.value;
    }
    reset(){
        this.value =0;
        this.valueShow.textContent= this.value;
    }
}

const counter1= new Counter(document.querySelector('.counter-1'), 100);
const counter2= new Counter(document.querySelector('.counter-2'), 200);

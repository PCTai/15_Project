const colorsSimple = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorsHex= [  "#a15025", "#e10025","#b150a5","#11a5b5"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");
const btnHex = document.querySelector("#hex");
const btnSimple = document.querySelector("#simple");
let colors= colorsSimple;

document.body.style.backgroundColor = colors[0];
color.textContent = colors[0];

btnHex.addEventListener('click',function(){
    colors=colorsHex;
})
btnSimple.addEventListener('click',function(){
    colors=colorsSimple;
})

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  btn.style.backgroundColor= colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

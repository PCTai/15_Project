
const elNav= document.querySelector('#nav');
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    console.log(elNav.offsetHeight, scrollHeight)
    if(scrollHeight >elNav.offsetHeight){
        elNav.classList.add('nav-fixed');
    }
    else{
        elNav.classList.remove('nav-fixed');
    }
})

const scrollLinks = document.querySelectorAll(".links a");
const newArr=Array.from(scrollLinks);
newArr.push((document.querySelector('.container .btn')))
newArr.forEach((link) => {
  console.log(link.innerHTML);

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = elNav.offsetHeight;
    let position = element.offsetTop - navHeight;


    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const menu= document.querySelector(".menu");
menu.addEventListener('click', function(){
    elNav.classList.toggle('active');
})
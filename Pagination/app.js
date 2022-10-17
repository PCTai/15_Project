  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
  const elProducts= document.querySelector('.list-product');
  const btnContainer= document.querySelector('.btn-container');
  const loading= document.querySelector('.loading');
  const btns= document.querySelectorAll('.page-btn');
  const btnPrev= document.querySelector('.prev-btn');
  const btnNext= document.querySelector('.next-btn');

  let index=0;
  let limit= 0;


  const fecthData = async function(){
    loading.innerHTML= '<div class="circle"></div>';
    try {
      const data= await fetch(url).then(res => res.json());
      loading.innerHTML='';
      limit= data.length/10;
      return data;

    } catch (error) {
      
    }
  }
function renderProducts(list){
  const productList = list
  .map((product) => {
    const { id } = product;
    const { login: title } = product;
    const { avatar_url: img } = product;
    // id,name,price,img
    return `
    <div class="item" href="">
      <div class="image">
        <img src="${img}" class="single-product-img img" alt="${title}" />
      </div>
     
      <h5 class="name">${title}</h5>
      <a href="${product.html_url}" class="btn">View profile</a>
    </div>`;
  }).join('');
  elProducts.innerHTML =productList;
      
}
function updateBtnPage(){
  btns.forEach((e,i) => {
    e.classList.remove('active-btn');
    if(i==index){
      e.classList.add('active-btn');
    }
  });
}
  const form= document.querySelector('.input-form')
  const  start = async()=>{
    const data= await fecthData();
    renderProducts(data.slice(0,10));
    btnNext.addEventListener('click', function(){
      index++;
      if(index>=10){
        index=0;
      }
      renderProducts(data.slice(index*limit,limit*index +limit));
      updateBtnPage();
    });

    btnPrev.addEventListener('click', function(){
      index--;
      if(index<0){
        index=limit-1;
      }
      renderProducts(data.slice(index*limit,limit*index +limit));
      updateBtnPage();

    });

    btns.forEach((btn, i)=>{
      btn.addEventListener('click', function(){
        index= btn.dataset.index;
        renderProducts(data.slice(index*limit,limit*index +limit));
        updateBtnPage();
      })
    })
  }

  start();

  
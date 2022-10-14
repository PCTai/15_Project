  const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';
  const elProducts= document.querySelector('.list-product');
  const loading= document.querySelector('.loading');

  const fecthData = async function(){
    loading.innerHTML= '<div class="circle"></div>';
    try {
      const data= await fetch(url).then(res => res.json());
      loading.innerHTML='';
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
  const form= document.querySelector('.input-form')
  const  start = async()=>{
    const data= await fecthData();
    renderProducts(data.slice(0,10));
    console.log(data)
  }

  start();
  

  
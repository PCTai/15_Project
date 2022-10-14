  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
  const elProducts= document.querySelector('.list-product');
  const loading= document.querySelector('.loading');
  const title= document.querySelector('.title');

  const fecthData = async function(){
    loading.innerHTML= '<img src="https://vannilla-js-basic-project-24-cocktails.netlify.app/loading.gif" alt="">';
    try {
      const data= await fetch(url).then(res => res.json());
      loading.innerHTML='';
      return data.drinks;

    } catch (error) {
      
    }
  }
function renderProducts(list= null){
  if(!list){
    title.textContent = "sorry,no drinks matched your search";
    return;
  }
  const productList = list
  .map((product) => {
    const { idDrink:id } = product;
    const { strDrink: title} = product;
    const { strDrinkThumb: img } = product;
    // id,name,price,img
    return `
    <a class="item" data-id="${id}" href="drink.html">
      <div class="image">
        <img src="${img}" class="single-product-img img" alt="${title} " />
      </div>
      <h5 class="name">${title}</h5>
          
    </a>`;
  }).join('');
  elProducts.innerHTML =productList;
  elProducts.addEventListener('click', function(e){
    const id = e.target.parentElement.parentElement.dataset.id;
    console.log(id);
    localStorage.setItem("drink", id);
  })    
}
  

  let drinks;
  const get =async()=>{
    const data= await fecthData();
    drinks=data;
    renderProducts(data)
    console.log(data[0]);
    return data;
  }
  get();

 
  
  const form= document.querySelector('.form');
  form.addEventListener('submit' ,async function(e){
    e.preventDefault()
    const input= form.querySelector('input');
    console.log(input);
    if(input){
      const data= await fecthData();
      renderProducts(data.filter((product) => {
        return product.strDrink.toLowerCase().includes(input.value.toLowerCase());
      }));
    }
  })
  

  
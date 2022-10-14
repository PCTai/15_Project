  const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
  const elProducts= document.querySelector('.list-product');
  const loading= document.querySelector('.loading');
  const title= document.querySelector('.title');

  const fecthData = async function(value){
    loading.innerHTML= '<img src="https://vannilla-js-basic-project-24-cocktails.netlify.app/loading.gif" alt="">';
    try {
      const data= await fetch(url+value).then(res => res.json());
      loading.innerHTML='';
      return data;

    } catch (error) {
      
    }
  }
function renderList(list= null){
  if(!list){
    title.textContent = "sorry,no drinks matched your search";
    return;
  }
  const productList = list
  .map((product) => {
    const { title } = product;
    const { snippet} = product;
    const { pageid } = product;
    // id,name,price,img
    return `
    <a class="item" href="http://en.wikipedia.org/?curid=${pageid}">
      
      <h5 class="name">${title}</h5>
      <span class= "snippet">${snippet}</span>
          
    </a>`;
  }).join('');
  elProducts.innerHTML =productList;
}
  
  

 
  
  const form= document.querySelector('.form');
  form.addEventListener('submit' ,async function(e){
    e.preventDefault()
    const input= form.querySelector('input');
    console.log(input);
    if(input){
      const data= await fecthData(input.value);
      renderList(data.query.search);
    }
  })
  

  
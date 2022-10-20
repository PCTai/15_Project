import './src/toggleSidebar.js';
import './src/toggleCart.js';
import { addToCart } from './src/cart/cartSetup.js';


const url = 'https://course-api.com/javascript-store-products';
const elProducts = document.querySelector('.list-product');
// const loading = document.querySelector('.loading');

const fecthData = async function () {
  // loading.innerHTML = '<div class="circle"></div>';
  try {
    const data = await fetch(url).then(res => res.json());
    // loading.innerHTML = '';
    return data;

  } catch (error) {

  }
}

function renderProducts(list) {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img
      return `
    <div class="preview-product">
      <div class="product-image">
        <img src="${img}"
            class="" alt="" />
        <div class="product-icons">
            <a href="product.html?id=${id}&name=john&age=25" class="product-icon">
                <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
            </button>
        </div>
      </div>
      <h5 class="name">${title}</h5>
      <span class="price">$${formatPrice}</span>
    </div>
    `;
    }).join('');
  elProducts.innerHTML = productList;

}
const start = async () => {
  const data = await fecthData();
  renderProducts(data);
}

start();
const form = document.querySelector('.input-form');
form.addEventListener('submit', async function (e) {
  e.preventDefault()
  const input = form.querySelector('input');
  console.log(input);
  if (input) {
    const products = await fecthData();
    console.log(products);
    renderProducts(products.filter((product) => {
      return product.fields.name.includes(input.value);
    }));
  }
})

const filters= document.querySelector('.filters');
filters.addEventListener('click',async (e) => {
  const el = e.target;
  if (el.classList.contains('company-btn')) {
    const products = await fecthData();
    if (el.dataset.id === 'all') {
      renderProducts(products);
    } else {
      renderProducts(products.filter((product) => {
        return product.fields.company === el.dataset.id;
      }));
    }

  }
});

elProducts.addEventListener('click', function (e) {
    
  if (e.target.parentElement.classList.contains('product-cart-btn')) {
    addToCart((e.target.parentElement.dataset.id));
  }
});



import './src/toggleSidebar.js';
import './src/toggleCart.js';
import './src/cart/cartSetup.js';
import { addToCart } from './src/cart/cartSetup.js';
import { setupStore, store } from './src/store.js';
// import display from './src/displayProducts.js';
import { getElement } from './src/until.js';
const url = 'https://course-api.com/javascript-store-products';
const elProducts = document.querySelector('.products-preview');
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
    renderProducts(data.slice(0,3));
  }
  start()

  const init = async () => {
    const products = await fecthData();
    if (products) {
      // add products to the store
      setupStore(products);
      const featured = store.filter((product) => product.featured === true);
    }
  };
  elProducts.addEventListener('click', function (e) {
    
    if (e.target.parentElement.classList.contains('product-cart-btn')) {
      addToCart((e.target.parentElement.dataset.id));
    }
  });
  
  window.addEventListener('DOMContentLoaded', init);
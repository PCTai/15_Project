
const elProduct = document.querySelector('.product-wrapper');
const loading = document.querySelector('.loading');

const fecthData = async function () {
    loading.innerHTML = '<img src="https://vannilla-js-basic-project-24-cocktails.netlify.app/loading.gif" alt="">';
    try {
        const id = localStorage.getItem("drink");
        console.log(id);
        // if (!id) {
        //     window.location.replace("index.html");
        // } else {
        //     const drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json());
        //     console.log(drink);
        // }
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res => res.json());
        loading.innerHTML = '';
        console.log(data.drinks[0])
        return data.drinks[0];

    } catch (error) {

    }
}
function renderProduct(drink) {
    console.log(drink);
    const { strDrink: title } = drink;
    const { strDrinkThumb: img, strInstructions: desc } = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];
    const imgEl = document.querySelector(".img img");
    const drinkName = document.querySelector(".title");
    const description = document.querySelector(".desc");
    const ingredients = document.querySelector(".drink-ingredients");
    imgEl.src = img;
    document.title = title;
    drinkName.textContent = title;
    description.textContent = desc;
    ingredients.innerHTML = list
        .map((item) => {
            if (!item) return;
            return `<li><i class="far fa-check-square"></i>${item}</li>`;
        })
        .join("");

}
const form = document.querySelector('.input-form')
const start = async () => {
    const data = await fecthData();
    renderProduct(data);
}

start();
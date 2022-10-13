const btnRandom = document.querySelector('.btn');
const result = document.querySelector('.result');

const url = 'https://icanhazdadjoke.com/';

btnRandom.addEventListener('click', async function(){
    const data = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'learning app',
        },
      }).then((res) => res.json());
    console.log(data);
    result.textContent= data.joke;
})
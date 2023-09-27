const memeEl = document.querySelector(".memes-container");
const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  callAPI();
});

async function callAPI() {
    
    try {
        const url = 'https://api.chucknorris.io/jokes/random';
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        memeEl.textContent = result.value;
    } catch (error) {
        console.error(error);
    }
}

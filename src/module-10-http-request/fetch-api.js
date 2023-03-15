const refs = {
    cardContainer: document.querySelector(".card-container"),
    searchForm: document.querySelector('.js-search-form'),

};

refs.searchForm.addEventListener('submit', ((e) => {
    e.preventDefault();
    console.log('sdfvfvbb')
    })
);

// function onSearch(e) {
//     e.preventDefault();
//     console.log('submit event')

// }

fetchPokemon(5)
.then(pokemon => renderPokemonCard(pokemon))
.catch(error => console.log(error))


function fetchPokemon(pokemonId) {
// возвращает промис
return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
.then(response => {
// распарсивает данные которые приходят с бэкэнда
    return response.json()
})
};

function renderPokemonCard(pokemon) {
    console.log('pokemon',pokemon);

    const markup = `
    <div class="card">
    <div class="image-card-top">
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" width=200 height=200>
    </div>
    <div class="card-body">
        <h2 class="card-title">Имя:${pokemon.name}</h2>
        <p class="card-text">Вес:${pokemon.weight}</p>
        <p class="card-text">Рост:${pokemon.height}</p>
    </div>
</div>`
    refs.cardContainer.innerHTML = markup;
  
}
// import fetchPokemon from '../module-10-http-request/api.service' 

// import API from "./api.service";

const BASE_URL = 'https://pokeapi.co/api/v2';


const refs = {
    cardContainer: document.querySelector(".card-container"),
    searchForm: document.querySelector('.js-search-form'),
    input: document.querySelector('.form-control'),

};

refs.searchForm.addEventListener("submit", onSearch);
refs.input.addEventListener("input", onInput);

function onInput(e) {
    pokemonId = e.currentTarget.value;
    console.log('pokemonId', pokemonId)
}

function onSearch(e) {
    e.preventDefault();

    // const form = e.currentTarget;
    // const searchQuery = form.elements.query.value;
    // console.log('searchQuery', searchQuery);
    
    //fetchPokemon(searchQuery)
    fetchPokemon(pokemonId)
    .then(pokemon => {
        console.log('this is THEN'),
        renderPokemonCard(pokemon)
    })
    .catch(error => {
        console.log('this is CATCH!!!')
        onFetchError(error)
    })
    .finally(()=> {
        refs.searchForm.reset()
    })
}

function fetchPokemon(pokemonId) {
    // возвращает промис
    return fetch(`${BASE_URL}/pokemon/${pokemonId}`)
    .then(response => {
    // распарсивает данные которые приходят с бэкэнда
        console.log('response', response)
        return response.json()
    })
};

function onFetchError(error) {
    alert('Oops smth went wrong and we couldn`t have found your pokemon');
}

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


fetch('https://pixabay.com/api/?key=29210870-5c756012ce316252fd55732c8&q=nature&image_type=photo&orientation=horizontal')
.then(r => r.json())
.then(console.log)
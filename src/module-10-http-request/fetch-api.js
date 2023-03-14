// import pokemonCard from './module-10-http-request/pokemon-card.hbs';

const r = fetch("https://pokeapi.co/api/v2/pokemon/4/");
console.log(r);
r.then(response => {
    console.log(response.json);
    return response.json()
})
.then(pokemon => {
    console.log('pokemon',pokemon)
    const markup = pokemonCard(pokemon);
    console.log(markup);
})
.catch(error => {
    console.log(error)
})
// import pokemonCard from 'pokemon-card.hbs';

import {markup} from "../module-10-http-request/pokemon-card.js";

const r = fetch("https://pokeapi.co/api/v2/pokemon/4/");
console.log(r);
r.then(response => {
    console.log(response.json);
    return response.json()
})
.then(pokemon => {
    console.log('pokemon',pokemon)
    const createMarkup = markup(pokemon);
    console.log(createMarkup);
})
.catch(error => {
    console.log(error)
})
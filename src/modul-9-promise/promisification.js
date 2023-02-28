// const makeOrder = (dish)=> {
//     const DELAY = 1000;

//     return new Promise((resolve, reject)=> {
//     const passed = Math.random() > 0.5;
//     console.log('passed -->', passed);

//     setTimeout(()=> {
//         if(passed) {
//             resolve('Your order have cooked');
//         } else {
//             reject("Sorry! We cannot cook your order")
//         }
        
//     }, DELAY)
//     })
  
// };

// makeOrder("KEBAB") 
// .then((result)=> {
//     console.log(result)
// })
// .catch((error)=> {
//     console.log(error)
// })
// .finally(()=> {
//     console.log('This log will appear anytimes')
// })


// Pokemons from https://pokeapi.co/

function fetchPokemonById(id) {
  return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(r => r.json())
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2);
// fetchPokemonById(3);

function onFetchSuccess(pokemon) {
    console.log('OnFetchSuccess --->')
    console.log('pokemon',pokemon);
};

function onFetchError(error) {
    console.log('onFetchError --->');
    console.log('error',error);
}
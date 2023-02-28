
// 1-й Пример
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

//2-й Пример
// Pokemons from https://pokeapi.co/

// function fetchPokemonById(id) {
//   return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
// .then(r => r.json())
// };

// function onFetchSuccess(pokemon) {
//     console.log('OnFetchSuccess --->')
//     console.log('pokemon',pokemon);
// };

// function onFetchError(error) {
//     console.log('onFetchError --->');
//     console.log('error',error);
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// 3-й Пример

const makePromise = () => {
    return new Promise((resolve,reject)=> {
        const passed = Math.random() > 0.5;
        setTimeout(() => {
            if(passed) {
                resolve("Это метод промиса--resolve");
            }
            reject("Это метод промиса--reject")    
        }, 2000);
        
    })
};

makePromise()
.then(result => console.log('result',result))
.catch(error => console.log('error',error))
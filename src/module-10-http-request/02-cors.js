fetch("https://pokeapi.co/api/v2/pokemon/3")
.then(r => r.json())
.then(console.log)
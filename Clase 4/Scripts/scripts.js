let pokeData = ['Perdi69420']
fetch ('https://pokeapi.co/api/v2/pokemon/1').then(data => data.json()).then(pokemon => {console.log(pokemon)})
export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchPokemon = (pokeId) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokeId}`
  })
}

// $.ajax({method: "GET", url: `/api/pokemon/4`}).then( (val) => console.log(val.items) )
//
// {10: {…}, 11: {…}, 12: {…}}
// 10: {id: 10, pokemonId: 4, name: 'Durable Wool Keyboard', price: 63, happiness: 77, …}
// 11: {id: 11, pokemonId: 4, name: 'Practical Wooden Bottle', price: 6, happiness: 31, …}
// 12: {id: 12, pokemonId: 4, name: 'Enormous Plastic Pants', price: 49, happiness: 22, …}
// [[Prototype]]: Object
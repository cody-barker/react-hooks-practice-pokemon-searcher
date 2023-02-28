import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")
  
  let searchList = pokemonList.filter(pokemon => {
    if (search === "") {
      return pokemon
    } else if (pokemon.name.toLowerCase().includes(search)) {
      return pokemon
    } return console.log('sprite image does not exist')
  })

  function postPokemon(newPokemon) {
    const newList = [...pokemonList, newPokemon]
    setPokemonList(newList)
  }

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(list => setPokemonList(list))
  }, [])

  return (
    <div className="App">
      <PokemonPage postPokemon={postPokemon} search={search} setSearch={setSearch} pokemonList={pokemonList} searchList={searchList}/>
    </div>
  );
}

export default App;



/**
 * App
*    PokemonPage
*      PokemonForm
*      Search
*      Pokemon Collection
*        PokemonCard
 *          
 */
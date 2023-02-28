import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({searchList}) {

  const pokemonComps = searchList.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonComps}
    </Card.Group>
  );
}

export default PokemonCollection;

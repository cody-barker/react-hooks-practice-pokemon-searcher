import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  function handleSprite(e) {
    e.target.src === pokemon.sprites.front ? e.target.src = pokemon.sprites.back : e.target.src = pokemon.sprites.front
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleSprite} src={pokemon.sprites.front} alt={pokemon.name}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;


//when clicking on the image, switch it from sprites.front to sprites.back
//change source from pokemon.sprites.front to pokemon.sprites.back


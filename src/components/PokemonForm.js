import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({postPokemon}) {

  const [pokeName, setPokeName] = useState("")
  const [pokeHP, setPokeHP] = useState("")
  const [pokeSpriteFront, setPokeSpriteFront] = useState("")
  const [pokeSpriteBack, setPokeSpriteBack] = useState("")

  function handleNameChange(e) {
    setPokeName(e.target.value)
  }

  function handleHPChange(e) {
    setPokeHP(e.target.value)
  }

  function setPokeSpriteFrontChange(e) {
    setPokeSpriteFront(e.target.value)
  }

  function setPokeSpriteBackChange(e) {
    setPokeSpriteBack(e.target.value)
  }

  function handleSubmit (e) {
    let newPokeObj = {
      name: pokeName,
      hp: pokeHP,
      sprites: {
        front: pokeSpriteFront,
        back: pokeSpriteBack
      }
    }
    e.target.reset()
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokeObj)
    })
    .then(r => r.json())
    .then(pokemon => {
      postPokemon(pokemon)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNameChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHPChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={setPokeSpriteFrontChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={setPokeSpriteBackChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

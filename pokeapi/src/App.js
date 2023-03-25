import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);

        setPokemon({
          name: pokemonName,
          species: response.data.species,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[6].base_stat,
          weight: response.data.weight,
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type={Text}
          placeholder="Enter the Pokemon's name here"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        ></input>
        <button className="Searchbtn" onClick={searchPokemon}>
          Search for Pokémon
        </button>
      </div>
    </div>
  );
}

export default App;

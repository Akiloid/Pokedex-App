import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    weight: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        console.log(response);

        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          speed: response.data.stats[5].base_stat,
          weight: response.data.weight,
          type: response.data.types[0].type.name,
        });
      })
      .catch((err) => {
        console.log("error");
      });

    setPokemonChosen(true);
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1 className="Title">Pokédex</h1>
        <input
          className="inputfield"
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
      <div className="infoSection">
        {!pokemonChosen ? (
          <h1>Please Choose a Pokemon</h1>
        ) : (
          <>
            <h1 className="stat name">Name: {pokemon.name}</h1>
            <img src={pokemon.img}></img>
            <h1 className="stat species">Species: {pokemon.species}</h1>
            <h1 className="stat type">Type: {pokemon.type}</h1>
            <h1 className="stat hp">HP: {pokemon.hp}</h1>
            <h1 className="stat attack">Attack: {pokemon.attack}</h1>
            <h1 className="stat defense">Defense: {pokemon.defense}</h1>
            <h1 className="stat speed">Speed: {pokemon.speed}</h1>
            <h1 className="stat weight">Weight: {pokemon.weight}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

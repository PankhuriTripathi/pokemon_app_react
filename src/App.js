import React from "react";
import "./App.css";
import Axios from "axios";
import { useState } from "react"; 


function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
   const [pokemon, setPokemon]= useState({
    name: "",
    species: "",
    img: "",
    moves: "",
    hp: "",
    attack: "",
    defence: "",
    types: "",
   
   });
  const searchPokemon =()=>{
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      console.log(response);
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.other.dream_world.front_default,
        moves: response.data.moves[0].move.name,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defence: response.data.stats[2].base_stat,
        types: response.data.types[0].type.name,
      
      })
      setPokemonChosen(true);
    })
  }
    return (
       <div className="App">
       <div className="TitleSection">
       <h1>Pokemon Card</h1>
       <input type="text" onChange={(event) => {
         setPokemonName(event.target.value);
       }}
       />
       <button onClick={searchPokemon}>Search Pokemon</button>

       </div>
       <div className="DisplaySection">{!pokemonChosen ? (<h1> Enter Poke name' </h1>) : (
         <>
       <h1>{pokemon.name}</h1>
        <img src={pokemon.img} />
        <h3>Species: {pokemon.species}</h3>
        <h3>Type: {pokemon.types}</h3>
       
        <h4>Hp: {pokemon.hp}</h4>
         <h4>Attack: {pokemon.attack}</h4>
         <h4>Defence: {pokemon.defence}</h4>
         <h4>Moves: {pokemon.moves}</h4>
     
       </>
       )}
         
         </div>
       </div>
    );
}

export default App;
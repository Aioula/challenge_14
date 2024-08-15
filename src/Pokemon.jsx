import React from "react";
import pokemons from "./assets/data";

const Pokemons = () => {
  return (
    <main>
     <h1>Pokemon List</h1> 
      <ul className="pokemos">
        {pokemons.map((pokemon) => (
          <Pokemon pokemonobj={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </main>
  );
};

export default Pokemons;


function Pokemon({pokemonobj}){
  return(
    <li className="pokemon">
      <img src={pokemonobj.image}  />
      <h3>{pokemonobj.name}</h3>
      <h5>{pokemonobj.type}</h5>
    </li>
  )
}

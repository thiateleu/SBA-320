import React, { useEffect, useState } from 'react';
import PokemonList from "../components/PokemonList";

function Pokemon() {
const [pokemon, setPokemon] = useState([]);
useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species?limit=10")
    .then(Response => Response.json())
    .then(data => setPokemon(data.results));
}, []);

    return (
        <div>
    <h1>Pokemon List</h1>
    <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default Pokemon
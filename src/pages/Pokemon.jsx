import React, { useEffect, useState } from 'react';
import PokemonList from "../components/PokemonList";

const Pokemon = () => {
const [pokemon, setPokemon] = useState([]);

useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(Response => Response.json())
    .then(data => { 
        const fetches = data.results.map(poke =>
            fetch(poke.url).then(Response => Response.json())
        
        );
        Promise.all(fetches).then(detailedPokemon => setPokemon(detailedPokemon));
});
}, []);

    return (
        <div>
    <h1>Pokemon List</h1>
    <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default Pokemon
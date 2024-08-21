import React from 'react';
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon }) => (

    <ul>
        {pokemon.map((poke, index) => (
            <li key={poke.name}>
                <Link to={"/pokemon/${poke.name}"}>{poke.name}</Link>
                <img src={"https://pokeapi.co/api/v2/pokemon-species/aegislash/${index +1}.png"} alt={poke.name}/>
                <h3>{poke.name}</h3>
                            </li>
        ))}
    </ul> 
); 


export default PokemonList
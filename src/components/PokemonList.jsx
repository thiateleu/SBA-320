import React from 'react';
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon }) => (

    <ul>
        {pokemon.map((poke) => (
            <li key={poke.id}>
                <Link to={"/pokemon/${poke.name}"}>{poke.name}</Link>
                <img src={"https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg"} alt={poke.name}/>
               
                            </li>
        ))}
    </ul> 
); 


export default PokemonList
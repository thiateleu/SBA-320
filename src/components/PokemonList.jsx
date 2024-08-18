import React from 'react';
import { Link } from "react-router-dom";

const PokemonList = ({ pokemon }) => (

    <ul>
        {pokemon.map(poke => (
            <li key={poke.name}>
                <Link to={"/pokemon/${poke.name}"}>{poke.name}</Link>
            </li>
        ))}
    </ul> 
); 


export default PokemonList
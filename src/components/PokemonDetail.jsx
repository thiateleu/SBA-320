import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const PokemonDetail = () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/${name}")
        .then(Response => Response.json())
        .then(data => setPokemon(data))
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

        return (
            <div>
                <h1>{pokemon.name}</h1>
                <imag src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>type: {pokemon.types.map(type > type.type.name).join(",")}</p>

            </div>
        )
    
}

export default PokemonDetail
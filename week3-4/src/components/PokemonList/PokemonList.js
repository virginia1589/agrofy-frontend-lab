import React from 'react'
import PokemonCard from './../PokemonCard/PokemonCard';
import './PokemonList.css';

const PokemonList = props => {

    const { pokemons, handleFav } = props;

    return (
        <div className="poke-container">
            {
                pokemons.map((pokemon, index) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => handleFav(pokemon.id, index)} />
                ))
            }
        </div>
    );

}

export default PokemonList;

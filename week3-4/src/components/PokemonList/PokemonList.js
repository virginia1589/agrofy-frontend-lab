import React from 'react'
import PokemonCard from './../PokemonCard/PokemonCard';
import './PokemonList.css';
import { toggleFav } from '../../modules/favs';

const PokemonList = props => {

    const { pokemons, onClick } = props;

    const handleClick = (id, index) => {
        toggleFav(id);
        pokemons[index].isFav = !pokemons[index].isFav;
    }

    return (
        <div className="poke-container">
            {
                pokemons.map((pokemon, index) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} onClick={() => handleClick(pokemon.id, index)} />
                ))
            }
        </div>
    );

}

export default PokemonList;

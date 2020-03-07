import React from 'react';

import './PokemonCard.css';
import Button from '../Button/Button';

const PokemonCard = props => {

    const { pokemon, onClick } = props;


    return (
        <div className="card pokemon" id="card" data-id={pokemon.id}>
            
            <img className="card-image" src={pokemon.image}/>
            <h2 className="card-title">{pokemon.name}</h2>
            <p className="card-subtitle">Type: {pokemon.type}</p>
            <div className="card-actions">
                {
                    pokemon.isFav ?
                        <Button onClick={onClick}>Remove</Button>
                        :
                        <Button onClick={onClick}>Add to fav</Button>
                }
                
            </div>
            
        </div>
    )
};

export default PokemonCard;
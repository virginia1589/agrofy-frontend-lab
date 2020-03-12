import React, { useState, useEffect } from 'react';
import './Fav.css';
import { listFavs, findFav, toggleFav } from '../../modules/favs';
import { getFavorites } from '../../api/pokeapi';
import PokemonList from '../../components/PokemonList/PokemonList';

const Fav = () => {

    const [pokefavs, setPokefavs] = useState([]);

    useEffect(() => {
        const favs = listFavs();
        
        getFavorites(favs)
            .then(favorites => {

                favorites.forEach(pokemon => {
                    const isFav = findFav(pokemon.id);
                    pokemon.isFav = isFav;
                })

                setPokefavs(favorites);
            });

    }, []);

    const handleFav = (id, index) => {
        toggleFav(id);
  
        const favList = [...pokefavs]
  
        favList.splice(index, 1);
  
        setPokefavs(favList);
    }

    return (
        <div className="favs-page">
            <h1>My Favs</h1>

            { <PokemonList pokemons={pokefavs} handleFav={handleFav}  /> }
        </div>
    )
};


export default Fav;

import React, { useState, useEffect } from 'react';
import PokemonList from './../../components/PokemonList/PokemonList';
import { getAllPokemon } from './../../api/pokeapi';
import { findFav } from '../../modules/favs';


const Pokedex = () => {

  const [pokemons, setPokemons] = useState([]); // Array con los pokemon

  useEffect(() => {
      getAllPokemon()
          .then(response => {

            response.forEach((pokemon, index) => {
              const isFav = findFav(pokemon.id);
              pokemon.isFav = isFav;
            })


            setPokemons(response);

            console.log(response);
          })
  }, [])

  return (
    <div className="pokedex page">
      <h1>Pokedex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  )

};

export default Pokedex;

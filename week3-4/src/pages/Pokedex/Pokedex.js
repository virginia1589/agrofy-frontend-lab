import React, { useState, useEffect } from 'react';
import PokemonList from './../../components/PokemonList/PokemonList';
import { getAllPokemon } from './../../api/pokeapi';
import { findFav, toggleFav } from '../../modules/favs';
import Search from '../../components/Search/Search';
import './Pokedex.css'; 

const usePokedex = () => {


  const [pokemons, setPokemons] = useState([]); // Array con los pokemon

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState({
    error: false,
    message: null
  })

  useEffect(() => {
      setLoading(true);
      setError({
        error: false,
        message: null
      })
      getAllPokemon()
          .then(response => {
            response.forEach(pokemon => {
              const isFav = findFav(pokemon.id);
              pokemon.isFav = isFav;
            })

            setPokemons(response);
            setLoading(false);
            setError({
              error: false,
              message: null
            })
          })
          .catch(error => {
            setLoading(false);
            console.error(error);
            setError({
              error: true,
              message: error
            })
          })
  }, []);

  return [pokemons, loading, error, setPokemons]; 
}


const Pokedex = () => {

  const [pokemons, pokeLoading, error, setPokemons] = usePokedex();

  const handleFav = (id, index) => {
      toggleFav(id);

      const pokemonList = [...pokemons]

      pokemonList[index].isFav = !pokemonList[index].isFav;

      setPokemons(pokemonList);
      
  }

  return (
    <div className="pokedex-page">
      <h1>Pokedex</h1>
      <Search/>
      {
        pokeLoading ?
          <p>Loading...</p>
          : ''
      }

      { 
        !pokeLoading && pokemons.length > 0 ?
          <PokemonList pokemons={pokemons} handleFav={handleFav}  />
          : ''
      }

      {/* { 
        !pokeLoading && pokemons.length !== 0 ?
          <p>There aren't Pokemons</p>
          : ''
      } */}

      {
        error.error ?
          <p>Opss! We have an error loading the Pokemons</p>
          : ''
      }
    </div>
  )

};

export default Pokedex;

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

  const [search, setSearch] = useState("");

  const [pokeSearched, setPokeSearched] = useState([]);
  
  const [pokemons, pokeLoading, error, setPokemons] = usePokedex();

  useEffect(() => {

    setPokeSearched(pokemons);

  }, [pokemons])
  
  const handleFav = (id, index) => {
      toggleFav(id);

      const pokemonList = [...pokeSearched]

      pokemonList[index].isFav = !pokemonList[index].isFav;

      setPokemons(pokemonList);
      
  }

  const handleSearch = () => {
    setPokeSearched(searchPokemons(search));
  }

  const searchPokemons = (text = "") => {

    let pokeList = [...pokemons];
    if(text.length === 0) {
      return pokeList;
    }

    text = text.toLowerCase();

    pokeList = pokeList.filter(pokemon => {
      const pokemonName = pokemon.name.toLowerCase();
      const find = pokemonName.indexOf(text);
      return find !== -1;
    });

    return pokeList;
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    setPokeSearched(searchPokemons(e.target.value));
  }

  return (
    <div className="pokedex-page">
      <h1>Pokedex</h1>
      <Search value={search} onChange={handleChange} onClick={handleSearch} />
      {
        pokeLoading &&
          <p>Loading...</p>
      }

      { 
        !pokeLoading &&
          <PokemonList pokemons={ pokeSearched } handleFav={handleFav}  />
      }

      {
        !pokeLoading && pokeSearched.length === 0 &&
          <p>There aren't Pokemons</p>
      }

      {
        error.error &&
          <p>Opss! We have an error loading the Pokemons</p>
      }
    </div>
  )

};

export default Pokedex;

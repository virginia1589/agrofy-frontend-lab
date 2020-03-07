/* Pokeapi se va a encargar de gestionar los fetch al API */

const API_BASE = "https://pokeapi.co/api/v2";

const fetchPokemon = (promises) => {
        
    return Promise.all(promises)
        .then(results => {
            const pokemons = results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                id: result.id
            }));

            return pokemons;
        })

};

export const getAllPokemon = () => {

    return fetch(`${API_BASE}/pokemon?limit=150`)
        .then(response => {
            return response.json();
        })
        .then(list => {
            const pokemons = list.results;

            const promises = [];

            pokemons.forEach(pokemon => {
                promises.push(
                    fetch(pokemon.url).then(res => res.json())
                );
            });

            return fetchPokemon(promises)
                .then(pokemonsArray => {
                    return pokemonsArray;
                });

        })
        .catch(error => {
            console.log(error);
        });

}
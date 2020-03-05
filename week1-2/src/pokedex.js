const getAllPokemon = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
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

            fetchPokemon(promises);
        })
        .catch(error => {
            console.log(error);
        });

}

getAllPokemon();

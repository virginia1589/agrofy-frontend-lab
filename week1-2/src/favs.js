getFavs = () => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        localStorage.setItem("pokefavs", "");
        favs = localStorage.getItem("pokefavs");
    }

    favs = favs.split(",");

    fetchFavs(favs);
    
}

const fetchFavs = (favs) => {

    const promises = [];
    favs.forEach(fav => {

        const url = `https://pokeapi.co/api/v2/pokemon/${fav}`

        promises.push(
            fetch(url).then(res => res.json())
        );
    });

    fetchPokemon(promises);

}

const fetchPokemon = (promises) => {
        
    Promise.all(promises)
    .then(results => {
        const pokemons = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemons(pokemons);
    })

};
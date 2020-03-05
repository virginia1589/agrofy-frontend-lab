const getFavs = () => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        return false;
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

document.addEventListener('removeFav', e => {
    e.detail.pokemonCard.remove();
});

getFavs();
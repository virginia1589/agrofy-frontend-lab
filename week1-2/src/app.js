const addFav = (id) => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        localStorage.setItem("pokefavs", "");
        favs = localStorage.getItem("pokefavs");
    }
    favs = favs.split(",");
    favs.push(id);
    localStorage.setItem("pokefavs", favs.toString());
};

const removeFav = (id) => {
    let favs = localStorage.getItem("pokefavs");
    favs = favs.split(",");
    id = id.toString();
    const deleteFav = favs.indexOf(id);
    favs.splice(deleteFav, 1);
    localStorage.setItem("pokefavs", favs.toString());
}

const findFav = id => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        localStorage.setItem("pokefavs", "");
        favs = localStorage.getItem("pokefavs");
    }
    favs = favs.split(",");

    id = id.toString();

    return favs.indexOf(id) != -1 ? true : false;
}





 displayPokemons = (pokemon) => {

    const pokedex = document.getElementById("poke_container");

    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
         
        <div class="card">
            
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            ${ 
                findFav(pokeman.id) ?
                `<button class="boton-fav remove-fav">Remove</button>`
                :
                `<button class="boton-fav add-fav">Add to favs</button>`
            }
            
        </div> 
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

let fetchPokemon = (promises) => {
        
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

const addFav = (id) => {
    let favs = localStorage.getItem("pokefavs");
    if(favs) {
        favs = favs.split(",");
    }
    else {
        favs = [];
    }
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
        return false;
    }
    favs = favs.split(",");

    id = id.toString();

    return favs.indexOf(id) != -1 ? true : false;
}

const botonAddFav = `<button class="boton-fav add-fav">Add to favs</button>`;
const botonRemoveFav = `<button class="boton-fav remove-fav">Remove</button>`;

const displayPokemons = (pokemon) => {

    const pokedex = document.getElementById("poke_container");

    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
         
        <div class="card pokemon" id="card" data-id="${pokeman.id}">
            
            <img class="card-image" src="${pokeman.image}"/>
            <h2 class="card-title">${pokeman.name}</h2>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <div class="card-actions">
                ${ 
                    findFav(pokeman.id) ?
                    botonRemoveFav
                    :
                    botonAddFav
                }
            </div>
            
        </div> 
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

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

document.addEventListener('click', e => {

    const element = e.target;

    if(element.classList.contains('boton-fav')) {
        const button = e.target;
        const buttonsContainer = button.parentNode;
        const pokemonCard = button.parentNode.parentNode;
        const id = pokemonCard.dataset.id;

        if(findFav(id)) {
            removeFav(id);
            buttonsContainer.innerHTML = botonAddFav;
            const eventRemoveFav = new CustomEvent('removeFav', {
                detail: {
                    pokemonCard: pokemonCard
                }
            });
            document.dispatchEvent(eventRemoveFav);
        }
        else {
            addFav(id);
            buttonsContainer.innerHTML = botonRemoveFav;
        }

    }

});
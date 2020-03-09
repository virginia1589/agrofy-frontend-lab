/* éste archivo se encarga de administrar los favoritos en el localStorage */

export const addFav = (id) => {
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

export const removeFav = (id) => {
    let favs = localStorage.getItem("pokefavs");
    favs = favs.split(",");
    id = id.toString();
    const deleteFav = favs.indexOf(id);
    favs.splice(deleteFav, 1);
    localStorage.setItem("pokefavs", favs.toString());
}

export const findFav = id => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        return false;
    }
    favs = favs.split(",");

    id = id.toString();

    return favs.indexOf(id) !== -1 ? true : false;
}

export const toggleFav = (id) => {
    if(findFav(id)) {
        removeFav(id);
    }
    else {
        addFav(id);
    }
}

export const listFavs = () => {
    let favs = localStorage.getItem("pokefavs");
    if(!favs) {
        return [];
    }

    favs = favs.split(",");

    return favs;
}
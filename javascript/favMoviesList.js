const LIST_KEY = "favMovie";
import FavMovieCard from "./favMovieCard.js";
export function getFavMovies() {
  const myListJson = localStorage.getItem(LIST_KEY);
  return myListJson != null ? JSON.parse(myListJson) : [];
}
function saveFavMovies(myList) {
  localStorage.setItem(LIST_KEY, JSON.stringify(cleanList(myList)));
}
export function addNewMovie(movie) {
  let myList = [];
  if (getFavMovies() != null) {
    myList = getFavMovies();
  }
  myList.push(movie);
  saveFavMovies(myList);
  console.log(getFavMovies());
}
function cleanList(myList){
    return myList.filter((movie) => typeof movie == 'object' )
}
export function removeMovie(movieId) {
  let myList = [];
  if (getFavMovies() != null) {
    myList = getFavMovies();
  }
  myList = myList.filter((movie) => movie.id != movieId);
  saveFavMovies(myList);
  console.log(getFavMovies());
}
export function movieIsInList(id) {
  const myList = getFavMovies();
  const movieOfId = myList.find((movie) => movie.id == id);
  return movieOfId != null;
}
//Create doom
class FavList {
  constructor(parentId, moviesList) {
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.moviesList = moviesList;
    this.createList();
  }
  createList() {
    this.myList = document.createElement("section");
    this.myList.id = "my-favs";

    const title = document.createElement("h1");
    title.innerText = "Mi Lista:";

    this.grid = document.createElement("div");
    this.grid.id = "fav-grid";

    this.myList.append(title, this.grid);
    this.parent.appendChild(this.myList);
    this.updateList(this.moviesList);
  }
  updateList(moviesList) {
    console.log(moviesList);
    for (const movie of moviesList) {
      const movieCardNode = new FavMovieCard(movie, "fav-grid").card;
    }
  }
}

export default FavList;
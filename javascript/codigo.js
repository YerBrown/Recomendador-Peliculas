import MovieCard from "./favMovieCard.js";
import Movie from "./movieClass.js";
import MainMovieCard from "./mainMovieCard.js";
import FavList from "./favMoviesList.js";
import { getFavMovies } from "./favMoviesList.js";
import PreferencesForm from "./form.js";
import {
  PELICULAS,
  GENEROS,
  getFilmById,
  getGenreById,
  changeDiscoverMovies,
} from "./movie-list.js";
import {
  getDiscoverMoviesByFilter,
  getGenres,
  getWatchProvidersByRegion,
} from "./apiIntegration.js";
window.mediaLink = "https://www.themoviedb.org/t/p/original/";
const mainParent = document.getElementsByTagName("main")[0];
let mainMovieCard = null;
async function openMainPage() {
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    mainParent.innerHTML = "";
  }

  if (mainMovieCard != null) {
    return;
  }
  mainMovieCard = new MainMovieCard("parent");

  await mainMovieCard.showNextMovie();

  if (!mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.add("align-justify-center");
  }
}

function openMyList() {
  if (mainMovieCard != null) {
    mainMovieCard = null;
    mainParent.innerHTML = "";
  }
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    return;
  }

  new FavList("parent", getFavMovies());

  if (mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.remove("align-justify-center");
  }
}

function asignNavLogic() {
  const recommend = document.getElementById("nav-recommend");
  const myList = document.getElementById("nav-my-favs");
  const game = document.getElementById("nav-game");

  recommend.addEventListener("click", () => openMainPage());
  myList.addEventListener("click", () => openMyList());
}

new PreferencesForm([], [], "parent");
// asignNavLogic();

// openMainPage();

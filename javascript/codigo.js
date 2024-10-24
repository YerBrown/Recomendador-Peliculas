import MainMovieCard from "./mainMovieCard.js";
import FavList from "./favMoviesList.js";
import { getFavMovies } from "./favMoviesList.js";
import PreferencesForm from "./form.js";
import { getLocalStoragePreferences, updatePreferences } from "./movie-list.js";
window.mediaLink = "https://www.themoviedb.org/t/p/original/";

const mainParent = document.getElementsByTagName("main")[0];
let mainMovieCard = null;
let currentMovieIndex = 0;

// Abrir ventana de recomendaciones
export async function openMainPage(updateFilms = false) {
  //Comprobar si ya se relleno el formulario alguna vez
  const currentPreferences = getLocalStoragePreferences();
  if (currentPreferences != null) {
    updatePreferences(currentPreferences);
  } else {
    openPreferences();
    return;
  }

  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    mainParent.innerHTML = "";
  }

  if (mainMovieCard != null) {
    return;
  }
  mainMovieCard = new MainMovieCard("parent");

  if (updateFilms) {
    await mainMovieCard.showNextMovie(true);
  } else {
    mainMovieCard.currentMovieIndex = currentMovieIndex - 1;
    await mainMovieCard.showNextMovie();
  }

  if (!mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.add("align-justify-center");
  }
}
// Abrir ventana de lista de favoritos
function openMyList() {
  if (mainMovieCard != null) {
    currentMovieIndex = mainMovieCard.currentMovieIndex;
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
export function openPreferences(preferences = null) {
  if (mainMovieCard != null) {
    currentMovieIndex = mainMovieCard.currentMovieIndex;
    mainMovieCard = null;
    mainParent.innerHTML = "";
  }
  // abrirFormulario();
  new PreferencesForm("parent", preferences);
}
// Asignar logica en el navegador
function asignNavLogic() {
  const recommend = document.getElementById("nav-recommend");
  const myList = document.getElementById("nav-my-favs");
  const game = document.getElementById("nav-game");

  recommend.addEventListener("click", () => openMainPage());
  myList.addEventListener("click", () => openMyList());
}

asignNavLogic();
openMainPage();

import MovieCard from "./favMovieCard.js";
import { PELICULAS, GENEROS, getFilmById, getGenreById } from "./movie-list.js";
window.mediaLink = "https://www.themoviedb.org/t/p/w1280/";
const mainParent = document.getElementsByTagName("main")[0];

function renderAllFilms(films) {
  for (const film of films) {
    const movieCardNode = new MovieCard(film, "fav-grid").card;
  }
}

let currentMovieId = -1;
//Función para mostrar carta de anverso
function showCard(movie) {
  const currentMovie = movie;
  const normalCard = document.getElementById("card");
  const reverseCard = document.getElementById("reverse-card");

  if (normalCard != null && normalCard != undefined) {
    normalCard.remove();
  }
  if (reverseCard != null && reverseCard != undefined) {
    reverseCard.remove();
  }

  //Crear estructura
  const card = document.createElement("section");
  const movieTitle = document.createElement("h2");
  const cardRight = document.createElement("div");
  const movieData = document.createElement("div");

  //TODO me falta meter la lista ul, li con Género,Año,Director
  const frontLinks = document.createElement("div");
  const favButton = document.createElement("button");
  const otherMovieButton = document.createElement("button");
  const infoButton = document.createElement("button");

  //Añadir ID,class
  card.id = "card";
  movieTitle.classList.add("movie-title");
  cardRight.id = "card-right";
  movieData.id = "movie-data";
  //TODO me falta añadir la ul-li
  frontLinks.id = "front-links";
  frontLinks.classList.add("links");
  favButton.classList.add("fav-button");
  otherMovieButton.classList.add("other-movie-button");
  infoButton.classList.add("info-button");
  //Ordenar la estructura
  card.appendChild(movieTitle);
  card.appendChild(cardRight);
  cardRight.appendChild(movieData);
  movieData.appendChild; //TODO meter la ul li como hijo
  cardRight.appendChild(frontLinks);
  frontLinks.appendChild(favButton);
  frontLinks.appendChild(otherMovieButton);
  frontLinks.appendChild(infoButton);

  mainParent.appendChild(card);

  //Asignar contenido
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  card.style.backgroundImage = `url(${baseImageUrl + movie.backdrop_path})`;

  movieTitle.textContent = movie.title;
  movieData; //TODO: Me falta meter la ul li de arriba
  favButton.textContent = "Añadir a favoritos";
  otherMovieButton.textContent = "Otra película";
  infoButton.textContent = "Más info";

  //Eventlistener para los tres botones
  favButton.addEventListener("click", () => ""); //TODO esto debería añadir la película con todos sus datos a la lista de favoritos y cambiar el icono estrella del css por uno relleno
  otherMovieButton.addEventListener("click", () => showNextMovie()); // En vez de llamar a la API cada vez debería recorer un array recopilado de la primera vez
  infoButton.addEventListener("click", () => showReverseCard(currentMovie));
}

function showReverseCard(movie) {
  const currentMovie = movie;
  //TODO: Creo que me falta vaciar la tarjeta de alguna manera antes de mostrar la siguiente, en ambas funciones
  const card = document.getElementById("card");
  if (card != null && card != undefined) {
    card.remove();
  }
  //Crear estructura
  const reverseCard = document.createElement("section");
  const poster = document.createElement("div");
  const posterImg = document.createElement("img");
  const reverseCardRight = document.createElement("div");
  const reverseMovieTitle = document.createElement("div");
  const sinopsis = document.createElement("p");
  const reverseLinks = document.createElement("div");
  const favButton = document.createElement("button");
  const playButton = document.createElement("button");
  const backButton = document.createElement("button");
  //TODO Falta añadir botón o tarjeta de "dónde ver"

  //Añadir ID, class
  reverseCard.id = "reverse-card";
  poster.classList.add("poster");
  reverseCardRight.id = "reverse-card-right";
  reverseMovieTitle.classList.add("reverse-movie-title");
  sinopsis.id = "sinopsis";
  reverseLinks.id = "reverse-links";
  reverseLinks.classList.add("links");
  favButton.classList.add("fav-button");
  playButton.classList.add("play-button");
  backButton.classList.add("back-button");
  //TODO Falta asignar ID del botón o tarjeta de "dónde ver"

  //Ordenar la estructura

  reverseCard.appendChild(poster);
  poster.appendChild(posterImg);
  reverseCard.appendChild(reverseCardRight);
  reverseCardRight.appendChild(reverseMovieTitle);
  reverseCardRight.appendChild(sinopsis);
  reverseCardRight.appendChild(reverseLinks);
  reverseLinks.appendChild(favButton);
  reverseLinks.appendChild(playButton);
  reverseLinks.appendChild(backButton);
  //TODO Falta asignar hijo del botón o tarjeta de "dónde ver"

  mainParent.appendChild(reverseCard);

  //Asignar contenido
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  reverseCard.style.backgroundImage = `url(${
    baseImageUrl + movie.backdrop_path
  })`;
  posterImg.src = baseImageUrl + movie.poster_path;

  const year = movie.release_date.split("-")[0];
  reverseMovieTitle.textContent = `${movie.title} (${year})`;

  sinopsis.textContent = movie.overview;
  favButton.textContent = "Añadir a favoritos";
  playButton.textContent = "Ver trailer";
  backButton.textContent = "Volver";

  /* favButton.addEventListener("click") */ //TODO esto debería añadir la película con todos sus datos a la lista de favoritos y cambiar el icono estrella del css por uno relleno
  playButton.addEventListener("click", () => "iframe"); // TODO: Aquí tiene que saltar el iframe para que se reproduzca el trailer
  backButton.addEventListener("click", () => showCard(currentMovie));
}

function showNextMovie() {
  ++currentMovieId;
  if (currentMovieId >= PELICULAS.length) {
    currentMovieId = 0;
  }
  showCard(PELICULAS[currentMovieId]);
}
function showMyList() {
  const myList = document.createElement("section");
  myList.id = "my-favs";

  const title = document.createElement("h1");
  title.innerText = "Mi Lista:";

  const grid = document.createElement("div");
  grid.id = "fav-grid";

  myList.append(title, grid);
  mainParent.appendChild(myList);
  renderAllFilms(PELICULAS);
}
function openMainPage() {
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    mainParent.innerHTML = "";
  }
  const cardHTML = document.getElementById("card");
  if (cardHTML != null && cardHTML != undefined) {
    return;
  }
  const min = 0;
  const max = Math.floor(PELICULAS.length - 1); // Redondea hacia abajo el máximo
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  showCard(PELICULAS[randomNumber]);

  if (!mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.add("align-justify-center");
  }
}

function openMyList() {
  const cardHTML = document.getElementById("card");
  const cardReverseHTML = document.getElementById("reverse-card");
  if (
    (cardHTML != null && cardHTML != undefined) ||
    (cardReverseHTML != null && cardReverseHTML != undefined)
  ) {
    mainParent.innerHTML = "";
  }
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    return;
  }

  showMyList();

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

asignNavLogic();
// openMainPage();

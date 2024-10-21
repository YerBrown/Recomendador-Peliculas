import { getGenreById, getFilmById } from "./movie-list.js";
class MoreInfoPopup {
  constructor(film, parentId) {
    this.film = film;
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.createMoreInfoPopup();
  }
  createMoreInfoPopup() {
    // Montar las url completas de las imagenes
    const backdropPath = window.mediaLink + this.film.backdrop_path;
    const posterPath = window.mediaLink + this.film.poster_path;

    // Crear el popup y su estructura
    this.popup = document.createElement("section");
    this.popup.id = "more-info";
    const popupContent = document.createElement("div");
    popupContent.id = "my-favs-card";

    const poster = document.createElement("div");
    const posterImg = document.createElement("img");
    const contentRight = document.createElement("div");
    const movieTitle = document.createElement("h3");
    const sinopsis = document.createElement("p");
    const links = document.createElement("div");
    const favButton = document.createElement("button");
    const playButton = document.createElement("button");
    const backButton = document.createElement("button");

    //Añadir ID, class
    poster.classList.add("poster");
    contentRight.id = "reverse-card-right";
    movieTitle.classList.add("reverse-movie-title");
    sinopsis.id = "sinopsis";
    links.id = "reverse-links";
    links.classList.add("links");
    favButton.classList.add("fav-button");
    playButton.classList.add("play-button");

    // Cambiar el fondo en base a la pelicula
    const background = document.createElement("div");
    background.id = "popup-background";
    background.style.backgroundImage = `url(${backdropPath})`;
    const backgroundFilter = document.createElement("div");
    backgroundFilter.id = "popup-background-filter";

    // Cambiar la portada en base a la pelicula
    poster.appendChild(posterImg);
    posterImg.src = posterPath;
    posterImg.alt = "portada de " + this.film.title;

    // Añadir el titulo en base a la pelicula
    const year = this.film.release_date.split("-")[0];
    movieTitle.textContent = `${this.film.title} (${year})`;

    // Añadir la informacion sobre la pelicula
    const filmInfo = document.createElement("p");
    let genres = this.film.genre_ids.map((id) => getGenreById(id));
    genres = genres.join(", ");
    filmInfo.textContent = `${this.film.release_date} | ${genres}`;
    sinopsis.textContent = this.film.overview;
    favButton.textContent = "Añadir a favoritos";
    playButton.textContent = "Ver trailer";
    links.append(favButton, playButton);


    // Añadir el boton de cerrar el popup
    const close = document.createElement("div");
    close.id = "close";
    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.textContent = "Cerrar";
    closeButton.addEventListener("click", () => this.removeMoreInfoPopup());
    close.appendChild(closeButton);

    // Añafir toda la estructura al nodo padre

    //Ordenar la estructura
    popupContent.append(poster, contentRight, background, backgroundFilter);
    contentRight.append(close, movieTitle, filmInfo, sinopsis, links);
    this.popup.appendChild(popupContent);
    this.parent.appendChild(this.popup);
  }
  removeMoreInfoPopup() {
    this.popup.remove();
  }
}
export default MoreInfoPopup;

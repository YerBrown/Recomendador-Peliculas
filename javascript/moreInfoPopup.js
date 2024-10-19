import { getGenreById, getFilmById } from "./codigo.js";
class MoreInfoPopup {
  static mediaLink = "https://www.themoviedb.org/t/p/w1280/";
  constructor(film, parentId) {
    this.film = film;
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.createMoreInfoPopup();
  }
  createMoreInfoPopup() {
    // Montar las url completas de las imagenes
    const backdropPath = MoreInfoPopup.mediaLink + this.film.backdrop_path;
    const posterPath = MoreInfoPopup.mediaLink + this.film.poster_path;

    // Crear el popup y su estructura
    this.popup = document.createElement("section");
    this.popup.id = "more-info";
    const popupContent = document.createElement("div");
    popupContent.id = "my-favs-card";
    const leftSide = document.createElement("div");
    leftSide.id = "left-portrait";
    const rightSide = document.createElement("div");
    rightSide.id = "right-info";

    // Cambiar el fondo en base a la pelicula
    const background = document.createElement("div");
    background.id = "popup-background";
    background.style.backgroundImage = `url(${backdropPath})`;
    const backgroundFilter = document.createElement("div");
    backgroundFilter.id = "popup-background-filter";

    // Cambiar la portada en base a la pelicula
    const poster = document.createElement("img");
    poster.src = posterPath;
    poster.alt = "portada";
    leftSide.appendChild(poster);

    // Añadir el titulo en base a la pelicula
    const filmTitle = document.createElement("h3");
    filmTitle.textContent = `${this.film.title}`;

    // Añadir la informacion sobre la pelicula
    const filmInfo = document.createElement("p");
    let genres = this.film.genre_ids.map((id) => getGenreById(id));
    genres = genres.join(", ");
    filmInfo.textContent = `${this.film.release_date} | ${genres}`;

    // Añadir el boton de cerrar el popup
    const close = document.createElement("div");
    close.id = "close";
    const closeButton = document.createElement("button");
    closeButton.id = "close-button";
    closeButton.textContent = "Cerrar";
    closeButton.addEventListener("click", () => this.removeMoreInfoPopup());
    close.appendChild(closeButton);
    rightSide.append(close, filmTitle, filmInfo);

    // Añafir toda la estructura al nodo padre
    popupContent.append(leftSide, rightSide, background, backgroundFilter);
    this.popup.appendChild(popupContent);
    this.parent.appendChild(this.popup);
  }
  removeMoreInfoPopup() {
    this.popup.remove();
  }
}
export default MoreInfoPopup;

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
    const backdropPath = window.mediaLink + this.film.backdropPath;
    const posterPath = window.mediaLink + this.film.posterPath;

    // Crear el popup y su estructura
    this.popup = document.createElement("section");
    this.popup.id = "more-info";
    const popupContent = document.createElement("div");
    popupContent.id = "my-favs-card";

    const poster = document.createElement("div");
    const posterImg = document.createElement("img");
    const contentRight = document.createElement("div");
    const movieTitle = document.createElement("h3");
    const details = document.createElement("p");
    const sinopsis = document.createElement("p");
    const people = document.createElement("div");
    const director = document.createElement("h5");
    const cast = document.createElement("h5");
    const links = document.createElement("div");
    this.favButton = document.createElement("button");
    const playButton = document.createElement("button");

    //Añadir ID, class
    poster.id = "left-portrait";
    contentRight.id = "right-info";
    movieTitle.classList.add("moreInfo-movie-title");
    details.id = "movie-details";
    sinopsis.id = "sinopsis";
    people.id = "people";
    director.id = "director";
    cast.id = "cast";
    links.id = "links";
    links.classList.add("links");
    this.favButton.classList.add("fav-button");
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
    const year = this.film.releaseDate.split("-")[0];
    movieTitle.textContent = `${this.film.title} (${year})`;

    // Añadir la informacion sobre la pelicula
    let genres = this.film.genreIds.map((id) => getGenreById(id));
    genres = genres.join(", ");
    let runTime = this.film.runTime;
    const horas = Math.floor(runTime / 60); // Calcula cuántas horas hay
    const minutosRestantes = runTime % 60;
    this.runtimeString = "";
    if (horas > 0) {
      this.runtimeString += horas + "h ";
    }
    if (minutosRestantes > 0) {
      this.runtimeString += minutosRestantes + "m ";
    }
    details.textContent = `${this.film.releaseDate} | ${genres} | ${this.runtimeString}`;
    sinopsis.textContent = this.film.overview;
    let peopleString = "";
    if (this.film.director != null && this.film.director != "") {
      peopleString += "Director: " + this.film.director + "\n";
    }
    if (this.film.cast != null && this.film.cast.length > 0) {
      peopleString += "Actores: ";
      for (const actor of this.film.cast) {
        peopleString += actor + " ";
      }
    }
    people.innerText = peopleString;
    this.favButton.textContent = "Añadir a favoritos";
    playButton.textContent = "Ver trailer";
    links.append(this.favButton, playButton);

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
    contentRight.append(close, movieTitle, details, sinopsis, people, links);
    this.popup.appendChild(popupContent);
    this.parent.appendChild(this.popup);
  }
  removeMoreInfoPopup() {
    this.popup.remove();
  }
}
export default MoreInfoPopup;

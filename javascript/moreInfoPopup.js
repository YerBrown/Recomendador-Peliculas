import { getGenreById, getFilmById } from "./movie-list.js";
import { movieIsInList, addNewMovie, removeMovie } from "./favMoviesList.js";
import MainMovieCard from "./mainMovieCard.js";
import { currentList } from "./codigo.js";
class MoreInfoPopup {
  constructor(movieList, film, parentId) {
    this.film = film;
    this.movieList = movieList;
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
    this.favButtonIcon = document.createElement("img");
    this.favButton = document.createElement("button");
    this.favButtonIcon.classList.add("fav-icon");
    this.favButton.addEventListener("click", () => this.togleFavoritos());
    this.favButton.innerHTML = "";
    this.favText = document.createElement("p");
    this.favButton.append(this.favButtonIcon, this.favText);
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
    if (movieIsInList(this.film.id)) {
      console.log("esta");
      this.favText.innerText = "Quitar de favoritos";
      this.favButtonIcon.src = "/assets/estrella-activa.png";
    } else {
      console.log("no esta");
      this.favText.innerText = "Añadir a favoritos";
      this.favButtonIcon.src = "/assets/estrella.png";
    }

    if (this.film.trailer != null) {
      playButton.textContent = "Ver trailer";
    } else {
      playButton.textContent = "Trailer no disponible";
    }
    playButton.addEventListener("click", () => {
      this.showMoreInfoTrailer(this.film);
    });
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
  showMoreInfoTrailer(movie) {
    if (movie.trailer == null) {
      return;
    }
    this.modalOverlay = document.createElement("div");
    this.modalOverlay.classList.add("modal-overlay");
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        this.closeModal();
      }
    });
    this.handleEscape = (e) => {
      if (e.key === "Escape") {
        this.closeModal();

        document.removeEventListener("keydown", this.handleEscape);
      }
    };
    document.addEventListener("keydown", this.handleEscape);

    this.modalContent = document.createElement("div");
    this.modalContent.classList.add("modal-content");

    this.closeButton = document.createElement("button");
    this.closeButton.classList.add("close-button");
    this.closeButton.innerHTML = "×";
    this.closeButton.setAttribute("aria-label", "Cerrar trailer");
    this.closeButton.addEventListener("click", () => this.closeModal());

    this.iframe = document.createElement("iframe");
    this.iframe.id = "trailer-iframe";
    const baseTrailerUrl = "https://www.youtube.com/embed/";
    this.iframe.src = baseTrailerUrl + movie.trailer.key;

    this.modalOverlay.appendChild(this.modalContent);
    this.modalContent.appendChild(this.iframe);
    this.modalContent.appendChild(this.closeButton);

    this.parent.appendChild(this.modalOverlay);
  }
  closeModal() {
    this.modalOverlay.remove();
  }
  togleFavoritos() {
    if (movieIsInList(this.film.id)) {
      this.favText.innerText = "Añadir a favoritos";
      this.favButtonIcon.src = "/assets/estrella.png";
      removeMovie(this.film.id);
    } else {
      this.favText.innerText = "Quitar de favoritos";
      this.favButtonIcon.src = "/assets/estrella-activa.png";
      addNewMovie(this.film);
    }
    this.movieList.updateList();
  }
}
export default MoreInfoPopup;

import {
  changeDiscoverMovies,
  PELICULAS,
  getFilmById,
  getGenreById,
} from "./movie-list.js";
import { getDiscoverMoviesByFilter } from "./apiIntegration.js";
import {
  getFavMovies,
  movieIsInList,
  addNewMovie,
  removeMovie,
} from "./favMoviesList.js";
import Movie from "./movieClass.js";
class MainMovieCard {
  constructor(parentId) {
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.currentMovieIndex = -1;
    this.currentPage = 1;
    this.createMainCard();
  }

  createMainCard() {
    this.cardContainer = document.createElement("section");
    this.cardContainer.id = "card-container";

    this.parent.appendChild(this.cardContainer);

    this.card = document.createElement("div");
    this.card.id = "card";

    this.otherMovieButton = document.createElement("button");
    this.otherMovieButton.classList.add("other-movie-button");
    this.otherMovieButton.addEventListener("click", () => this.showNextMovie());

    //NormalCard
    this.normalCardContent = document.createElement("div");
    this.normalCardContent.id = "normal-card";

    this.movieTitle = document.createElement("h2");
    this.movieTitle.classList.add("movie-title");

    const cardRight = document.createElement("div");
    cardRight.id = "card-right";

    const movieData = document.createElement("div");
    movieData.id = "movie-data";

    const movieDataList = document.createElement("ul");
    movieDataList.id = "movie-data-list";

    this.movieDataYear = document.createElement("li");
    this.movieDataYear.id = "movie-data-year";
    this.movieDataGenre = document.createElement("li");
    this.movieDataGenre.id = "movie-data-genre";
    this.movieDataDirector = document.createElement("li");
    this.movieDataDirector.id = "movie-data-director";

    const watchNow = document.createElement("h3");
    watchNow.id = "watch-now";
    watchNow.innerText = "VER AHORA";

    this.streamingPlatforms = document.createElement("div");
    this.streamingPlatforms.id = "streaming-platforms";

    const frontLinks = document.createElement("div");
    frontLinks.id = "front-links";
    frontLinks.classList.add("links");
    this.favNormalButton = document.createElement("button");
    this.favNormalButton.classList.add("fav-button");
    this.favNormalButton.addEventListener("click", () => this.toggleFavorite());
    this.infoButton = document.createElement("button");
    this.infoButton.classList.add("info-button");
    this.infoButton.addEventListener("click", () => this.showReverseCard());

    this.cardContainer.appendChild(this.card);
    this.cardContainer.appendChild(this.otherMovieButton);

    this.normalCardContent.append(this.movieTitle, cardRight);
    cardRight.appendChild(movieData);
    movieData.appendChild(movieDataList);
    movieDataList.appendChild(this.movieDataYear);
    movieDataList.appendChild(this.movieDataGenre);
    movieDataList.appendChild(this.movieDataDirector);
    cardRight.appendChild(watchNow);
    cardRight.appendChild(this.streamingPlatforms);
    cardRight.appendChild(frontLinks);
    frontLinks.appendChild(this.favNormalButton);
    frontLinks.appendChild(this.infoButton);

    //Reverse card
    this.reverseCardContent = document.createElement("div");
    this.reverseCardContent.id = "reverse-card";

    this.poster = document.createElement("img");
    this.poster.classList.add("poster");

    const reverseCardRight = document.createElement("div");
    reverseCardRight.id = "reverse-card-right";
    this.reverseMovieTitle = document.createElement("div");
    this.reverseMovieTitle.classList.add("reverse-movie-title");
    this.sinopsis = document.createElement("p");
    this.sinopsis.id = "sinopsis";
    const reverseLinks = document.createElement("div");
    reverseLinks.id = "reverse-links";
    reverseLinks.classList.add("links");
    this.favButton = document.createElement("button");
    this.favButton.classList.add("fav-button");
    this.favButton.addEventListener("click", () => this.toggleFavorite()); //TODO falta hacer la función
    this.playButton = document.createElement("button");
    this.playButton.classList.add("play-button");
    this.playButton.addEventListener("click", () => this.showTrailer());
    this.backButton = document.createElement("button");
    this.backButton.classList.add("back-button");
    this.backButton.addEventListener("click", () => this.showNormalCard());

    this.reverseCardContent.append(this.poster, reverseCardRight);
    reverseCardRight.appendChild(this.reverseMovieTitle);
    reverseCardRight.append(this.sinopsis, reverseLinks);
    reverseLinks.append(this.favButton, this.playButton);
    reverseLinks.appendChild(this.backButton);

    this.otherMovieButton.textContent = "Otra película";
  }
  async showNextMovie() {
    if (PELICULAS.length <= 0) {
      await this.searchMovies();
    }
    ++this.currentMovieIndex;
    if (this.currentMovieIndex >= PELICULAS.length - 2) {
      this.currentMovieIndex = 0;
      ++this.currentPage;
      this.showNormalCard();
      await this.searchMovies();
    } else {
      this.showNormalCard();
    }
  }

  showNormalCard() {
    this.removeCurrentCard();

    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    this.card.style.backgroundImage = `url(${
      baseImageUrl + PELICULAS[this.currentMovieIndex].backdropPath
    })`;

    this.movieTitle.textContent = PELICULAS[this.currentMovieIndex].title;

    this.movieDataYear.innerText =
      "Año: " + PELICULAS[this.currentMovieIndex].releaseDate.split("-")[0];
    this.movieDataGenre.innerText = "Género: Prueba";
    this.movieDataGenre.innerText =
      "Género: " +
      PELICULAS[this.currentMovieIndex].genreIds
        .map((id) => getGenreById(id))
        .join(", ");
    this.movieDataDirector.innerText = "Director: Prueba "; //TODO: Falta sacar info de API

    this.streamingPlatforms.innerText = "PRUEBA STREAMING"; //TODO. falta sacar info de API

    this.favNormalButton.textContent = "Añadir a favoritos";
    this.infoButton.textContent = "Más info";

    this.card.appendChild(this.normalCardContent);
  }
  showReverseCard() {
    this.removeCurrentCard();
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
    this.card.style.backgroundImage = `url(${
      baseImageUrl + PELICULAS[this.currentMovieIndex].backdropPath
    })`;
    this.poster.src =
      baseImageUrl + PELICULAS[this.currentMovieIndex].posterPath;

    const year = PELICULAS[this.currentMovieIndex].releaseDate.split("-")[0];
    this.reverseMovieTitle.textContent = `${
      PELICULAS[this.currentMovieIndex].title
    } (${year})`;

    this.sinopsis.textContent = PELICULAS[this.currentMovieIndex].overview;
    this.favButton.textContent = "Añadir a favoritos";
    this.playButton.textContent = "Ver trailer";
    this.backButton.textContent = "Volver";

    this.card.appendChild(this.reverseCardContent);
  }
  removeCurrentCard() {
    this.card.innerHTML = "";
  }
  async searchMovies() {
    const params = {
      page: this.currentPage,
    };
    const moviesData = await getDiscoverMoviesByFilter(params);
    const discoveredMovies = [];
    for (const movieData of moviesData.results) {
      const newMovie = new Movie(
        movieData.id,
        movieData.title,
        movieData["genre_ids"],
        movieData["release_date"],
        movieData.overview,
        movieData["poster_path"],
        movieData["backdrop_path"]
      );
      discoveredMovies.push(newMovie);
    }
    console.log(discoveredMovies);
    changeDiscoverMovies(discoveredMovies);
  }
  showTrailer() {
    this.modalOverlay = document.createElement("div");
    this.modalOverlay.classList.add("modal-overlay");
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        closeModal();
      }
    });

    this.modalContent = document.createElement("div");
    this.modalContent.classList.add("modal-content");

    this.closeButton = document.createElement("button");
    this.closeButton.classList.add("close-button");
    this.closeButton.innerHTML = "×";
    this.closeButton.setAttribute("aria-label", "Cerrar trailer");
    this.closeButton.addEventListener("click", closeModal());

    this.iframe = document.createElement("iframe");
    this.iframe.id = "trailer-iframe";
    const baseTrailerUrl = "https://www.youtube.com/embed/";
    this.iframe.src = baseTrailerUrl + PELICULAS[this.currentMovieIndex].key;

    this.modalOverlay.appendChild(modalContent);
    this.modalContent.appendChild(iframe);
    this.modalContent.appendChild(closeButton);

    this.parent.appendChild(modalOverlay);
  }
  closeModal() {
    this.modalOverlay.remove();
  }
  toggleFavorite() {
    const currentMovieId = PELICULAS[this.currentMovieIndex].id;
    movieIsInList(currentMovieId)
      ? removeMovie(currentMovieId)
      : addNewMovie(PELICULAS[this.currentMovieIndex]);
  }
}
export default MainMovieCard;
/* const handleEscape = (e) => {
  if (e.key === "Escape") {
      closeModal();
      
      document.removeEventListener("keydown", handleEscape);
      }
      };
      document.addEventListener("keydown", handleEscape); */

//Funciones de Danel
/* function getFavorites() {
  const favorites = localstorage.getItem("favorites") || "[]"
  return JSON.parse(favorites)
}
function saveFavorites(favorites) {
  const favoritesString = JSON.stringify(favorites);
  localStorage.setItem("favorites", favoritesString)
}

function addFavorite(element) {
  const favorites = getFavorites()
  favorites.push(element)
  saveFavorites(favorites)
}
function removeFavorite(element) {
  const favorites = getFavorites()
  const elementIndex = favorites.findIndex(e => e.id === element.id)
  if (elementIndex === -1) {
    return
  }
  favorites.splice(elementIndex, 1)
  saveFavorites(favorites)
}
function isFavorite(element) {
  const favorites = getFavorites()
  const elementIndex = favorites.findIndex(e => e.id === element.id)
  if (elementIndex === -1) {
    return false
  }
  return true
}
function toggleFavorite(element) {
  if (isFavorite(element)) {
    removeFavorite(element)
  } else {
    addFavorite(element)
  }
} */
//Aquí acaban las funciones de Danel

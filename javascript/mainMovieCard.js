import {
  changeDiscoverMovies,
  PELICULAS,
  getFilmById,
  getGenreById,
  PREFERENCES,
} from "./movie-list.js";
import { getDiscoverMoviesByFilter } from "./apiIntegration.js";
import {
  getFavMovies,
  movieIsInList,
  addNewMovie,
  removeMovie,
} from "./favMoviesList.js";
import Movie from "./movieClass.js";
import { openPreferences } from "./codigo.js";
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
    this.cardFilter = document.createElement("div");
    this.cardFilter.id = "popup-background-filter";

    this.parent.appendChild(this.cardContainer);
    

    this.card = document.createElement("div");
    this.card.id = "card";

    this.buttonsContainer = document.createElement("div");
    this.buttonsContainer.id = "recomendations-button-container";

    this.otherMovieButton = document.createElement("button");
    this.otherMovieButton.id = "other-movie-button";
    this.otherMovieButton.addEventListener("click", () => this.showNextMovie());

    this.preferencesButtons = document.createElement("button");
    this.preferencesButtons.id = "preferences-button";
    this.preferencesButtons.addEventListener("click", () =>
      openPreferences(PREFERENCES)
    );

    this.buttonsContainer.append(
      this.otherMovieButton,
      this.preferencesButtons
    );

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
    watchNow.innerText = "DÓNDE VER";

    this.streamingPlatforms = document.createElement("div");
    this.streamingPlatforms.id = "streaming-platforms";

    const frontLinks = document.createElement("div");
    frontLinks.id = "front-links";
    frontLinks.classList.add("links");
    this.favNormalButtonIcon = document.createElement("img");
    this.favNormalButtonIcon.classList.add("fav-icon");
    this.favNormalButton = document.createElement("button");
    this.favNormalButton.classList.add("fav-button");
    this.favNormalButton.addEventListener("click", () => this.toggleFavorite());
    this.infoButton = document.createElement("button");
    this.infoButton.classList.add("info-button");
    this.infoButton.addEventListener("click", () => this.showReverseCard());

    this.favNormalButton.innerHTML = ""
    this.favText = document.createElement("p")
    this.favNormalButton.append(this.favNormalButtonIcon, this.favText);

    this.cardContainer.append(this.card, this.buttonsContainer);
    

    this.normalCardContent.append(this.cardFilter,this.movieTitle, cardRight);
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
    reverseCardRight.id = "card-right";
    this.reverseMovieTitle = document.createElement("div");
    this.reverseMovieTitle.classList.add("reverse-movie-title");
    this.sinopsis = document.createElement("p");
    this.sinopsis.id = "sinopsis";
    const reverseLinks = document.createElement("div");
    reverseLinks.id = "front-links";
    reverseLinks.classList.add("links");

    this.favReverseButton = document.createElement('button')
    this.favReverseButton.classList.add("fav-button");
    this.favReverseButton.innerHTML = ""
    this.favReverseButtonIcon = document.createElement("img");
    this.favReverseButtonIcon.classList.add("fav-icon");
    this.favReverseText = document.createElement("p")
    this.favReverseButton.append(this.favReverseButtonIcon, this.favReverseText);
    this.favReverseButton.addEventListener("click", () => this.toggleFavorite());

    this.playButton = document.createElement("button");
    this.playButton.classList.add("play-button");
    this.playButton.addEventListener("click", () => this.showTrailer());
    this.backButton = document.createElement("button");
    this.backButton.classList.add("back-button");
    this.backButton.addEventListener("click", () => this.showNormalCard());

    this.reverseCardContent.append(this.poster, reverseCardRight);
    reverseCardRight.appendChild(this.reverseMovieTitle);
    reverseCardRight.append(this.sinopsis, reverseLinks);
    reverseLinks.append(this.favReverseButton, this.playButton);
    reverseLinks.appendChild(this.backButton);

    this.otherMovieButton.textContent = "Otra película";
    this.preferencesButtons.textContent = "Cambiar preferencias";
  }
  async showNextMovie(reset = false) {
    if (PELICULAS.length <= 0) {
      await this.searchMovies();
    }
    ++this.currentMovieIndex;
    if (this.currentMovieIndex >= PELICULAS.length - 2) {
      PELICULAS.splice(0, PELICULAS.length - 2);

      this.currentMovieIndex = 0;
      ++this.currentPage;
      this.showNormalCard();
      await this.searchMovies();
    } else {
      if (reset) {
        await this.searchMovies(reset);
      }
      this.showNormalCard();
    }
  }
  showNormalCard() {
    this.removeCurrentCard();

    const baseImageUrl = "https://image.tmdb.org/t/p/original";
    this.card.style.backgroundImage = `url(${baseImageUrl + PELICULAS[this.currentMovieIndex].backdropPath
      })`;

    this.movieTitle.textContent = PELICULAS[this.currentMovieIndex].title;

    this.movieDataDirector.innerText = "Director: " + PELICULAS[this.currentMovieIndex].director;

    this.movieDataYear.innerText =
      "Año: " + PELICULAS[this.currentMovieIndex].releaseDate.split("-")[0];

    this.movieDataGenre.innerText =
      "Género: " + PELICULAS[this.currentMovieIndex].genreIds.map((id) => getGenreById(id)).join(", ");


    this.streamingPlatforms.innerHTML = ""

    if (PELICULAS[this.currentMovieIndex].watchProviders != "null") {


      for (const provider of PELICULAS[this.currentMovieIndex].watchProviders) {
        const newProvider = document.createElement("img")
        newProvider.classList.add("provider-icon")
        newProvider.setAttribute("src", baseImageUrl + provider.logo_path)
        this.streamingPlatforms.appendChild(newProvider)
      }
    }

    const currentMovieId = PELICULAS[this.currentMovieIndex].id;
    if (movieIsInList(currentMovieId)) {

      this.favNormalButtonIcon.src = "/assets/estrella-activa.png"
      this.favText.innerText = "Quitar de favoritos"


    } else {

      this.favNormalButtonIcon.src = "/assets/estrella.png"
      this.favText.innerText = "Añadir a favoritos"

    }

    this.infoButton.textContent = "Más info";

    this.card.appendChild(this.normalCardContent);
    this.card.appendChild(this.cardFilter);
  }
  showReverseCard() {
    this.removeCurrentCard();
    const baseImageUrl = "https://image.tmdb.org/t/p/original";
    this.card.style.backgroundImage = `url(${baseImageUrl + PELICULAS[this.currentMovieIndex].backdropPath
      })`;
    this.poster.src =
      baseImageUrl + PELICULAS[this.currentMovieIndex].posterPath;

    const year = PELICULAS[this.currentMovieIndex].releaseDate.split("-")[0];
    this.reverseMovieTitle.textContent = `${PELICULAS[this.currentMovieIndex].title
      } (${year})`;

    this.sinopsis.textContent = PELICULAS[this.currentMovieIndex].overview;

    const currentMovieId = PELICULAS[this.currentMovieIndex].id;
    if (movieIsInList(currentMovieId)) {

      this.favReverseButtonIcon.src = "/assets/estrella-activa.png"
      this.favReverseText.innerText = "Quitar de favoritos"


    } else {
      this.favReverseButtonIcon.src = "/assets/estrella.png"
      this.favReverseText.innerText = "Añadir a favoritos"

    }
    this.playButton.textContent = "Ver trailer";
    if (PELICULAS[this.currentMovieIndex].trailer.key == "null") {
      this.playButton.textContent = "Trailer no disponible"
    }
    this.backButton.textContent = "Volver";

    this.card.appendChild(this.reverseCardContent);
  }
  removeCurrentCard() {
    this.card.innerHTML = "";
  }
  async searchMovies(reset = false) {
    if (reset) {
      this.currentPage = 1;
      this.currentMovieIndex = 0;
    }

    const params = {
      page: this.currentPage,
    };
    // Aplicar las preferencias del usuario
    Object.assign(params, PREFERENCES);
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
      await newMovie.getDetails();
      discoveredMovies.push(newMovie);
    }
    console.log(discoveredMovies);
    changeDiscoverMovies(discoveredMovies, reset);
  }
   showTrailer() {
    if (PELICULAS[this.currentMovieIndex].trailer.key == "null") {
      return
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
    this.iframe.src = baseTrailerUrl + PELICULAS[this.currentMovieIndex].trailer.key;

    this.modalOverlay.appendChild(this.modalContent);
    this.modalContent.appendChild(this.iframe);
    this.modalContent.appendChild(this.closeButton);

    this.parent.appendChild(this.modalOverlay);
  }

  closeModal() {
    this.modalOverlay.remove();
  }
  toggleFavorite() {
    const currentMovieId = PELICULAS[this.currentMovieIndex].id;
    if (movieIsInList(currentMovieId)) {

      removeMovie(currentMovieId)

      this.favNormalButtonIcon.src = "/assets/estrella.png"
      this.favReverseButtonIcon.src = "/assets/estrella.png" //TODO al volver de la lista de favoritos sale sin marcar

      this.favText.innerText = "Añadir a favoritos"
      this.favReverseText.innerText = "Añadir a favoritos"

    } else {
      addNewMovie(PELICULAS[this.currentMovieIndex]);
      this.favNormalButtonIcon.src = "/assets/estrella-activa.png"
      this.favReverseButtonIcon.src = "/assets/estrella-activa.png"

      this.favText.innerText = "Quitar de favoritos"
      this.favReverseText.innerText = "Quitar de favoritos"
    }
  }
}
export default MainMovieCard;







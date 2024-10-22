class MainMovieCard {
  constructor(film, parentId) {
    this.film = film;
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.currentMovieIndex = -1
    this.currentPage = 1
    this.createMainCard();
  }


  createMainCard() {

    this.cardContainer = document.createElement("section")
    this.cardContainer.id = "card-container"

    this.parent.appendChild(this.cardContainer)

    this.card = document.createElement("div")
    this.card.id = "card"

    this.otherMovieButton = document.createElement("button")
    this.otherMovieButton.classList.add("other-movie-button")
    this.otherMovieButton.addEventListener("click", () => showNextMovie())

    //NormalCard
    this.movieTitle = document.createElement("h2")
    this.movieTitle.classList.add("movie-title")

    const cardRight = document.createElement("div")
    cardRight.id = "card-right"

    const movieData = document.createElement("div")
    movieData.id = "movie-data"

    const movieDataList = document.createElement("ul")
    movieDataList.id = "movie-data-list"

    this.movieDataYear = document.createElement("li")
    this.movieDataYear.id = "movie-data-year"
    this.movieDataGenre = document.createElement("li")
    this.movieDataGenre.id = "movie-data-genre"
    this.movieDataDirector = document.createElement("li")
    this.movieDataDirector.id = "movie-data-director"

    const watchNow = document.createElement("h3")
    watchNow.id = "watch-now"

    this.streamingPlatforms = document.createElement("div")
    this.streamingPlatforms.id = "streaming-platforms"

    const frontLinks = document.createElement("div")
    frontLinks.id = "front-links"
    frontLinks.classList.add("links")
    this.favButton = document.createElement("button")
    this.favButton.classList.add("fav-button")
    this.favButton.addEventListener("click", () => this.toggleFavorite())
    this.infoButton = document.createElement("button")
    this.infoButton.classList.add("info-button")
    this.infoButton.addEventListener("click", () => this.showReverseCard())

    this.cardContainer.appendChild(this.card)
    this.cardContainer.appendChild(this.otherMovieButton)
    this.card.appendChild(this.movieTitle)
    this.card.appendChild(this.cardRight)
    cardRight.appendChild(movieData)
    movieData.appendChild(movieDataList)
    movieDataList.appendChild(this.movieDataYear)
    movieDataList.appendChild(this.movieDataGenre)
    movieDataList.appendChild(this.movieDataDirector)
    cardRight.appendChild(watchNow)
    cardRight.appendChild(this.streamingPlatforms)
    cardRight.appendChild(frontLinks)
    frontLinks.appendChild(this.favButton)
    frontLinks.appendChild(this.infoButton)

    //Reverse card
    this.poster = document.createElement("div")
    this.poster.classList.add("poster")
    const reverseCardRight = document.createElement("div")
    reverseCardRight.id = "reverse-card-right"
    this.reverseMovieTitle = document.createElement("div")
    this.reverseMovieTitle.classList.add("reverse-movie-title")
    this.sinopsis = document.createElement("p")
    this.sinopsis.id = "sinopsis"
    const reverseLinks = document.createElement("div")
    reverseLinks.id = "reverse-links"
    reverseLinks.classList.add("links")
    this.favButton = document.createElement("button")
    this.favButton.classList.add("fav-button")
    this.favButton.addEventListener("click", () => this.toggleFavorite())//TODO falta hacer la función
    this.playButton = document.createElement("button")
    this.playButton.classList.add("play-button")
    this.playButton.addEventListener("click", () => this.showTrailer())
    this.backButton = document.createElement("button")
    this.backButton.classList.add("back-button")
    this.backButton.addEventListener("click", () => this.showNormalCard())


    reverseCardRight.appendChild(this.reverseMovieTitle)
    reverseLinks.appendChild(this.backButton)
    reverseCardRight.appendChild(this.sinopsis)
    reverseCardRight.appendChild(reverseLinks)
    reverseLinks.appendChild(this.favButton)
    reverseLinks.appendChild(this.playButton)

    this.otherMovieButton.textContent = "Otra película"
    //Show card first time
    this.showNormalCard()
  }

  getGenreById(id) {
    return GENEROS.find((genero) => genero.id == id).name; //TODO: Retocar esta función
  }

  async showNextMovie() {
    if (PELICULAS.length <= 0) {
      await searchMovies()
    }
    ++this.currentMovieIndex
    if (this.currentMovieIndex >= PELICULAS.length) {
      this.currentMovieIndex = 0
      ++this.currentPage
      await searchMovies()
    }
    this.showNormalCard()
  }


  showNormalCard() {
    this.removeCurrentCard()
    
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280"
    this.card.style.backgroundImage = `url(${baseImageUrl + this.film.backdrop_path})`;
    
    this.movieTitle.textContent = this.film.title
    
    this.movieDataYear.innerText = "Año: " + this.film.release_date.split('-')[0];
    this.movieDataGenre.innerText = "Género: Prueba"
    this.movieDataGenre.innerText = "Género: " + this.film.genre_ids.map(id => getGenreById(id)).join(", ")
    this.movieDataDirector.innerText = "Director: Prueba "; //TODO: Falta sacar info de API
    
    this.watchNow.innerText = "VER AHORA"
    this.streamingPlatforms.innerText = "PRUEBA STREAMING" //TODO. falta sacar info de API
    
    this.favButton.textContent = "Añadir a favoritos"
    this.infoButton.textContent = "Más info"
    
  }
  showReverseCard() {
    this.removeCurrentCard()
    const baseImageUrl = "https://image.tmdb.org/t/p/w1280"
    this.card.style.backgroundImage = `url(${baseImageUrl + this.film.backdrop_path})`;
    poster.src = baseImageUrl + this.film.poster_path
    
    const year = this.film.release_date.split('-')[0];
    this.reverseMovieTitle.textContent = `${this.film.title} (${year})`;
    
    this.sinopsis.textContent = this.film.overview
    this.favButton.textContent = "Añadir a favoritos"
    this.playButton.textContent = "Ver trailer"
    this.backButton.textContent = "Volver"
    
  }
  removeCurrentCard() {
    this.card.innerHTML = ""
  }
  
  showTrailer() {

    this.modalOverlay = document.createElement("div");
    this.modalOverlay.classList.add("modal-overlay");
    this.modalOverlay.addEventListener("click", (e) => {
      if (e.target === this.modalOverlay) {
        closeModal();
      }
    })

    this.modalContent = document.createElement("div");
    this.modalContent.classList.add("modal-content");

    this.closeButton = document.createElement("button");
    this.closeButton.classList.add("close-button");
    this.closeButton.innerHTML = "×";
    this.closeButton.setAttribute("aria-label", "Cerrar trailer");
    this.closeButton.addEventListener("click", closeModal());

    this.iframe = document.createElement("iframe");
    this.iframe.id = "trailer-iframe";
    const baseTrailerUrl = "https://www.youtube.com/embed/"
    this.iframe.src = baseTrailerUrl + this.film.key

    this.modalOverlay.appendChild(modalContent);
    this.modalContent.appendChild(iframe);
    this.modalContent.appendChild(closeButton);

    this.parent.appendChild(modalOverlay);
  }
  closeModal() {
    this.modalOverlay.remove()
  };
}




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


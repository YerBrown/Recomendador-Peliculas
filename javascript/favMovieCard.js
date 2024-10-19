class FavMovieCard {
  constructor(film) {
    this.film = film;
    this.createHTML();
  }
  createHTML() {
    this.cardParent = document.createElement("div");
    this.cardParent.classList.add("fav-movie");
    this.cardParent.addEventListener("click", function () {
      openMoreInfoPopup(this.film.id);
    });
    this.poster = document.createElement("img");
    this.poster.src = mediaLink + film.poster_path;
    this.poster.alt = "poster de " + film.title;

    this.cardParent.appendChild(poster);
    this.element = cardParent;
  }
}

export default FavMovieCard;

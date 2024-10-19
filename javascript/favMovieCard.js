import MoreInfopPopup from './moreInfoPopup.js';
class FavMovieCard {
  static mediaLink = "https://www.themoviedb.org/t/p/w1280/";
  constructor(film, parentId) {
    this.film = film;
    this.parentId = parentId;
    this.parent = document.getElementById(parentId);
    this.createCard();
  }
  createCard() {
    this.card = document.createElement("div");
    this.card.classList.add("fav-movie");
    this.card.addEventListener("click", ()=>this.openMoreInfo());
    this.poster = document.createElement("img");
    this.poster.src = FavMovieCard.mediaLink + this.film.poster_path;
    this.poster.alt = "poster de " + this.film.title;

    this.card.appendChild(this.poster);
    this.parent.appendChild(this.card);
  }
  openMoreInfo(){
    console.log(this.film.title + ' pulsado');
    const moreInfoPopup = new MoreInfopPopup(this.film, 'parent');
  }
}

export default FavMovieCard;

import MoreInfopPopup from './moreInfoPopup.js';
class FavMovieCard {
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
    this.poster.src = window.mediaLink + this.film.posterPath;
    this.poster.alt = "poster de " + this.film.title;

    this.card.appendChild(this.poster);
    this.parent.appendChild(this.card);
  }
  openMoreInfo(){
    console.log(this.film.title + ' pulsado');
    const moreInfoPopup = new MoreInfopPopup(this.film, 'my-favs');
  }
}

export default FavMovieCard;

import MovieCard from "./favMovieCard.js";

window.mediaLink = "https://www.themoviedb.org/t/p/w1280/";
const mainParent = document.getElementsByTagName("main")[0];
const PELICULAS = [
  {
    adult: false,
    backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    genre_ids: [27, 18, 878],
    id: 933260,
    original_language: "en",
    original_title: "The Substance",
    overview:
      '"Tú, pero mejor en todos los sentidos". Esa es la promesa de La Sustancia, un producto revolucionario basado en la división celular, que crea un alter ego más joven, más bello, más perfecto.',
    popularity: 4964.05,
    poster_path: "/4cJyrYA7I29QabrQ0S89N1iWUV2.jpg",
    release_date: "2024-09-07",
    title: "La Sustancia",
    video: false,
    vote_average: 7.4,
    vote_count: 510,
    key: "2M03oTyJdHc",
  },
  {
    adult: false,
    backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    genre_ids: [28, 35, 878],
    id: 533535,
    original_language: "en",
    original_title: "Deadpool & Wolverine",
    overview:
      "Un apático Wade Wilson se afana en la vida civil tras dejar atrás sus días como Deadpool, un mercenario moralmente flexible. Pero cuando su mundo natal se enfrenta a una amenaza existencial, Wade debe volver a vestirse a regañadientes con un Lobezno aún más reacio a ayudar.",
    popularity: 2844.462,
    poster_path: "/9TFSqghEHrlBMRR63yTx80Orxva.jpg",
    release_date: "2024-07-24",
    title: "Deadpool y Lobezno",
    video: false,
    vote_average: 7.713,
    vote_count: 4476,
    key: "tTM5weeCFvQ",
  },
  {
    adult: false,
    backdrop_path: "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
    genre_ids: [35, 14, 27],
    id: 917496,
    original_language: "en",
    original_title: "Beetlejuice Beetlejuice",
    overview:
      "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a Winter River. La vida de Lydia, todavía atormentada por Bitelchús, da un vuelco cuando su rebelde hija adolescente, Astrid, descubre la misteriosa maqueta de la ciudad en el desván y el portal al Más Allá se abre accidentalmente. Con los problemas que se avecinan en ambos reinos, es sólo cuestión de tiempo que alguien diga el nombre de Bitelchús tres veces y el travieso demonio regrese para desatar su propio caos.",
    popularity: 1986.658,
    poster_path: "/kWJw7dCWHcfMLr0irTHAPIKrJ4I.jpg",
    release_date: "2024-09-04",
    title: "Bitelchús Bitelchús",
    video: false,
    vote_average: 7.204,
    vote_count: 1289,
    key: "bffGA7Vh0uE",
  },
  {
    adult: false,
    backdrop_path: "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg",
    genre_ids: [878, 53, 18, 27],
    id: 1125510,
    original_language: "es",
    original_title: "El hoyo 2",
    overview:
      "Un misterioso líder ha impuesto su ley en un brutal sistema de celdas verticales, pero la llegada de una residente desafía su dudoso método de distribución de comida.",
    popularity: 1948.952,
    poster_path: "/8cnfdskwEmS1HZhenEVYt9P0IYa.jpg",
    release_date: "2024-09-27",
    title: "El hoyo 2",
    video: false,
    vote_average: 5.7,
    vote_count: 545,
    key: "tginyAWKUN8",
  },
  {
    adult: false,
    backdrop_path: "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
    genre_ids: [16, 878, 10751],
    id: 1184918,
    original_language: "en",
    original_title: "The Wild Robot",
    overview:
      "Una robot (la unidad ROZZUM 7134 o «Roz») ha naufragado en una isla deshabitada y deberá aprender a adaptarse al duro entorno, forjando poco a poco relaciones con la fauna local y convirtiéndose en madre adoptiva de una cría de ganso huérfana.",
    popularity: 2282.501,
    poster_path: "/sDoXpaKZmrzCSJH63zZvQQ9A7VK.jpg",
    release_date: "2024-09-12",
    title: "Robot salvaje",
    video: false,
    vote_average: 8.562,
    vote_count: 390,
    key: "TTu_rks8mUc",
  },
  {
    adult: false,
    backdrop_path: "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
    genre_ids: [27, 53],
    id: 1034541,
    original_language: "en",
    original_title: "Terrifier 3",
    overview: 'Secuela de "Terrifier 2", ambientada en el periodo navideño.',
    popularity: 1576.845,
    poster_path: "/5eECVdOWwbsUARVxLA7ENyBYx3H.jpg",
    release_date: "2024-10-09",
    title: "Terrifier 3",
    video: false,
    vote_average: 7,
    vote_count: 57,
    key: "D6mC2rXALOE",
  },
  {
    adult: false,
    backdrop_path: "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
    genre_ids: [16, 10751, 35, 28],
    id: 519182,
    original_language: "en",
    original_title: "Despicable Me 4",
    overview:
      "Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta ocasión a su nueva némesis Maxime Le Mal y su sofisticada y malévola novia Valentina, lo que obligará a la familia a tener que darse a la fuga. Cuarta entrega de 'Gru, mi villano favorito'.",
    popularity: 1339.874,
    poster_path: "/kqph8UWNOoYgTjYnkAx8dRlLLCq.jpg",
    release_date: "2024-06-20",
    title: "Gru 4. Mi villano favorito",
    video: false,
    vote_average: 7.133,
    vote_count: 1977,
    key: "ulPKDcGwxUg",
  },
  {
    adult: false,
    backdrop_path: "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
    genre_ids: [14, 27, 28],
    id: 1087822,
    original_language: "en",
    original_title: "Hellboy: The Crooked Man",
    overview:
      "Sigue a Hellboy y a un agente novato de BPRD mientras quedan varados en la zona rural de los Apalaches de la década de 1950. Descubren una pequeña comunidad embrujada por brujas, dirigida por el Hombre Torcido.",
    popularity: 1395.785,
    poster_path: "/ExFaxmvlGxBmUBVKv9ey94fNyy.jpg",
    release_date: "2024-08-29",
    title: "Hellboy: The Crooked Man",
    video: false,
    vote_average: 4.8,
    vote_count: 112,
    key: "nAfFq76Geb4",
  },
];
const GENEROS = [
  {
    id: 28,
    name: "Acción",
  },
  {
    id: 12,
    name: "Aventura",
  },
  {
    id: 16,
    name: "Animación",
  },
  {
    id: 35,
    name: "Comedia",
  },
  {
    id: 80,
    name: "Crimen",
  },
  {
    id: 99,
    name: "Documental",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familia",
  },
  {
    id: 14,
    name: "Fantasía",
  },
  {
    id: 36,
    name: "Historia",
  },
  {
    id: 27,
    name: "Terror",
  },
  {
    id: 10402,
    name: "Música",
  },
  {
    id: 9648,
    name: "Misterio",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Ciencia ficción",
  },
  {
    id: 10770,
    name: "Película de TV",
  },
  {
    id: 53,
    name: "Suspense",
  },
  {
    id: 10752,
    name: "Bélica",
  },
  {
    id: 37,
    name: "Western",
  },
];

export function getGenreById(id) {
  return GENEROS.find((genero) => genero.id == id).name;
}
export function getFilmById(id) {
  return PELICULAS.find((pelicula) => pelicula.id == id);
}
function renderAllFilms(films) {
  for (const film of films) {
    const movieCardNode = new MovieCard(film, "fav-grid").card;
  }
}

let currentMovieId = 0;
//Función para mostrar carta de anverso
function showCard(movie) {
  
  const currentMovie = movie
  const normalCard = document.getElementById("card")
  const reverseCard = document.getElementById("reverse-card")

  if (normalCard != null && normalCard != undefined) {
    normalCard.remove()
  }
  if (reverseCard != null && reverseCard != undefined) {
    reverseCard.remove()
  }


  //Crear estructura
  const cardContainer = document.createElement("section")
  const card = document.createElement("div")
  const otherMovieButton = document.createElement("button") //CAMBIAR CSS
  const movieTitle = document.createElement("h2")
  const cardRight = document.createElement("div")
  const movieData = document.createElement("div")
  const movieDataList = document.createElement("ul")
  const movieDataYear = document.createElement("li")
  const movieDataGenre = document.createElement("li")
  const movieDataDirector = document.createElement("li")
  const watchNow = document.createElement("h3")
  const streamingPlatforms = document.createElement("div")

  const frontLinks = document.createElement("div")
  const favButton = document.createElement("button")
  const infoButton = document.createElement("button")

  //Añadir ID,class
  cardContainer.id = "card-container" //AÑADIR CSS
  card.id = "card"
  movieTitle.classList.add("movie-title")
  cardRight.id = "card-right"
  movieData.id = "movie-data"
  movieDataList.id = "movie-data-list" //AÑADIR CSS
  movieDataYear.id = "movie-data-year" //AÑADIR CSS
  movieDataGenre.id = "movie-data-genre" //AÑADIR CSS
  movieDataDirector.id = "movie-data-director" //AÑADIR CSS
  watchNow.id = "watch-now"
  streamingPlatforms.id = "streaming-platforms"
  frontLinks.id = "front-links"
  frontLinks.classList.add("links")
  favButton.classList.add("fav-button")
  otherMovieButton.classList.add("other-movie-button") //cCAMBIAR CSS
  infoButton.classList.add("info-button")

  //Ordenar la estructura
  cardContainer.appendChild(card)
  cardContainer.appendChild(otherMovieButton)
  card.appendChild(movieTitle)
  card.appendChild(cardRight)
  cardRight.appendChild(movieData)
  movieData.appendChild(movieDataList)
  movieDataList.appendChild(movieDataYear)
  movieDataList.appendChild(movieDataGenre)
  movieDataList.appendChild(movieDataDirector)
  cardRight.appendChild(watchNow)
  cardRight.appendChild(streamingPlatforms)
  cardRight.appendChild(frontLinks)
  frontLinks.appendChild(favButton)
  frontLinks.appendChild(infoButton)

  document.body.appendChild(cardContainer);

  //Asignar contenido
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280"
  card.style.backgroundImage = `url(${baseImageUrl + movie.backdrop_path})`;

  movieTitle.textContent = movie.title
  movieDataYear.innerText = "Año: " + movie.release_date.split('-')[0];
  movieDataGenre.innerText = "Género: Prueba"
  movieDataGenre.innerText = "Género: " + movie.genre_ids.map(id => getGenreById(id)).join(", ")
  movieDataDirector.innerText = "Director: Prueba "; //TODO: Falta poder sacar el director
  watchNow.innerText = "VER AHORA"
  streamingPlatforms.innerText = "PRUEBA STREAMING"
  favButton.textContent = "Añadir a favoritos"
  otherMovieButton.textContent = "Otra película"
  infoButton.textContent = "Más info"

  //Eventlistener para los tres botones
  favButton.addEventListener("click", () => "")//TODO esto debería añadir la película con todos sus datos a la lista de favoritos y cambiar el icono estrella del css por uno relleno
  otherMovieButton.addEventListener("click", () => showNextMovie())
  infoButton.addEventListener("click", () => showReverseCard(currentMovie))

}
showCard(PELICULAS[0])

//Función para girar la carta al pulsar Más info
function showReverseCard(movie) {
  const currentMovie = movie
  const card = document.getElementById("card")
  if (card != null && card != undefined) {
    card.remove()
  }

  //Crear estructura
  const cardContainer = document.createElement("section")
  const reverseCard = document.createElement("div")
  const poster = document.createElement("div")
  const reverseCardRight = document.createElement("div")
  const reverseMovieTitle = document.createElement("div")
  const sinopsis = document.createElement("p")
  const reverseLinks = document.createElement("div")
  const favButton = document.createElement("button")
  const playButton = document.createElement("button")
  const backButton = document.createElement("button")
  const otherMovieButton = document.createElement("button")
  //TODO Falta añadir tarjeta de "dónde ver"

  //Añadir ID, class
  cardContainer.id = "card-container"
  reverseCard.id = "reverse-card"
  poster.classList.add("poster")
  reverseCardRight.id = "reverse-card-right"
  reverseMovieTitle.classList.add("reverse-movie-title")
  sinopsis.id = "sinopsis"
  reverseLinks.id = "reverse-links"
  reverseLinks.classList.add("links")
  favButton.classList.add("fav-button")
  playButton.classList.add("play-button")
  backButton.classList.add("back-button")
  otherMovieButton.classList.add("other-movie-button")
  //TODO Falta asignar ID del botón o tarjeta de "dónde ver"

  //Ordenar la estructura
  cardContainer.appendChild(reverseCard)
  cardContainer.appendChild(otherMovieButton)
  reverseCard.appendChild(poster)
  reverseCard.appendChild(reverseCardRight)
  reverseCardRight.appendChild(reverseMovieTitle)
  reverseCardRight.appendChild(sinopsis)
  reverseCardRight.appendChild(reverseLinks)
  reverseLinks.appendChild(favButton)
  reverseLinks.appendChild(playButton)
  reverseLinks.appendChild(backButton)
  //TODO Falta asignar hijo del botón o tarjeta de "dónde ver"

  document.body.appendChild(cardContainer);

  //Asignar contenido
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280"
  reverseCard.style.backgroundImage = `url(${baseImageUrl + movie.backdrop_path})`;
  poster.src = baseImageUrl + movie.poster_path

  const year = movie.release_date.split('-')[0];
  reverseMovieTitle.textContent = `${movie.title} (${year})`;

  sinopsis.textContent = movie.overview
  favButton.textContent = "Añadir a favoritos"
  playButton.textContent = "Ver trailer"
  backButton.textContent = "Volver"
  otherMovieButton.textContent = "Otra película"

  /* favButton.addEventListener("click") *///TODO esto debería añadir la película con todos sus datos a la lista de favoritos y cambiar el icono estrella del css por uno relleno
  playButton.addEventListener("click",()=> showTrailer(currentMovie)) // TODO: Aquí tiene que saltar el iframe para que se reproduzca el trailer
  backButton.addEventListener("click", () => showCard(currentMovie))
  otherMovieButton.addEventListener("click", () => showNextMovie())


}

//Función para mostrar otra película del array que sacamos del form
function showNextMovie() {
  setTimeout(() => {
    ++currentMovieId //TODO: La primera vez debe de fallar porque empieza  en -1. LO he puesto en 0 pero no sé si petará otra cosa
    if (currentMovieId >= PELICULAS.length) {
      currentMovieId = 0
    }
    showCard(PELICULAS[currentMovieId])
  }, 1000)
};
//Tomar el género en texto a partir de su ID
function getGenreById(id) {
  return GENEROS.find((genero) => genero.id == id).name;
}

function showTrailer(movie) {


  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "×";
  closeButton.setAttribute("aria-label", "Cerrar trailer");

  const iframe = document.createElement("iframe");
  iframe.id = "trailer-iframe";
  const baseTrailerUrl = "https://www.youtube.com/embed/"
  iframe.src = baseTrailerUrl + movie.key



  modalOverlay.appendChild(modalContent);
  modalContent.appendChild(iframe);
  modalContent.appendChild(closeButton);
  document.body.appendChild(modalOverlay);

  const closeModal = () => {
    modalOverlay.remove();
  };
  closeButton.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  const handleEscape = (e) => {
    if (e.key === "Escape") {
      closeModal();

      document.removeEventListener("keydown", handleEscape);
    }
  };
  document.addEventListener("keydown", handleEscape);


}
function showMyList() {
  const myList = document.createElement("section");
  myList.id = "my-favs";

  const title = document.createElement("h1");
  title.innerText = "Mi Lista:";

  const grid = document.createElement("div");
  grid.id = "fav-grid";

  myList.append(title, grid);
  mainParent.appendChild(myList);
  renderAllFilms(PELICULAS);
}
function openMainPage() {
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    mainParent.innerHTML = "";
  }
  const cardHTML = document.getElementById("card");
  if (cardHTML != null && cardHTML != undefined) {
    return;
  }
  const min = 0;
  const max = Math.floor(PELICULAS.length - 1); // Redondea hacia abajo el máximo
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  showCard(PELICULAS[randomNumber]);

  if (!mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.add("align-justify-center");
  }
}

function openMyList() {
  const cardHTML = document.getElementById("card");
  const cardReverseHTML = document.getElementById("reverse-card");
  if (
    (cardHTML != null && cardHTML != undefined) ||
    (cardReverseHTML != null && cardReverseHTML != undefined)
  ) {
    mainParent.innerHTML = "";
  }
  const myListHTML = document.getElementById("my-favs");
  if (myListHTML != null && myListHTML != undefined) {
    return;
  }

  showMyList();

  if (mainParent.classList.contains("align-justify-center")) {
    mainParent.classList.remove("align-justify-center");
  }
}

function asignNavLogic() {
  const recommend = document.getElementById("nav-recommend");
  const myList = document.getElementById("nav-my-favs");
  const game = document.getElementById("nav-game");

  recommend.addEventListener("click", () => openMainPage());
  myList.addEventListener("click", () => openMyList());
}

asignNavLogic();
openMainPage();

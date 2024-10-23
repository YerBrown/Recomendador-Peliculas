export let PELICULAS = [];
export let GENEROS = [
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
export let WHATCH_PROVIDERS = [
  {
    provider_id: 337,
    provider_name: "Disney Plus",
    logo_path: "/97yvRBw1GzX7fXprcF80er19ot.jpg",
  },
  {
    provider_id: 350,
    provider_name: "Apple TV Plus",
    logo_path: "/2E03IAZsX4ZaUqM7tXlctEPMGWS.jpg",
  },
  {
    provider_id: 119,
    provider_name: "Amazon Prime Video",
    logo_path: "/dQeAar5H991VYporEjUspolDarG.jpg",
  },
  {
    provider_id: 35,
    provider_name: "Rakuten TV",
    logo_path: "/bZvc9dXrXNly7cA0V4D9pR8yJwm.jpg",
  },
  {
    provider_id: 149,
    provider_name: "Movistar Plus+",
    logo_path: "/f6TRLB3H4jDpFEZ0z2KWSSvu1SB.jpg",
  },
  {
    provider_id: 1773,
    provider_name: "SkyShowtime",
    logo_path: "/gQbqEYd0C9uprYxEUqTM589qn8g.jpg",
  },
  {
    provider_id: 1899,
    provider_name: "Max",
    logo_path: "/fksCUZ9QDWZMUwL2LgMtLckROUN.jpg",
  },
  {
    provider_id: 8,
    provider_name: "Netflix",
    logo_path: "/pbpMk2JmcoNnQwx5JGpXngfoWtp.jpg",
  },
  {
    provider_id: 283,
    provider_name: "Crunchyroll",
    logo_path: "/mXeC4TrcgdU6ltE9bCBCEORwSQR.jpg",
  },
  {
    provider_id: 63,
    provider_name: "Filmin",
    logo_path: "/kO2SWXvDCHAquaUuTJBuZkTBAuU.jpg",
  },
  {
    provider_id: 62,
    provider_name: "Atres Player",
    logo_path: "/oN6g8QorcoYo3mx4BulU22ghKq4.jpg",
  },
  {
    provider_id: 541,
    provider_name: "rtve",
    logo_path: "/3QQKYFUDt13Q2Zm6JM2cOjlbd27.jpg",
  },
  {
    provider_id: 300,
    provider_name: "Pluto TV",
    logo_path: "/dB8G41Q6tSL5NBisrIeqByfepBc.jpg",
  },
  {
    provider_id: 393,
    provider_name: "FlixOlé",
    logo_path: "/ozMgkAAoi6aDI5ce8KKA2k8TGvB.jpg",
  },
];
export let PREFERENCES = {};
export function getFilmById(id) {
  return PELICULAS.find((pelicula) => pelicula.id == id);
}
export function getGenreById(id) {
  return GENEROS.find((genero) => genero.id == id).name;
}

export function getWhatchProviderById(id) {
  return WHATCH_PROVIDERS.find((wProvider) => wProvider.provider_id == id);
}

export function changeDiscoverMovies(moviesArray) {
  PELICULAS.splice(0, PELICULAS.length - 2);
  PELICULAS = PELICULAS.concat(moviesArray);
}

export function getLocalStoragePreferences() {
  return localStorage.getItem("preferences");
}

export function updatePreferences(preferences) {
  PREFERENCES = preferences;
  localStorage.setItem("preferences", PREFERENCES);
}

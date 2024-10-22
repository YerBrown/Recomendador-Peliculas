import { apiKey, accesToken } from "./apikey.js";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + accesToken,
  },
};
const BASE_URL = "https://api.themoviedb.org/";

async function fetchData(pathName, params = {}) {
  try {
    const url = new URL(BASE_URL);
    url.pathname = pathName;

    for (const key of Object.keys(params)) {
      url.searchParams.append(key, params[key]);
    }

    console.log(url.toString());

    const response = await fetch(url.toString(), OPTIONS);
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
const filterAtributes = {
  include_adult: false,
  include_video: false,
  language: "es",
  page: 1,
  sort_by: "popularity.desc",
};

export const filtersExample = {
  "primary_release_date.gte": "", // Desde esta fecha hacia arriba (2000-01-01)
  "primary_release_date.lte": "", // Desde esta fecha hacia abajo (2000-01-01)
  sort_by: "", // Orden del array (popularity.asc/desc, primary_release_date.asc/desc, vote_average.asc/desc)
  "vote_average.gte": "", // Desde esta nota hacia arriba (float)
  "vote_average.lte": "", // Desde esta nota hacia arriba (float)
  with_genres: "", // Que contenga los genereos, para filtrar y que contenga todos los genereos seria separandolos con ',' y si quieres sacar los que coincidan con alguno de los generos seria con '||'
  "with_runtime.gte": "", // Desde esta duracion hacia arriba
  "with_runtime.lte": "", // Desde esta duracion hacia abajo
  watch_region: "ES", // Obtener las que se puedan ver en españa o en otras reigiones
  with_watch_providers: "", // Obtener las que se puedan ver en los proveedores de peliculas que les pasemos por su id
};

export async function getDiscoverMoviesByFilter(newParams = {}) {
  const params = {
    include_adult: false,
    include_video: false,
    language: "es",
    page: 1,
    sort_by: "popularity.desc",
  };
  Object.assign(params, newParams);
  const data = await fetchData("/3/discover/movie", params);
  return data;
}

export async function getGenres() {
  const params = {
    language: "es",
  };
  const data = await fetchData("/3/genre/movie/list", params);
  return data;
}
export async function getWatchProvidersByRegion(language, region) {
  const params = {
    language: language,
    watch_region: region,
  };
  const data = await fetchData("/3/watch/providers/movie", params);
  return data;
}
export async function getDetailsOfFilmId(id) {
  const params = {
    append_to_response: "videos,watch/providers",
    language: "es-ES",
  };
  const data = await fetchData("/3/movie/" + id, params);
  console.log(data);
  return data;
}
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTYxZTkwOTY5ZDg0NGM1MDgyZTE5ZTI0ZGJmMjc0OCIsIm5iZiI6MTcyODkzODc4NC41Mzc1NjMsInN1YiI6IjY3MGQ3ZmQ2OWYzNTMxZTZiMjZjMWMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E4vc6_CEn-U8wiLM5uULTuEyE5_ICPMiCBNm_mPO2Iw",
  },
};
const BASE_URL = "https://api.themoviedb.org/";

async function fetchData(pathName, params = {}) {
  try {
    const url = new URL(BASE_URL);
    url.pathname = pathName;
    for (const key of Object.keys(params)) {
      url.searchParams.append(key,params[key]);
    }
    console.log(url.toString());
    const response = await fetch(url.toString(), OPTIONS);
    const data = await response.json();
    console.log(data);
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

export async function getDiscoverMoviesByFilter(params = {}) {
    params = {
        include_adult: false,
        include_video: false,
        language: "es",
        page: 1,
        sort_by: "popularity.desc",
      };
    const data = await fetchData("/3/discover/movie", params);
    console.log(data);
}

export async function getGenres(){
    const params = {
        lenguage: 'es'
    }
    const data = await fetchData('/3/genre/movie/list', params);
    console.log(data);
}
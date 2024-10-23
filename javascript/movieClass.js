import { getDetailsOfFilmId, getTrailerAndWatchProviders } from "./apiIntegration.js";
class Movie {
    constructor(id, title, genreIds,releaseDate, overview, posterPath, backdropPath, ){
        this.id= id;
        this.title = title;
        this.genreIds = genreIds;
        this.releaseDate = releaseDate;
        this.overview = overview;
        this.posterPath = posterPath;
        this.backdropPath = backdropPath;
        this.getDetails();
    }
    async getDetails(){
        const movieDetails = await getTrailerAndWatchProviders(this.id);
        this.director = movieDetails.director;
        this.cast = movieDetails.cast;
        this.trailer = movieDetails.trailer;
        this.watchProviders = movieDetails.watchProviders;
        console.log(this)
    }
}
export default Movie;
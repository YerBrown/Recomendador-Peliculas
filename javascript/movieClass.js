
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
    getDetails(){
        
    }
}
export default Movie;
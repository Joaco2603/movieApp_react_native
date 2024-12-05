import HttpAdapter from "@/app/config/adapters/http/http.adapter";
import { FullMovie } from "../../entities/movie.entity";
import MovieMapper from "@/app/infrastructure/mappers/movie.mapper";
import { MovieDBMovie } from "@/app/infrastructure/interfaces/movie-db.responses";



export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {

        const movieDetails: MovieDBMovie = await fetcher.get<MovieDBMovie>(`${movieId}`);
        const fullMovie = MovieMapper.fromMovieDbFullInformation(movieDetails);

        return fullMovie;
    } catch (error) {
        throw new Error(`Error fetching movies`);
    }
}


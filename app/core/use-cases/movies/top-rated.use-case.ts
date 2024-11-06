import { HttpAdapter } from "@/app/config/adapters/http/http.adapter";
import { TopRatedResponse } from "@/app/infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated');

        return topRated.results.map(MovieMapper.fromMovieDbResultToEntity)
    } catch (error) {
        throw new Error('Error fetching movies');
    }
}
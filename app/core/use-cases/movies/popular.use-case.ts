import { HttpAdapter } from "@/app/config/adapters/http/http.adapter";
import { PopularResponse } from "@/app/infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";
import { MovieMapper } from "@/app/infrastructure/mappers/movie.mapper";


export const moviesPopularUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<PopularResponse>('/popular');

        return popular.results.map(MovieMapper.fromMovieDbResultToEntity)
    } catch (error) {
        throw new Error('Error fetching movies');
    }
}
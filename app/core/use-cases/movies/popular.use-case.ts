import HttpAdapter from "@/app/config/adapters/http/http.adapter";
import { PopularResponse } from "@/app/infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";
import MovieMapper from "@/app/infrastructure/mappers/movie.mapper";

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<PopularResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        }
        );

        return popular.results.map(MovieMapper.fromMovieDbResultToEntity)
    } catch (error) {
        throw new Error('Error fetching movies');
    }
}
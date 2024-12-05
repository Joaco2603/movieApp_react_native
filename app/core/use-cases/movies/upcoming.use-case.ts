import HttpAdapter from "@/app/config/adapters/http/http.adapter";
import { UpcomingResponse } from "@/app/infrastructure/interfaces/movie-db.responses";
import MovieMapper from "@/app/infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');

        return upcoming.results.map(MovieMapper.fromMovieDbResultToEntity);
    } catch (error) {
        throw new Error('Error fetching movies');
    }
}
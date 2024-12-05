import HttpAdapter from "@/app/config/adapters/http/http.adapter";
import { NowPlayingResponse } from "@/app/infrastructure/interfaces/movie-db.responses";
import type { Movie } from "../../entities/movie.entity";
import MovieMapper from "@/app/infrastructure/mappers/movie.mapper";



export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map(MovieMapper.fromMovieDbResultToEntity)
    } catch (error) {
        console.log(error);
        throw new Error('Error fetching movies');
    }
}
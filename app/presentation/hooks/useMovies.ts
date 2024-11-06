import React from "react";
import type { Movie } from "@/app/core/entities/movie.entity";

import * as UseCases from '@/app/core/use-cases';
import { movieDBFetcher } from "@/app/config/adapters/movieDB.adapter";

export const useMovies = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [nowPlaying, setNowPlaying] = React.useState<Movie[]>([]);
    const [popular, setPopular] = React.useState<Movie[]>([]);
    const [topRated, setTopRated] = React.useState<Movie[]>([]);
    const [upcoming, setUpcoming] = React.useState<Movie[]>([]);


    React.useEffect(() => {
        initialLoad();
    }, [])

    const initialLoad = async () => {
        const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
            UseCases.moviesNowPlayingUseCase(movieDBFetcher),
            UseCases.moviesPopularUseCase(movieDBFetcher),
            UseCases.moviesTopRatedUseCase(movieDBFetcher),
            UseCases.moviesUpcomingUseCase(movieDBFetcher)
        ]);

        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setIsLoading(false);
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming
    };
}
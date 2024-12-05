import { THE_MOVIE_DB_KEY } from "@env";
import AxiosAdapter from "./http/axios.adapter";


const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: '4debd8ba59516b369dabd1e3e11215ec',
        api_key: THE_MOVIE_DB_KEY ?? 'no key',
        language: 'es'
    }
});

export default movieDBFetcher;
import { Movie } from "@/app/core/entities/movie.entity";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = ({ height = 440, movies }: Props) => {
  return (
    <GestureHandlerRootView style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default PosterCarousel;

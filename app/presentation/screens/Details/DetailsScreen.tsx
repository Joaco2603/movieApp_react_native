import { Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";
import { FullScreenLoaders } from "../../components/loaders/FullScreenLoaders";

interface Props extends NativeStackScreenProps<RootStackParams, "Details"> {}

const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { movie, isLoading, cast } = useMovie(movieId);

  if (isLoading) return <FullScreenLoaders />;
  if (!movie || !cast) return <Text>Error</Text>;

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie.title}
        poster={movie.poster}
        title={movie.title}
      />

      <MovieDetails movie={movie} cast={cast} />
    </ScrollView>
  );
};

export default DetailsScreen;

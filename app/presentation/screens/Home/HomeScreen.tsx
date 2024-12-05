import { View, ScrollView, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import useMovies from "../../hooks/useMovies";

import PosterCarousel from "../../components/movies/PosterCarousel";
import HorizontalCarousel from "../../components/movies/HorizontalCarousel";
import { FullScreenLoaders } from "../../components/loaders/FullScreenLoaders";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) return <FullScreenLoaders />;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: top, paddingBottom: 10 }}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />

        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

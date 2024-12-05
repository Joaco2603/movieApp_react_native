import { useEffect, useRef } from "react";
import { Movie } from "@/app/core/entities/movie.entity";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    //Cargar las siguientes peliculas
    loadNextPage && loadNextPage();
  };

  return (
    <View style={{ height: !!title ? 300 : 220 }}>
      {!!title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "300",
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={220} />
        )}
        keyExtractor={(item, index) => `${item.id.toString()}-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default HorizontalCarousel;

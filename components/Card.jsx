import { Text, ScrollView, View, Image, StyleSheet } from "react-native";

function Card({ value }) {

    const poster=(!value.poster_path)?value.backdrop_path:value.poster_path;

  return (
    <Image
      key={value.id}
      source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 150,
    margin: 10,
  },
});

export default Card;

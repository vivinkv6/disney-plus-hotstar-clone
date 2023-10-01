import { Text, ScrollView, View, Image, StyleSheet, Pressable } from "react-native";

function Card({ value, setId }) {

    const poster=(!value?.poster_path)?value?.backdrop_path:value?.poster_path;

  return (
    <Pressable onPress={()=>{
      console.log(value.id);
      setId(value?.id)}}>
    <Image
      key={value?.id}
      source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
      style={styles.image}
    />
    </Pressable>
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

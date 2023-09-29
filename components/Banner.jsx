import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
function Banner() {
  return (
    <View style={styles.imageContainer}>
      {/* <Image source={{uri:'https://ntvb.tmsimg.com/assets/p17843098_v_h8_ak.jpg?w=1280&h=720'}} style={styles.image}/> */}
      <ImageBackground
        source={{
          uri: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/John-Wick-Chapter-4-Poster.jpg",
        }}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>John Wick</Text>
        <Pressable style={styles.buttonContainer}>
          <FontAwesome
            name="youtube-play"
            size={30}
            style={{ color: "red", alignItems: "center" }}
          />
          <Text style={styles.button}>Trailer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 20,
    position: "relative",
  },
  image: {
    height: 200,
    width: "100%",
    opacity: 0.6,
  },
  detailContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "55%",
    paddingHorizontal: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },
});

export default Banner;

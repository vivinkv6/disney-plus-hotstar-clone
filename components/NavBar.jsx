import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const logo = require("../assets/logo.png");
function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.subNavContainer1}>
        <FontAwesome name="navicon" size={40} style={styles.icon1} />
        <Image source={logo} style={styles.image} alt="Value Not Found" />
      </View>
      <FontAwesome name="search" size={30} style={styles.icon2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  icon1: {
    color: "white",
  },
  icon2: {
    color: "white",
    marginRight: 20,
  },
  image: {
    height: 50,
    width: 100,
  },
  subNavContainer1: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default NavBar;

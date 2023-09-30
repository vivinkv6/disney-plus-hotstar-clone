import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
const logo = require("../assets/logo.png");
function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome name="home" size={30} style={styles.icon} />
        <Text style={styles.text}>Home</Text>
      </View>
      <View>
        <FontAwesome name="tv" size={30} style={styles.icon} />
        <Text style={styles.text}>Smart TV</Text>
      </View>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <View>
        <MaterialIcons name="sports-esports" size={30} style={styles.icon} />
        <Text style={styles.text}>Sports</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    padding:15
  },

  text: {
    color: "white",
  },
  icon: {
    color: "white",
  },
  image: {
    height: 50,
    width: 100,
  },
});

export default Footer;

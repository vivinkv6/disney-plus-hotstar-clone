import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NavBar />
      </View>
      <View>
        <Banner/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#020520",
  },
});

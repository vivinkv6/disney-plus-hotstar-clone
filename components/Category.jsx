import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

function Category({ setType }) {
  const [activeMovie, setActiveMovie] = useState(true);
  const [activeTv, setActiveTv] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setType("movie");
          setActiveMovie(true);
          setActiveTv(false);
        }}
      >
        {activeMovie ? (
          <Text style={[styles.text, styles.onActive]}>MOVIES</Text>
        ) : (
          <Text style={styles.text}>MOVIES</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          setType("tv");
          setActiveTv(true);
          setActiveMovie(false);
        }}
      >
        {activeTv ? (
          <Text style={[styles.text, styles.onActive]}>TV</Text>
        ) : (
          <Text style={styles.text}>TV</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 20,
  },
  onActive: {
    backgroundColor: "#151330",
    paddingHorizontal: 100,
    borderRadius: 10,
    paddingVertical: 10,
  },
});

export default Category;

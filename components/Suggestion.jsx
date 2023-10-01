import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

function Suggestion({ suggest, setId }) {
  //   useEffect(() => {
  //fetch suggested movies while search

  //   }, [query]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {suggest?.map((value) => {
          return (
            <Pressable onPress={() => setId(value?.id)}>
              <View key={value?.id} style={styles.suggestContainer}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${value?.poster_path}`,
                  }}
                  alt={value?.original_title}
                  style={styles.image}
                />
                <Text style={styles.title}> {value?.original_title}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181729",
    height: 'auto',
    minHeight:800
  },
  image: {
    height: 100,
    width: 80,
    borderRadius: 3,
  },
  suggestContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    paddingLeft: 10,
  },
});

export default Suggestion;

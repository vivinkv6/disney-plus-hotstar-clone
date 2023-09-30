import { useState, useEffect } from "react";

import { View, Text, ScrollView, StyleSheet } from "react-native";

function Genres({type}) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGenres = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.EXPO_PUBLIC_API_KEY}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_ACCESS_TOKEN}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setGenres(data.genres);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    fetchGenres();
  }, [type]);

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {genres.map((value) => {
        return (
          <Text style={styles.text} key={value.id}>
            {value.name}
          </Text>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  text: {
    color: "white",
    padding: 20,
    fontSize: 18,
  },
});

export default Genres;

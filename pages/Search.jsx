import { useEffect, useState } from "react";
import {
  Text,
  View,
  Input,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import Suggestion from "../components/Suggestion";
import { MaterialIcons } from "@expo/vector-icons";

function Search({ query, setQuery, setSearchable, setId }) {
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    const fetchSuggestedMovie = async () => {
      console.log(query);
      console.log("start");
      const result = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.EXPO_PUBLIC_API_KEY}&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data?.results);
          setSuggest(data?.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log("stop");
    };
    fetchSuggestedMovie();
  }, [query]);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setSearchable(false)}>
        <MaterialIcons
          name="arrow-back"
          size={40}
          style={{ color: "white", padding: 10 }}
        />
      </Pressable>
      <TextInput
        keyboardType="ascii-capable"
        value={query}
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"gray"}
        onChangeText={setQuery}
      />

      {/* {query?.length == 0 ? <></> : */}

      <Suggestion suggest={suggest} setId={setId} />

      {/* } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#030729",
  },
  input: {
    height: 60,
    margin: 20,
    padding: 10,
    color: "white",
    backgroundColor: "#03013d",
    fontSize: 20,
    fontWeight: "500",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
    borderRadius: 45,
  },
});

export default Search;

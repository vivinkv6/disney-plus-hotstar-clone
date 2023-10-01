import { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Card from "./Card";

function Item({ discovery,type,setId}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${discovery}?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCards(data.results);
        })
        .catch((err) => {
          console.log(console.log(err.message));
        });
    };
    fetchCard();
  }, [discovery,type]);

  return (
    <>
      <View style={style.container}>
        <View>
          <Text style={style.discovery}>{discovery}</Text>
        </View>
        <View>
          <Text style={style.all}>See all</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={style.imageContainer}
        showsHorizontalScrollIndicator={true}
      >
        {cards.map((value) => {
          return <Card value={value} setId={setId}/>;
        })}
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  imageContainer: {
    flexDirection: "row",
    width: "100%",
  },
  discovery: {
    color: "white",
    fontWeight: "500",
    fontSize: 20,
    textTransform: "capitalize",
  },
  all: {
    color: "blue",
    fontSize: 15,
  },
});

export default Item;

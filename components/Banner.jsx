import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

import { FontAwesome } from "@expo/vector-icons";
function Banner({ type, discovery }) {
  console.log(type);
  console.log(discovery);
  const [banner, setBanner] = useState({
    id: 968051,
    title: "The Nun II",
    backdrop_path: "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
    poster_path: "/c9kVD7W8CT5xe4O3hQ7bFWwk68U.jpg",
    original_title: "The Nun II",
  });
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  useEffect(() => {
    const fetchCard = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${discovery}?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(Math.floor(Math.random()*data.results.length));
          //Math.floor(Math.random()*data.results.length)
          setCards(data.results);
          setCard(cards[Math.floor(Math.random() * cards.length)]);
          setBanner({
            id: card?.id,
            title: card?.title,
            backdrop_path: card?.backdrop_path,
            poster_path: card?.poster_path,
            original_title:card?.original_title
          });
        })
        .catch((err) => {
          console.log(console.log(err.message));
        });
    };
    fetchCard();
  }, [discovery, type]);

  // const poster={banner ? `https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/John-Wick-Chapter-4-Poster.jpg` : banner}

  // const singleBanner=Math.floor(Math.random()* cards.length -1);
  console.log(banner);

  return (
    <View style={styles.imageContainer}>
      {/* <Image source={{uri:'https://ntvb.tmsimg.com/assets/p17843098_v_h8_ak.jpg?w=1280&h=720'}} style={styles.image}/> */}

      {banner?.id == undefined &&
      banner?.backdrop_path == undefined &&
      banner?.original_title == undefined &&
      banner?.title == undefined &&
      banner?.poster_path == undefined ? (
        <>
          <ImageBackground
            key={968051}
            source={{
              uri: `https://image.tmdb.org/t/p/w500/53z2fXEKfnNg2uSOPss2unPBGX1.jpg`,
            }}
            style={styles.image}
          ></ImageBackground>
          <View style={styles.detailContainer}>
            <Text style={styles.title}>The Nun II</Text>
            <Pressable style={styles.buttonContainer}>
              <FontAwesome
                name="youtube-play"
                size={30}
                style={{ color: "red", alignItems: "center" }}
              />
              <Text style={styles.button}>Trailer</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <>
          {banner.backdrop_path ? (
            <ImageBackground
              key={banner?.id}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${banner.backdrop_path}`,
              }}
              style={styles.image}
            ></ImageBackground>
          ) : (
            <ImageBackground
              key={banner?.id}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${banner?.poster_path}`,
              }}
              style={styles.image}
            ></ImageBackground>
          )}
          <View style={styles.detailContainer}>
            {!banner.original_title ? (
              <Text style={styles.title}>{banner?.title}</Text>
            ) : (
              <Text style={styles.title}>{banner?.original_title}</Text>
            )}

            <Pressable style={styles.buttonContainer}>
              <FontAwesome
                name="youtube-play"
                size={30}
                style={{ color: "red", alignItems: "center" }}
              />
              <Text style={styles.button}>Trailer</Text>
            </Pressable>
          </View>
        </>
      )}
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
    opacity: 0.4,
  },
  detailContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft:10
  },
  buttonContainer: {
    flexDirection: "row",
    width: 100,
    paddingHorizontal: 5,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 5,
  },
});

export default Banner;

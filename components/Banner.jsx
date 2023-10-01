import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

function Banner({ type, discovery, setId }) {
  const [banner, setBanner] = useState({
    id: 968051,
    title: "The Nun II",
    backdrop_path: "/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
    poster_path: "/c9kVD7W8CT5xe4O3hQ7bFWwk68U.jpg",
    original_title: "The Nun II",
    release_date: "2023-09-19",
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
          setCards(data?.results);
          setCard(cards[Math.floor(Math.random() * cards?.length)]);
          setBanner({
            id: card?.id,
            title: card?.title,
            backdrop_path: card?.backdrop_path,
            poster_path: card?.poster_path,
            original_title: card?.original_title,
            release_date: card?.release_date,
          });
        })
        .catch((err) => {
          console.log(console.log(err.message));
        });
    };
    fetchCard();
  }, [type]);

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
      banner?.poster_path == undefined &&
      banner?.release_date == undefined ? (
        <>
          <Pressable onPress={() => setId(968051)}>
            <ImageBackground
              key={968051}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/53z2fXEKfnNg2uSOPss2unPBGX1.jpg`,
              }}
              style={styles.image}
            ></ImageBackground>
          </Pressable>
          <View style={styles.detailContainer}>
            <Text style={styles.title}>The Nun II</Text>

            <Text style={{ color: "white" }}>2023-09-07</Text>
          </View>

          {/* <Pressable style={styles.buttonContainer}>
              <FontAwesome
                name="youtube-play"
                size={30}
                style={{ color: "red", alignItems: "center" }}
              />
              <Text style={styles.button}>Trailer</Text>
            </Pressable> */}
        </>
      ) : (
        <>
          {banner.backdrop_path ? (
            <Pressable onPress={() => setId(banner?.id)}>
              <ImageBackground
                key={banner?.id}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${banner.backdrop_path}`,
                }}
                style={styles.image}
              ></ImageBackground>
            </Pressable>
          ) : (
            <Pressable onPress={() => setId(banner?.id)}>
              <ImageBackground
                key={banner?.id}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${banner?.poster_path}`,
                }}
                style={styles.image}
              ></ImageBackground>
            </Pressable>
          )}
          <View style={styles.detailContainer}>
            {!banner.original_title ? (
              <Text style={styles.title}>{banner?.title}</Text>
            ) : (
              <Text style={styles.title}>{banner?.original_title}</Text>
            )}
          </View>
          <Pressable style={styles.buttonContainer}>
            {/* <FontAwesome
                name="youtube-play"
                size={30}
                style={{ color: "red", alignItems: "center" }}
              /> */}

            <Text style={styles.button}>{banner?.release_date}</Text>
          </Pressable>
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
    opacity: 0.5,
  },
  detailContainer: {
    position: "absolute",
    bottom: 60,
    left: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: 150,
  },
  button: {
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 10,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    left: 10,
  },
  genresContainer: {
    flexDirection: "row",
  },
  genres: {
    color: "white",
  },
});

export default Banner;

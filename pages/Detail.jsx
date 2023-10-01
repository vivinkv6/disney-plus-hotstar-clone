import { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
function Detail({ id, type, setId }) {
  const [list, setList] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    //fetch movie details
    const fetchResult = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    //fetch cast details
    const fetchCast = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.EXPO_PUBLIC_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setCast(data?.cast))
        .catch((err) => {
          console.log(err.message);
        });
    };

    fetchResult();
    fetchCast();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500${list.backdrop_path}`,
            }}
            style={styles.Image}
          />
          <View style={styles.arrowContainer}>
            <Pressable onPress={()=>setId(0)}>
            <MaterialIcons name="arrow-back" size={50} style={styles.arrow} />
            </Pressable>
          </View>
          <View style={styles.playContainer}>
            <MaterialIcons
              name="play-circle-filled"
              size={70}
              style={styles.play}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{list?.title}</Text>
            <AntDesign name="heart" size={40} style={styles.heart} />
          </View>
          <View style={styles.genresContainer}>
            {list?.genres?.map((value) => {
              return (
                <Text key={value?.id} style={styles.genres}>
                  {value?.name}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>About</Text>
          <Text style={styles.description}>{list?.overview}</Text>
        </View>
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={styles.castTitle}>Cast</Text>
          <ScrollView horizontal={true}>
            <View style={styles.castContainer}>
              {cast?.map((value) => {
                return (
                  <View horizontal={true} key={value.id} style={styles.cast}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${value.profile_path}`,
                      }}
                      style={styles.profile}
                    />
                    <Text style={styles.castName}>{value.name}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#020520",
  },
  Image: {
    width: "100%",
    height: 500,
    opacity: 0.5,
  },
  bannerContainer: {
    position: "relative",
  },
  arrow: {
    color: "white",
  },
  play: {
    color: "#0590fa",
    backgroundColor: "white",
    borderRadius: 100,
  },
  arrowContainer: {
    position: "absolute",
  },
  playContainer: {
    position: "absolute",
    left: "40%",
    top: "45%",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },
  titleContainer: {
    width: "100%",
    position: "absolute",
    bottom: "10%",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  genresContainer: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    flexWrap:'wrap'
  },
  genres: {
    color: "white",
    padding: 5,
    marginLeft: 15,
  },
  heart: {
    color: "white",
  },
  descriptionContainer: {
    marginLeft: 10,
  },
  descriptionTitle: {
    color: "#0368ff",
    fontSize: 20,
    fontWeight: "500",
  },
  description: {
    color: "white",
    lineHeight: 25,
  },
  castContainer: {
    flexDirection: "row",
    width: "100%",
  },
  castTitle: {
    color: "#0368ff",
    fontSize: 20,
    fontWeight: "500",
  },
  cast: {
    flexDirection: "column",
    padding: 15,
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  castName: {
    color: "white",
    width: 70,
    textAlign:'right',
    marginTop:15
  },
});

export default Detail;

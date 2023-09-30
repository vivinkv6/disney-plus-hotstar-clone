import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Item from "../components/Item";
import { useState } from "react";
import Genres from "../components/Genres";

export default function Home() {

  const [type,setType]=useState('movie')
  const tvDiscovery=['popular',"top_rated","on_the_air","airing_today"];

 let discovery=(type=='movie') ? "upcoming": tvDiscovery[Math.floor(Math.random()*tvDiscovery.length)]



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NavBar />
        </View>
        <View>
          <Category setType={setType}/>
        </View>
        <View>
          <Banner type={type} discovery={discovery}/>
        </View>
        <View>
          <Genres type={type}/>
        </View>
        <View>
          <Item discovery="popular" type={type} />
        </View>
        <View>
          <Item discovery="top_rated" type={type}/>
        </View>
        {type == 'movie' ?
        <>
        <View>
          <Item discovery="now_playing" type={type} />
        </View>
        <View>
          <Item discovery="upcoming" type={type}/>
        </View>
        </>
        :
        <>
        <View>
          <Item discovery="on_the_air" type={type} />
        </View>
        <View>
          <Item discovery="airing_today" type={type}/>
        </View>
        </>
      }
        
      

        <View>
          <Footer/>
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#020520",
  },
});

import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { Asset } from "expo-asset";

const preloadImages = async () => {
  const images = [
    require("../assets/bg.jpg"),
    require("../assets/henallux.png"),
    require("../assets/site.jpg"),
    require("../assets/batiment.jpg"),
    require("../assets/floor.jpg"),
  ];

  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);
};

const Home = ({ navigation }) => {
  useEffect(() => {
    const preload = async () => {
      await preloadImages();
    };
    preload();
  }, []);
  const [fontsLoaded] = useFonts({
    Arials: require("../assets/fonts/ARIALNB.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.home}>
          <Text style={styles.text}>Henallux Wayfinding</Text>
        </View>
        <View style={styles.test}>
          <Image
            source={require("../assets/henallux.png")}
            contentFit="contain"
            style={styles.henallux}
          ></Image>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Site")}
        >
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#ee7f00",
    paddingVertical: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Arials",
  },
  test: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  henallux: {
    width: "80%",
    height: "60%",
  },
  home: {
    backgroundColor: "#ee7f00",
    width: "80%",
    alignItems: "center",
    marginTop: 50,
    paddingVertical: 10,
    borderRadius: 5,
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default Home;

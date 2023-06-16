import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Site = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/site.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Choisissez un site :</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>DTM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>IESN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>Arlon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>Malonne</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  subcontainer: {
    width: "80%",
    backgroundColor: "#ee7f00",
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Arials",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ee7f00",
    borderRadius: 10,
    width: "40%",
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    color: "#fff",
    padding: 10,
    fontFamily: "Arials",
  },
  image: {
    flex: 1,
    width: "100%",
  },
});

export default Site;

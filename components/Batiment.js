import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Batiment = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/batiment.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Choisissez un bâtiment :</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Floor")}
        >
          <Text style={styles.text}>Ancien Batiment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>Batiment des 600</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Batiment")}
        >
          <Text style={styles.text}>Batiment Proximus</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  subcontainer: {
    width: "90%",
    backgroundColor: "#ee7f00",
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Arials",
    color: "#fff",
  },
  button: {
    backgroundColor: "#ee7f00",
    borderRadius: 10,
    width: "70%",
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

export default Batiment;

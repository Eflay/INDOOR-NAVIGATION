import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Destination = ({ route, navigation }) => {
  const { begin, points, adgency, imagePlan } = route.params;
  const [randomPoints, setRandomPoints] = useState([]);

  useEffect(() => {
    const shuffledPoints = points.sort(() => 0.5 - Math.random());
    const selectedPoints = shuffledPoints.slice(0, 6);
    setRandomPoints(selectedPoints);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Choisissez votre destination :</Text>
      </View>
      <View style={styles.buttonContainer}>
        {randomPoints.map((item) => {
          if (item.id == begin) {
            return null;
          } else {
            return (
              <TouchableOpacity
                style={styles.button}
                key={item.id}
                onPress={() =>
                  navigation.navigate("Dijkstra", {
                    nodeIdStart: begin,
                    nodeIdEnd: item.id,
                    data: points,
                    adgency: adgency,
                    imagePlan: imagePlan,
                  })
                }
              >
                <Text style={styles.text}>{item.label}</Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 10,
    paddingHorizontal: 20,
    alignContent: "center",
  },
  subcontainer: {
    width: "90%",
    backgroundColor: "#ee7f00",
    marginBottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
    width: "25%",
    marginBottom: 10,
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 28,
    color: "#fff",
    padding: 10,
    fontFamily: "Arials",
  },
});

export default Destination;

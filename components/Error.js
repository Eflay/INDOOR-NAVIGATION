import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Error = ({ route, navigation }) => {
  const { myErrorText } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{myErrorText}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Floor")}
      >
        <Text style={styles.text}>Revenir aux étages</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Arials",
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
});

export default Error;

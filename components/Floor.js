import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Floor = ({ navigation }) => {
  const data1 = [
    { id: "A", label: "121", description: "Laboratoire 121", x: 2809.143747686898, y: -3730.448199748962 },
    { id: "B", label: "SEC", description: "Secrétariat", x: -1262.262398134742, y: -3206.818107835352 },
    { id: "C", label: "101", description: "Laboratoire 101", x: -742.1103469380178, y: -3225.247821120473 },
    { id: "D", label: "ACC", description: "Accueil", x: 453.1328760672914, y: -3209.2 },
    { id: "E", label: "100", description: "Laboratoire 100", x: -1295.463702889261, y: -2726.0 },
    { id: "F", label: "INF", description: "Infirmerie", x: 615.4499207948247, y: -2726.0 },
    { id: "I", label: "CAF", description: "Cafétariat", x: -1800.859647361038, y: -2624.439445271913 },
    { id: "K", label: "122", description: "Laboratoire 122", x: 3438.466586476221, y: -3722.84983873491 },
    { id: "L", label: "120", description: "Laboratoire 120", x: 2402.454283310229, y: -3929.01833744554 },
    { id: "M", label: "ETU", description: "Zone étudiante", x: 4482.459909421113, y: -3467.231057266969 },
    { id: "O", label: "310", description: "Laboratoire 310", x: -674.452104803684, y: -806.535410190103 },
    { id: "P", label: "311", description: "Laboratoire 311", x: -256.0693686944287, y: -1013.634492308542 },
    { id: "Q", label: "312", description: "Laboratoire 312", x: 327.3634648953157, y: -1013.634492308542 },
    { id: "R", label: "313", description: "Laboratoire 313", x: 910.7962984850601, y: -1067.326873718936 },
    { id: "S", label: "511", description: "Laboratoire 511", x: -2559.755992803082, y: -818.040954932876 },
    { id: "T", label: "502", description: "Laboratoire 502", x: -2580.737529961756, y: 2371.728949934361 },
    { id: "U", label: "513", description: "Laboratoire 513", x: -2508.558364142285, y: 397.4752436198614 },
    { id: "V", label: "501", description: "Laboratoire 501", x: -2533.223693486958, y: 3513.635446048458 },
    { id: "X", label: "503", description: "Laboratoire 503", x: -2788.8, y: -4350.0 },
  ];

  const adgency1 = {
    A: { B: 4, C: 2, D: 3, K: 1 },
    B: { A: 4, D: 2, E: 1 },
    C: { A: 4, D: 2 },
    D: { B: 2, C: 2 },
    E: { F: 3, I: 3, B: 1 },
    F: { E: 3, D: 3, L: 4 },
    I: { S: 3, E: 3 },
    K: { L: 2, M: 3 },
    L: { K: 2, A: 1, F: 4 },
    M: { K: 3 },
    O: { P: 2, Q: 3, S: 4 },
    P: { O: 2, Q: 3, R: 3 },
    Q: { O: 3, P: 3, R: 3 },
    R: { P: 3, Q: 3 },
    S: { O: 4, I: 3, U: 2 },
    T: { S: 5, U: 4, V: 2 },
    U: { T: 4 },
    V: { T: 2 },
    X: { B: 2 },
  };

  const data2 = [
    { id: "A", label: "320", description: "Laboratoire 320", x: -645.092182085109, y: -801.3555524859394 },
    { id: "B", label: "321", description: "Laboratoire 321", x: -219.3, y: -994.0459654135269 },
    { id: "C", label: "322", description: "Laboratoire 322", x: 360.7, y: -994.0459654135269 },
    { id: "D", label: "323", description: "Laboratoire 323", x: 940.7, y: -994.0459654135269 },
  ];

  const adgency2 = {
    A: { B: 2, C: 3, D: 5 },
    B: { A: 2, C: 1, D: 3 },
    C: { B: 1, A: 3, D: 2 },
    D: { B: 2, C: 3, A: 5 },
  };

  const data3 = [
    { id: "A", label: "114", description: "Laboratoire 114", x: 600.8, y: -2832.0 },
    { id: "B", label: "107", description: "Laboratoire 107", x: -608.95, y: -2832.0 },
    { id: "C", label: "108", description: "Laboratoire 108", x: -1120.95, y: -2832.0 },
    { id: "D", label: "110", description: "Laboratoire 110", x: -1214.45, y: -3060.0 },
    { id: "E", label: "111", description: "Laboratoire 111", x: -168.6, y: -3060.0 },
    { id: "F", label: "112", description: "Laboratoire 112", x: 235.3, y: -3060.0 },
    { id: "G", label: "116", description: "Laboratoire 116", x: 478.25, y: -3060.0 },
    { id: "H", label: "117", description: "Laboratoire 117", x: 1602.05, y: -3060.0 },
    { id: "I", label: "333", description: "Laboratoire 333", x: -219.3, y: -980.3647675670252 },
    { id: "J", label: "334", description: "Laboratoire 334", x: 940.7, y: -980.3647675670252 },
    { id: "K", label: "124", description: "Laboratoire 124", x: 2451.25, y: -3785.5 },
    { id: "L", label: "125", description: "Laboratoire 125", x: 3475.2, y: -3785.5 },
    { id: "M", label: "126", description: "Laboratoire 126", x: 4029.2, y: -3724.5 },
    { id: "N", label: "115", description: "Laboratoire 115", x: 1183.8, y: -2832.0 },
    { id: "O", label: "BIB", description: "Zone Bibliothèque", x: -2314.1, y: -2412.344886348727 },
  ];

  const adgency3 = {
    A: { B: 2, E: 2, F: 2, G: 1, C: 3, A: 2, N: 1 },
    B: { A: 2, C: 1, E: 2, F: 3 },
    C: { B: 1, D: 1, F: 1, G: 2 },
    D: { C: 1, G: 1, H: 2, M: 4, A: 2, E: 1 },
    E: { A: 2, B: 2, F: 1, I: 3, D: 1 },
    F: { A: 1, B: 2, C: 3, E: 1 },
    G: { A: 1, C: 2, D: 1, H: 1 },
    H: { D: 2, G: 1, J: 3, M: 4 },
    I: { E: 3, J: 2, N: 3, O: 5, A: 3 },
    J: { I: 1 },
    K: { H: 2, L: 1, N: 2 },
    L: { K: 1, M: 1 },
    M: { L: 1 },
    N: { A: 1 },
    O: { C: 5 },
  };

  const data4 = [
    { id: "A", label: "202", description: "Laboratoire 202", x: -1044.888774254945, y: -2832.0 },
    { id: "B", label: "201", description: "Laboratoire 201", x: -176.25, y: -2832.0 },
    { id: "C", label: "204", description: "Laboratoire 204", x: -1138.388774254945, y: -3060.0 },
    { id: "D", label: "205", description: "Laboratoire 205", x: 146.55, y: -3090.0 },
    { id: "E", label: "211", description: "Laboratoire 211", x: 582.3, y: -3070.25296650544 },
    { id: "F", label: "210", description: "Laboratoire 210", x: 1095.05, y: -3099.0 },
    { id: "G", label: "212", description: "Laboratoire 212", x: 666.3, y: -2832.0 },
    { id: "H", label: "ERA", description: "Zone Erasmus", x: 173, y: -2134.0 },
  ];

  const adgency4 = {
    A: { B: 2, C: 2, G: 3, E: 3 },
    B: { A: 2, G: 4, E: 2, F: 2, D: 1, H: 2 },
    C: { A: 2, D: 1, G: 2 },
    D: { C: 1, E: 1, F: 2, B: 1 },
    E: { B: 2, D: 1, A: 3, F: 1 },
    F: { D: 2, E: 1 },
    G: { A: 3, B: 2, C: 2, H: 2 },
    H: { B: 2, G: 2 },
  };

  const data5 = [
    { id: "A", label: "01", description: "Laboratoire informatique 01", x: -772.707243533856, y: -2828.089743589743 },
    { id: "B", label: "02", description: "Laboratoire informatique 02", x: 1220.932231404959, y: -2828.089743589743 },
    { id: "C", label: "OUV", description: "Local Ouvrier", x: 1575.612809917355, y: -3063.141025641026 },
    { id: "F", label: "ARC", description: "Archives", x: -783.4871900826446, y: -3063.141025641026 },
    { id: "G", label: "SI1", description: "Salle informatique 01", x: 2938.776443127108, y: -3422.342787568689 },
    { id: "H", label: "HSP", description: "Zone de maintenance", x: 2218.0, y: -3725.0 },
    { id: "I", label: "SI2", description: "Salle informatique 02", x: 3778.2, y: -3422.342787568689 },
    { id: "J", label: "SI3", description: "Salle informatique 03", x: 4065.965356165097, y: -3422.342787568689 },
    { id: "K", label: "SI4", description: "Salle informatique 04", x: 4027.026863376852, y: -3578.857251908397 },
    { id: "L", label: "ETU", description: "Salle étudiante", x: -1980.8894652148, y: -2219.49658203125 },
    { id: "M", label: "301", description: "Laboratoire 301", x: -329.3, y: -892.0 },
    { id: "N", label: "300", description: "Laboratoire 300", x: -579.3, y: -887.2767211366169 },
    { id: "O", label: "510", description: "Laboratoire 510", x: -2638.8, y: -787.0 },
    { id: "P", label: "511", description: "Laboratoire 511", x: -2638.8, y: -267.0 },
    { id: "Q", label: "512", description: "Laboratoire 512", x: -2638.8, y: 317.0 },
  ];

  const adgency5 = {
    A: { B: 2, C: 3, F: 1 },
    B: { A: 2, C: 1 },
    C: { B: 1, A: 3 },
    F: { G: 4, H: 5, A: 1 },
    G: { F: 4, H: 2, I: 1, J: 1, B: 2 },
    H: { G: 1, F: 5, I: 1, J: 1 },
    I: { G: 1, H: 2, J: 1, K: 2 },
    J: { G: 2, H: 3, I: 1, K: 1 },
    K: { I: 2, J: 1 },
    L: { A: 2, F: 2, M: 3, N: 3 },
    M: { L: 3, N: 1 },
    N: { M: 1, O: 2, L: 3 },
    O: { N: 2, P: 1, L: 2 },
    P: { O: 1, Q: 1 },
    Q: { P: 1 },
  };

  return (
    <ImageBackground
      source={require("../assets/floor.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Choisissez un étage :</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("QRCode", {
              myText: "Scannez où vous êtes",
              begin: null,
              points: data4,
              adgency: adgency4,
              imagePlan: 3,
            })
          }
        >
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("QRCode", {
              myText: "Scannez où vous êtes",
              begin: null,
              points: data3,
              adgency: adgency3,
              imagePlan: 2,
            })
          }
        >
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("QRCode", {
              myText: "Scannez où vous êtes",
              begin: null,
              points: data2,
              adgency: adgency2,
              imagePlan: 1,
            })
          }
        >
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("QRCode", {
              myText: "Scannez où vous êtes",
              begin: null,
              points: data1,
              adgency: adgency1,
              imagePlan: 0,
            })
          }
        >
          <Text style={styles.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("QRCode", {
              myText: "Scannez où vous êtes",
              begin: null,
              points: data5,
              adgency: adgency5,
              imagePlan: 4,
            })
          }
        >
          <Text style={styles.text}>- 1</Text>
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
    fontSize: 35,
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

export default Floor;

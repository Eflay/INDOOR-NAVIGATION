import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableOpacity } from "react-native-gesture-handler";

const QRCode = ({ route, navigation }) => {
  let { myText, points, adgency, begin, imagePlan } = route.params;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const findPoint = (data) => {
    const [pointX, pointY] = data.split(",");

    for (element in points) {
      if (pointX == points[element].x && pointY == points[element].y) {
        return points[element].id;
      }
    }
  };

  const redirection = () => {
    navigation.navigate("Destination", {
      begin: begin,
      points: points,
      adgency: adgency,
      imagePlan: imagePlan,
    });
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    if (begin == null) {
      begin = findPoint(data);
      const modifiedAdjacencyList = Object.fromEntries(
        Object.entries(adgency).map(([key, value]) => {
          if (key === begin) {
            return ["start", value];
          }
          return [key, value];
        })
      );
      adgency = modifiedAdjacencyList;
    }

    redirection();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.layerTop}>
          <TouchableOpacity style={styles.oui}>
            <Text style={styles.title}>{myText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>
    </View>
  );
};

const opacity = "#fff";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Arials",
  },
  text: {
    color: opacity,
    fontSize: 30,
    fontFamily: "Arials",
  },
  oui: {
    borderRadius: 5,
    backgroundColor: "#ee7f00",
    padding: 10,
  },
  button: {
    marginTop: 650,
    alignItems: "center",
    backgroundColor: "#ee7f00",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity,
    alignItems: "center",
    justifyContent: "center",
  },
  layerCenter: {
    flex: 2,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 4,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
});

export default QRCode;

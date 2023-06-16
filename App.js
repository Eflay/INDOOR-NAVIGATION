import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import Floor from "./components/Floor";
import QRCode from "./components/QRCode";
import Home from "./components/Home";
import DijkstraAnimation from "./components/Dijkstra";
import Site from "./components/Site";
import Batiment from "./components/Batiment";
import Error from "./components/Error";
import Destination from "./components/Destination";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Group
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#0071b9",
            },
            headerTitle: "Henallux WayFinding",
            headerTitleStyle: {
              color: "#fff",
            },
            headerBackVisible: false,
            headerRight: () => {
              return (
                <Image
                  source={require("./assets/henallux.png")}
                  resizeMode="contain"
                  style={{ width: 30, height: 30, marginRight: 30 }}
                />
              );
            },
          }}
        >
          <Stack.Screen name="Floor" component={Floor} />
          <Stack.Screen name="Site" component={Site} />
          <Stack.Screen name="Batiment" component={Batiment} />
          <Stack.Screen name="QRCode" component={QRCode} />
          <Stack.Screen name="Dijkstra" component={DijkstraAnimation} />
          <Stack.Screen name="Error" component={Error} />
          <Stack.Screen name="Destination" component={Destination} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

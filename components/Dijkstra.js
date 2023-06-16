import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground } from "react-native";
import Svg, { Circle, Line, Text as SvgText } from "react-native-svg";

const DijkstraAnimation = ({ route, navigation }) => {
  let { nodeIdStart, nodeIdEnd, adgency, data, imagePlan } = route.params;
  const [results, setResults] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldRenderLines, setShouldRenderLines] = useState(false);
  const [selectedNode, setSelectedNode] = useState("");

  const [showResults, setShowResults] = useState(null);
  const [test, setTest] = useState([]);

  const nodes = data;

  const processed = [];

  const regex = new RegExp(`"${nodeIdEnd}":`, "g");
  const jsonString = JSON.stringify(adgency);
  const modifiedJsonString = jsonString.replace(regex, '"finish":');
  adgency = JSON.parse(modifiedJsonString);

  // // Les liaisons entre les nœuds
  const problem = adgency;

  useEffect(() => {
    dijkstra(problem);
    setTest(processed);
  }, []);

  useEffect(() => {
    if (currentIndex < nodes.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 1000);

      if (results && currentIndex >= nodes.length - 1) {
        setShouldRenderLines(true);
        setShowResults(true);
      } else {
        setShowResults(null);
      }

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
      if (lowest === null || costs[node] < costs[lowest]) {
        if (!processed.includes(node)) {
          lowest = node;
        }
      }
      return lowest;
    }, null);
  };

  const dijkstra = (graph) => {
    // track lowest cost to reach each node
    const costs = Object.assign({ finish: Infinity }, graph.start);

    // track paths
    const parents = { finish: null };
    for (let child in graph.start) {
      parents[child] = "start";
    }

    let node = lowestCostNode(costs, processed);

    while (node) {
      let cost = costs[node];
      let children = graph[node];
      for (let n in children) {
        let newCost = cost + children[n];
        if (!costs[n]) {
          costs[n] = newCost;
          parents[n] = node;
        }
        if (costs[n] > newCost) {
          costs[n] = newCost;
          parents[n] = node;
        }
      }

      processed.push(node);

      node = lowestCostNode(costs, processed);
    }

    let optimalPath = ["finish"];
    let parent = parents.finish;
    while (parent) {
      optimalPath.push(parent);
      parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
      distance: costs.finish,
      path: optimalPath,
    };

    setResults(results);
  };

  const color = (id) => {
    fill = "white";

    if (shouldRenderLines && results) {
      results.path.map((node, index) => {
        if (results.path.includes(id)) {
          fill = "green";
        } else if (id == nodeIdStart || id == nodeIdEnd) {
          fill = "red";
        } else {
          fill = "white";
        }
      });
    }
    return fill;
  };

  const colorText = (id) => {
    fill = "black";

    if (shouldRenderLines && results) {
      results.path.map((node, index) => {
        if (results.path.includes(id)) {
          fill = "white";
        } else if (id == nodeIdStart || id == nodeIdEnd) {
          fill = "white";
        }
      });
    }
    return fill;
  };

  switch (imagePlan) {
    case 0:
      imageSource = require("../assets/plan_0.png");
      break;
    case 1:
      imageSource = require("../assets/plan_1.png");
      break;
    case 2:
      imageSource = require("../assets/plan_2.png");
      break;
    case 3:
      imageSource = require("../assets/plan_3.png");
      break;
    case 4:
      imageSource = require("../assets/plan_-1.png");
      break;
    default:
      imageSource = require("../assets/plan_1.png");
      break;
  }

  const showTextLocal = (description) => {
    if (description == selectedNode.substr(15)) setSelectedNode("");
    else {
      setSelectedNode("Ce local est : " + description);
    }
  };

  return (
      <SafeAreaView style={styles.container}>
        <Svg>
          {nodes.map((node, index) => {
            if (results) {
              if (index <= currentIndex) {
                if (test[index] == "start") {
                  test[index] = nodeIdStart;
                } else if (test[index] == "finish") {
                  test[index] = nodeIdEnd;
                }
                const trueNode = nodes.find((node) => node.id === test[index]);
                if (test[index]) {
                  return (
                    <React.Fragment key={test[index]}>
                      <Circle
                        cx={trueNode.x / 20 + 170}
                        cy={-trueNode.y / 20 + 295}
                        r={10}
                        fill={color(trueNode.id)}
                        stroke="black"
                        strokeWidth={2}
                        onPress={() => showTextLocal(trueNode.description)}
                      />
                      <SvgText
                        x={trueNode.x / 20 + 170}
                        y={-trueNode.y / 20 + 299}
                        textAnchor="middle"
                        fontSize={10}
                        fill={colorText(trueNode.id)}
                      >
                        {trueNode.label}
                      </SvgText>
                    </React.Fragment>
                  );
                } else {
                  return null;
                }
              }
            }
          })}
          {shouldRenderLines && results.path
            ? results.path.map((nodeId, index) => {
                if (index <= currentIndex) {
                  if (nodeId === "start") {
                    nodeId = nodeIdStart;
                  } else if (nodeId === "finish") {
                    nodeId = nodeIdEnd;
                  }
                  const fromNode = nodes.find((node) => node.id === nodeId);
                  let toNode = nodes.find(
                    (node) => node.id === results.path[index + 1]
                  );

                  if (toNode === undefined) {
                    toNode = nodes.find((node) => node.id === nodeIdEnd);
                  }

                  return (
                    <React.Fragment key={index}>
                      <Line
                        x1={fromNode.x / 20 + 170}
                        y1={-fromNode.y / 20 + 295}
                        x2={toNode.x / 20 + 170}
                        y2={-toNode.y / 20 + 295}
                        stroke="black"
                        strokeWidth={1}
                        strokeDasharray={[5, 5]}
                      />
                    </React.Fragment>
                  );
                }
              })
            : null}
        </Svg>
        <Text style={styles.textDescription}>
          {selectedNode}
        </Text>
        <Text style={styles.text}>
          {showResults
            ? "La distance est de " + results.distance
            : "Chargement ..."}
        </Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 150,
  },
  text: {
    fontSize: 35,
  },
  legend: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textDescription: {
    position: "absolute",
    bottom: 50,
    fontSize: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "75%",
  },
});

export default DijkstraAnimation;

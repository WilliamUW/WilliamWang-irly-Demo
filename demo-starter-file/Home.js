import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Swipe from "./Swipe";


const myWidth = Dimensions.get("window").width;
const myHeight = Dimensions.get("window").height;
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome to the IRLY Swipe Demo!</Text>
        {/* <Button
          title="Begin"
          style={styles.btn}
          onPress={() => navigation.navigate("Swipe")}
        /> */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Swipe")}
        >
          <Text style={styles.text}>Begin</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.text}>Settings</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: myHeight / 3,
  },
  btn: {
    color: "#FFF",
    maxWidth: 10,
    borderRadius: 4,
  },
  button: {
    paddingVertical: 1,
    paddingHorizontal: 5,
    marginTop: 10,
    marginLeft: myWidth / 3.5,
    maxWidth: 150,
    maxHeight: 50,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
});

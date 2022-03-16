import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Card = ({ card }) => {
  const [imgIndex, setImageIndex] = useState(0);
  const changePhoto = () => {
    setImageIndex((imgIndex + 1) % 3);
  };
  // console.log(card);
  //console.log(card.images);
  //console.log(card.images[imgIndex]);
  if (card) {
  return (
    <TouchableWithoutFeedback onPress={changePhoto}>
      <View style={styles.card}>
        <Image source={{uri :(card && card.images ? card.images[imgIndex] : "" )}} style={styles.cardImage} />
        <Text style={styles.txt}>{card ? card.name : "Default"}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  } else {
    return <Text>That's all folks!</Text>;
  }
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 0.9,
    borderRadius: 20,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#B1D0E0",
    backgroundColor: "#CEE5D0",
  },
  cardImage: {
    width: 300,
    flex: 0.7,
    resizeMode: "contain",
    backgroundColor: "#CEE5D0",
  },
  txt: {
    flex: 0.1,
    fontWeight: "bold",
    fontSize: 20,
    color: "#AEFEFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 15,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./Card";
import carddata from "./carddata";
import { useNavigation } from "@react-navigation/core";

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAsKEmxVNsnDUDxZJ7kwTZMk8ehDrOdlc0",

  authDomain: "irly-demo.firebaseapp.com",

  databaseURL: "https://irly-demo-default-rtdb.firebaseio.com",

  projectId: "irly-demo",

  storageBucket: "irly-demo.appspot.com",

  messagingSenderId: "179945535098",

  appId: "1:179945535098:web:a6f270ea7e3072ecb0edc3"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

import { ref, child, get } from "firebase/database";

let databaseReference = get(ref(getDatabase()));
console.log(databaseReference);
let data = [];


class SwipeClass extends React.Component {
  render() {
    return <Swipe />;
  }
}

const Swipe = () => {

  const [index, setIndex] = useState(0);
  const onSwipe = () => {
    setIndex(index + 1);
  };
  const navigation = useNavigation();
  databaseReference.then((snapshot) => {
    if (snapshot.exists()) {
      console.log("Data available");
      console.log(snapshot.val());
      data = snapshot.val();
      this.forceUpdate();
      this.setState(this.state);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Swiper
          useViewOverflow={Platform.OS === "ios"}
          cards={data}
          cardIndex={index}
          renderCard={(card) => <Card card={card} />}
          onSwiper={onSwipe}
          stackSize={4} //no of items
          stackScale={10} //scale between two stacks
          stackSeparation={14}
          disableBottomSwipe
          disableTopSwipe
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "#FF008E",
                  color: "#fff",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "YESS",
              style: {
                label: {
                  backgroundColor: "#95CD41",
                  color: "#fff",
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
      
      />

      </View>

    </SafeAreaView>
  );
};

export default Swipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    flex: 1,
    borderRadius: 10,
    shadowRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cardImage: {
    width: 160,
    flex: 1,
    resizeMode: "contain",
  },
});

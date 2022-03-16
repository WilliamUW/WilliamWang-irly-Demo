import React, { useState, useEffect } from 'react';
import { Dimensions, TextInput, StyleSheet, Button, Image, View, Platform, Text, Input, Label, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/core";
import Swipe from "./Swipe";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const myWidth = Dimensions.get("window").width;
const myHeight = Dimensions.get("window").height;

const ProfileTextInput = () => {
  const [text, onChangeText] = React.useState("Default username");
  const [number, onChangeNumber] = React.useState("123-456-7890");

  return (
    <SafeAreaView>
      <Text style={styles.txt}>Your Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text>{}</Text>
      <Text style={styles.txt}>{"Your Phone Number:"}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="123-456-7890"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Customize your Profile!</Text>
      <Text></Text>
      <ProfileTextInput />
      <Text></Text>
      <Button title="Pick Profile Pic" onPress={pickImage} />
      <Text></Text>
      {image && <Text>Your Current Profile Pic:</Text>}
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tinyLogo: {
    width: 50,
    height: 50,
  },  
  txt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 20,
  },
  input: {
    marginLeft: 20,
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
    marginLeft: myWidth / 2.5,
    maxWidth: 100,
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


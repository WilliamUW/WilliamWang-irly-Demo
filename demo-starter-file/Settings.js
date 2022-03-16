import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  Pressable,
  Dimensions,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import Swipe from "./Swipe";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import * as ImagePicker from "react-native-image-picker"
// import { Upload, Button, Space } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

import data from "./carddata"


/*
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

  import { getAuth, signInWithRedirect } from "firebase/auth";

 auth = getAuth();
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  */

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
import * as ImagePicker from 'expo-image-picker';

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

const myWidth = Dimensions.get("window").width;
const myHeight = Dimensions.get("window").height;
class Settings extends React.Component {
  

  handleChoosePhoto = () => {
    console.log("Photo Button pressed");

    let options = {
      title: 'Choose an image',       
        storageOptions: {
          skipBackup: true
        }
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        // on cancel
    } else { }

      //console.log(response);
    });
  };
  /*
  state = {
    photo: null,
  }
  const navigation = useNavigation();
  

*/
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.txt}>{}</Text>
          <Text style={styles.txt}>User Profile Tab</Text>
          <Text style={styles.txt}>{}</Text>
          <ProfileTextInput style={styles.txt}></ProfileTextInput>
          <Text style={styles.txt}>{}</Text>
          <Button
            title="Choose Profile Pic"
            onPress={pickImage}
          ></Button>
          {/* <Button
          title="Begin"
          style={styles.btn}
          onPress={() => navigation.navigate("Swipe")}
        /> */}
          {/* <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(Swipe)}
        >
          <Text style={styles.text}>Begin</Text>
        </Pressable> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

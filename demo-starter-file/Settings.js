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



const ProfileTextInput = () => {
  const [text, onChangeText] = React.useState("Default Username");
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
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
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
            onPress={this.handleChoosePhoto}
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

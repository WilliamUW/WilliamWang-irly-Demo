import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import React, { useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from "@react-navigation/core";
import Home from "./Home";
import Swipe from "./Swipe";
import Settings from "./Settings";
import SwipeClass from "./Swipe";
import ImagePickerExample from "./ImagePickerExample";


// react-native-vector-icons/Ionicons otherwise.
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {HomeScreen} from "../screens/HomeScreen"; 

// Import the functions you need from the SDKs you need


export const ThemeContext = React.createContext();


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Swipe') {
          iconName = 'ios-list-box-outline';
        } else {
          iconName = 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Swipe"  component={SwipeClass} />
      <Tab.Screen name="User Profile" component={ImagePickerExample} />
    </Tab.Navigator>
  );
}

const mytheme = DefaultTheme;
mytheme.colors.background = "#1A374D";

class Welcome extends React.Component {
  render() {
    return <Text>test</Text>;
  }
}

//
export default function App() {
  const [theme, setTheme] = useState("Light");
  const themeData = { theme, setTheme };
  
  console.log("App ran");
  
  return (
  <>
    <NavigationContainer theme={mytheme}>
      {/* <StackNavigator /> */}
      <MyTabs/>
      {/* <Text>Bottom</Text> */}
    </NavigationContainer>

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

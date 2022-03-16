import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Swipe from "./Swipe";
import { SafeAreaProvider } from "react-native-safe-area-context";
import data from "./carddata"

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Swipe"
          component={Swipe}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});

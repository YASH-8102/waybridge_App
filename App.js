import { StatusBar, StyleSheet } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Navigator from "./Screens/Navigator";
import React from "react";

const App = () => {
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.mergeItem("@storage_Key", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        console.log(value);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  storeData({ name: "yash" });
  getData();
  StatusBar.setBackgroundColor("rgba(255,255,255,0.2)");
  StatusBar.setTranslucent(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigator />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;

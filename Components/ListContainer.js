import { StyleSheet, Text, View } from "react-native";

import AnimatedButton from "./AnimatedButton";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ListContainer = (props) => {
  return (
    <View style={{ margin: 30 }}>
      <View>
        <Text
          style={{
            fontSize: 20,

            fontFamily: "Sora-Medium",
          }}
        >
          Items
        </Text>
      </View>
      <ScrollView style={{ marginVertical: 10, maxHeight: "75%" }}>
        {props.children}
      </ScrollView>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AnimatedButton color={"#a6e3e9"} title={"Next"} />
      </View>
    </View>
  );
};

export default ListContainer;

const styles = StyleSheet.create({});
